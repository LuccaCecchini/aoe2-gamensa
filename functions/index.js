const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { analyzeRecording } = require("./agealyser/agealyser");
const { Storage } = require("@google-cloud/storage");
const path = require("path");

admin.initializeApp();

const db = admin.firestore();
const storage = new Storage();

exports.processReplay = functions.storage
  .object()
  .onFinalize(async (object) => {
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

    const fs = require("fs");
    const buffer = fs.readFileSync(tempFilePath);

    const data = await analyzeRecording(buffer);

    if (data) {
      await db.collection("matches").add({
        fileName: path.basename(filePath),
        uploadedAt: new Date().toISOString(),
        ...data,
      });
      console.log("Partida analizada y guardada:", filePath);
    } else {
      console.log("No se pudo analizar la partida:", filePath);
    }
  });
