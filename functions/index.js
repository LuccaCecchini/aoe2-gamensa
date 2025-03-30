const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { exec } = require("child_process");
const path = require("path");
const os = require("os");
const fs = require("fs");
const { parseReplay } = require("./agealyser/src/analyze");

admin.initializeApp();

exports.analyzeGame = functions.storage.object().onFinalize(async (object) => {
  const filePath = object.name;

  if (!filePath.endsWith(".aoe2record")) {
    console.log("No es un archivo de grabación .aoe2record, abortando.");
    return null;
  }

  const bucket = admin.storage().bucket(object.bucket);
  const tempFilePath = path.join(os.tmpdir(), path.basename(filePath));

  await bucket.file(filePath).download({ destination: tempFilePath });
  console.log("Archivo descargado en", tempFilePath);

  try {
    const result = await parseReplay(tempFilePath); // Usa el analizador de AgeAlyser directamente
    console.log("Resultado del análisis:", result);

    const db = admin.firestore();
    await db.collection("matches").add(result);

    console.log("Datos guardados en Firestore.");
  } catch (err) {
    console.error("Error analizando archivo:", err);
  }

  fs.unlinkSync(tempFilePath); // Limpieza

  return null;
});

