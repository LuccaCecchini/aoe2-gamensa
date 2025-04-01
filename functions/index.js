const { onRequest } = require("firebase-functions/v2/https");

exports.reprocessAllReplays = onRequest(async (req, res) => {
  // Verificación simple de token de admin (opcional: mejorar con Auth real)
  const adminKey = req.headers["x-admin-key"];
  if (adminKey !== "654321") {
    return res.status(403).json({ error: "Acceso denegado" });
  }

  const bucketName = "aoe2-gamensa"; // Asegurate de que este nombre es correcto
  const bucket = storage.bucket(bucketName);
  const [files] = await bucket.getFiles({ prefix: "" });

  const aoe2Files = files.filter(file => file.name.endsWith(".aoe2record"));

  let success = 0;
  let failed = [];

  // 🔥 Primero borramos todos los documentos de 'matches'
  const matchesSnapshot = await db.collection("matches").get();
  const batch = db.batch();
  matchesSnapshot.forEach(doc => batch.delete(doc.ref));
  await batch.commit();
  console.log(`🧹 Borrados ${matchesSnapshot.size} documentos de 'matches'`);

  for (const file of aoe2Files) {
    const tempFilePath = `/tmp/${path.basename(file.name)}`;
    try {
      await file.download({ destination: tempFilePath });

      const command = "python3 analyze/cli_analyze.py \"" + tempFilePath + "\"";
      console.log("⏳ Reprocesando:", command);

      execSync(command, {
        stdio: "inherit",
        env: {
          ...process.env,
          PYTHONPATH: path.join(__dirname, "pyenv"),
        },
      });

      const resultPath = path.join(__dirname, "result.json");
      if (!fs.existsSync(resultPath)) throw new Error("❌ No se generó result.json");

      const data = JSON.parse(fs.readFileSync(resultPath, "utf8"));
      await db.collection("matches").add({
        fileName: path.basename(file.name),
        uploadedAt: new Date().toISOString(),
        ...data,
      });

      console.log("✅ Partida procesada:", file.name);
      success++;
    } catch (err) {
      console.error(`❌ Fallo al procesar ${file.name}:`, err);
      failed.push(file.name);
    }
  }

  return res.json({
    message: "Reprocesamiento finalizado",
    total: aoe2Files.length,
    success,
    failed,
  });
});
