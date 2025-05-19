import React from "react";
export default function page() {
  return (
    <div>
      <h1 className="text-center p-7 font-bold text-pink text-2xl text-pink-500">
        {" "}
        ABOUT TODO
      </h1>
      <div className=" min-h-screen text-black">
        <div className=" shadow-md  rounded-2xl p-6 mx-auto max-w-2xl bg-white/80 ">
          <p className="mb-1">
            <strong>Nom de l'application :</strong> TODOLIST{" "}
          </p>
          <p className="mb-1">
            {" "}
            <strong>Type :</strong> Application Web
          </p>
          <p className="mb-1">
            <strong>Technologies utilisées :</strong> Next.js, React, Tailwind
            CSS{" "}
          </p>
          <p className="mb-4">
            <strong>Objectif :</strong> Permettre à l'utilisateur de gérer ses
            tâches quotidiennes en toute simplicité : ajout, édition,
            suppression et marquage des tâches comme terminées.
          </p>
          <strong>Fonctionnalités principales :</strong>
          <ul className="list-disc ml-4 mt-2">
            <li>Ajout de tâches</li>
            <li>Suppression d'une tâche</li>
            <li>Affichage séparé des tâches terminées</li>
            <button className="bg-green-700 h-12 hover:bg-pink-600 text-center cursor p-2 mt-4 rounded text-white px-4">
              plus d'info
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
