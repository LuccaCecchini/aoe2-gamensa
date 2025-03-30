const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");
const os = require("os");
const path = require("path");
const fs = require("fs");

const agealyser = require("./agealyser/agealyser"); // asegúrate de que el repo esté clonado aquí

admin.initializeApp();
const db = admin.firestore();
const storage = new Storage();

exports.analyzeGameUpload = functions.storage
  .object()
  .onFinalize(async (object) => {
    const filePath = object.name;
    if (!filePath.endsWith(".aoe2record")) {
      console.log("Archivo ignorado (no es .aoe2record):", filePath);
      return null;
    }

    const bucket = storage.bucket(object.bucket);
    const tempFilePath = path.join(os.tmpdir(), path.basename(filePath));
    await bucket.file(filePath).download({ destination: tempFilePath });
    console.log("Archivo descargado a:", tempFilePath);

    // Procesar con AgeAlyser
    const result = await agealyser(tempFilePath);

    // Guardar en Firestore
    await db.collection("games").add({
      filename: path.basename(filePath),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      result,
    });

    console.log("Partida analizada y guardada.");
    return null;
  });
