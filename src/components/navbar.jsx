import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Navbar() {
  return (
    <nav className="bg-pink-400 shadow-md h-20 w-full px-10 text-white flex justify-between items-center">
      <div>
        <Image
          alt=""
          src={"/avatar/avatar G.jpg"}
          height={40}
          width={50}
          className="rounded-full "
        />
        <Link href={"/"} className=" hover:text-pink-600">
          Accueil
        </Link>{" "}
      </div>
      <div className="space-x-3 border-bg-pink-500s  border-black">
        <Link href="/info" className=" hover:text-pink-600">
          About
        </Link>
        <Link href="/contact" className=" hover:text-pink-600">
          Contacter
        </Link>
        <Link href="/profile" className=" hover:text-pink-600">
          profile
        </Link>
      </div>
    </nav>
  );
}
