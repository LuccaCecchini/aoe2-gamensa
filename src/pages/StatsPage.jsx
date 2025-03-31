// src/pages/StatsPage.jsx

import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const StatsPage = () => {
  const [users, setUsers] = useState([]);
  const [victories, setVictories] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // Obtener usuarios
      const userSnap = await getDocs(collection(db, "users"));
      const userData = userSnap.docs.map((doc) => doc.data());
      setUsers(userData);

      // Obtener partidas
      const matchSnap = await getDocs(collection(db, "matches"));
      const matchData = matchSnap.docs.map((doc) => doc.data());

      // Contar victorias por InGameName
      const winCount = {};
      matchData.forEach((match) => {
        match.winner_names?.forEach((name) => {
          winCount[name] = (winCount[name] || 0) + 1;
        });
      });
      setVictories(winCount);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🏆 Ranking de victorias</h1>
      <table className="min-w-full border mb-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Nombre real</th>
            <th className="border px-4 py-2">In-Game Name</th>
            <th className="border px-4 py-2">Victorias</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const wins = victories[user.InGameName] || 0;
            return (
              <tr key={user.InGameName}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.InGameName}</td>
                <td className="border px-4 py-2">{wins}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StatsPage;
