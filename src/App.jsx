import React, { useState } from "react";

export default function App() {
  const [client, setClient] = useState({ nom: "", adresse: "", tel: "", email: "" });
  const [intervention, setIntervention] = useState({ description: "", materiel: "", date: "", heure: "" });

  const generateFacture = () => {
    const doc = `Client : ${client.nom}
Adresse : ${client.adresse}
Téléphone : ${client.tel}
Email : ${client.email}

Intervention : ${intervention.description}
Matériel utilisé : ${intervention.materiel}
Date : ${intervention.date} à ${intervention.heure}`;

    const blob = new Blob([doc], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "facture-technipro.txt";
    a.click();
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Technipro - Bon d'intervention</h1>
        <img src="/logo-technipro.png" alt="Logo Technipro" style={{ height: 50 }} />
      </header>

      <h2>Client</h2>
      <input placeholder="Nom" value={client.nom} onChange={e => setClient({ ...client, nom: e.target.value })} /><br />
      <input placeholder="Adresse" value={client.adresse} onChange={e => setClient({ ...client, adresse: e.target.value })} /><br />
      <input placeholder="Téléphone" value={client.tel} onChange={e => setClient({ ...client, tel: e.target.value })} /><br />
      <input placeholder="Email" value={client.email} onChange={e => setClient({ ...client, email: e.target.value })} /><br />

      <h2>Intervention</h2>
      <textarea placeholder="Description" value={intervention.description} onChange={e => setIntervention({ ...intervention, description: e.target.value })} /><br />
      <input placeholder="Matériel utilisé" value={intervention.materiel} onChange={e => setIntervention({ ...intervention, materiel: e.target.value })} /><br />
      <input type="date" value={intervention.date} onChange={e => setIntervention({ ...intervention, date: e.target.value })} /><br />
      <input type="time" value={intervention.heure} onChange={e => setIntervention({ ...intervention, heure: e.target.value })} /><br />

      <button onClick={generateFacture}>Générer la facture</button>
    </div>
  );
}