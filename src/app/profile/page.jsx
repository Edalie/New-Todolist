"use client";

import React, { useState, useEffect } from "react";
export default function profil() {
  const [showconnexionform, setshowconnexionform] = useState(false);
  const [connexionform, setconnexionform] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });
  const [formconnect, setformconnect] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(connexionform));

    setconnected(true);
  };
  const [connected, setconnected] = useState(false);
  useEffect(() => {
    const { nom, prenom, email, password } = connexionform;
    if ((nom, prenom, email, password)) {
      setformconnect(true);
    } else {
      setformconnect(false);
    }
  }, [connexionform]);
  const WelcomeComponent = () => (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-pink-500">
        Bienvenue, {connexionform.prenom}{" "}
      </h1>
      <p className="text-lg text-gray-700 mt-4">
        Vous êtes maintenant connecté(e).
      </p>
    </div>
  );
 let content;
if (connected) {
  content = <WelcomeComponent />;
} else {
  content = (
    <form onSubmit={handleSubmit} className="...">
    </form>
  );
} return(
    <div>
      <h1 className=" font-bold p-6  text-pink-500 text-center text-2xl">
        PROFILE
      </h1>
      <form
        className="max-w-md mx-auto  shadow-lg mt-6 bg-white/50 p-6 rounded shadow-pink-100"
        onSubmit={handleSubmit}
      >
        <h2 className="bg-pink-300/20mb-10 text-center text-xl font-bold ">
          Formulaire de connection
        </h2>
        <label html="nom" className=" text-left  my-2 block ">
          Nom
        </label>
        <input
          className="w-full border border-pink-300 text-pink-500 p-2 rounde"
          type="text"
          id="Nom"
          value={connexionform.nom}
          placeholder="Entrez le nom..."
          onChange={(e) =>
            setconnexionform({ ...connexionform, nom: e.target.value })
          }
          required
        ></input>
        <label html="prenom" className=" text-left  my-2 block ">
          Prenom
        </label>
        <input
          className="w-full border border-pink-300 text-pink-500  p-2 rounde"
          type="text"
          id="prenom"
          value={connexionform.prenom}
          placeholder="Entrez le prenom..."
          onChange={(e) =>
            setconnexionform({ ...connexionform, prenom: e.target.value })
          }
          required
        ></input>
        <label html="Email" className=" text-left  my-2 block ">
          Email
        </label>
        <input
          className="w-full border border-pink-300 text-pink-500 y-300 p-2 rounde"
          type="text"
          id="email"
          value={connexionform.email}
          placeholder="Entrez le email..."
          onChange={(e) =>
            setconnexionform({ ...connexionform, email: e.target.value })
          }
          required
        ></input>
        <label html="Password" className=" text-left  my-2 block ">
          Password
        </label>
        <input
          className="w-full border view border-pink-300 text-pink-500  p-2 rounde"
          type="password"
          id="Password"
          value={connexionform.password}
          placeholder="Entrez le password..."
          onChange={(e) =>
            setconnexionform({ ...connexionform, password: e.target.value })
          }
          required
        ></input>
        <button
          className="bg-green-500 p-2 mt-6 text-black rounded hover:bg-pink-600 text-xl"
          disabled={!formconnect}
        >
          CONNEXION
        </button>
      </form>
      
    </div>
  );
}
