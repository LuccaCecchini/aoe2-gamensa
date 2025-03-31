const { onObjectFinalized } = require("firebase-functions/v2/storage");
const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

admin.initializeApp();
const db = admin.firestore();
const storage = new Storage();

exports.processReplay = onObjectFinalized(async (event) => {
  const object = event.data;
  const bucketName = object.bucket;
  const filePath = object.name;

  if (!filePath.endsWith(".aoe2record")) {
    console.log("Archivo ignorado (no es .aoe2record):", filePath);
    return;
  }

  const tempFilePath = `/tmp/${path.basename(filePath)}`;
  const bucket = storage.bucket(bucketName);
  const file = bucket.file(filePath);
  await file.download({ destination: tempFilePath });

  try {
    const command = `PYTHONPATH=./pyenv python3 analyze/cli_analyze.py "${tempFilePath}"`;
    console.log("⏳ Ejecutando comando:", command);
    execSync(command, { stdio: "inherit" });

    const resultPath = "result.json";
    if (!fs.existsSync(resultPath)) throw new Error("No se generó result.json");

    const data = JSON.parse(fs.readFileSync(resultPath, "utf8"));
    await db.collection("matches").add({
      fileName: path.basename(filePath),
      uploadedAt: new Date().toISOString(),
      ...data,
    });

    console.log("✅ Partida procesada con éxito:", filePath);
  } catch (err) {
    console.error("❌ Error al procesar partida:", err);
  }
});
