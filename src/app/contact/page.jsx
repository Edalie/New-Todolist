"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
export default function page() {
  const [showform, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    prenom: "",
    telephone: "",
  });

  return (
    <div>
      <h1 className=" font-bold text-center  text-pink-500 p-6 text-2xl ">
        CONTACTER
      </h1>

      <h2 className="font-bold  text-pink-600 p-4 text-2xl underline max-w-2xl ">
        BIOGRAPHIE
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">
          À propos de 2L-TECH
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          <span className="font-semibold">2L-TECH</span> est une startup fondée
          par Ivana Ségolène, étudiante en 4ᵉ année de Génie Logiciel à{" "}
          <span className="font-semibold">ICT University</span>, Yaoundé. Elle
          développe des solutions numériques simples, innovantes et accessibles
          à tous. Son application phare,{" "}
          <span className="font-semibold">2L-ZEN</span>, est une TodoList
          intuitive conçue pour améliorer l’organisation personnelle et
          professionnelle. À travers 2L-TECH, Ivana Ségolène exprime sa passion
          pour la technologie et son engagement pour une transformation digitale
          inclusive et durable.
        </p>
      </div>

      <div className="max-w-md mx-auto  shadow-lg mt-6 bg-pink-200/50 p-6 rounded shadow-pink-100">
        <h2 className="text-xl text-center font-bold mb-4">
          Formulaire de contact
        </h2>
        <form className="space-y-4text-left  ">
          <label htmlFor="name" className="block">
            Nom
          </label>
          <input
            className="w-full border border-pink-300 p-2 rounde"
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <label htmlFor="prenom" className="block">
            prenom
          </label>
          <input
            className="w-full border border-pink-300 p-2 rounde"
            type="text"
            id="prenom"
            value={form.prenom}
            onChange={(e) => setForm({ ...form, prenom: e.target.value })}
          />
          <label htmlFor="telephone" className="block">
            telephone
          </label>
          <input
            className="w-full border border-pink-300 p-2 rounde"
            type="text"
            id="telephone"
            value={form.telephone}
            onChange={(e) => setForm({ ...form, telephone: e.target.value })}
          />
          <label htmlFor="email" className="block">
            email
          </label>

          <input
            className="w-full border border-pink-300 p-2 rounde"
            type="text"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <label htmlFor="message" className="block  border-pink-600">
            message
          </label>
          <textarea
            className="text-2xl text-center rounded-2xl p-1 bg-pink-300 "
            id="message"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder=""
          ></textarea>
          <button
            onClick={() => setShowForm(true)}
            className="p-2 mx-6 mt-4  bg-green-500 hover:bg-pink-500 text-center rounded text-xl"
          >
            Contacter
          </button>
        </form>
      </div>
    </div>
  );
}
