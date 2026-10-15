"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [hoverLogo, setHoverLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Obtenemos la ruta actual en la que se encuentra el usuario (ej: "/", "/catalogo")
  const pathname = usePathname();

  // Función para determinar las clases de color dependiendo de si está activo o no
  const getLinkClasses = (path: string) => {
    const baseClasses =
      "transition-all duration-300 hover:-translate-y-1 hover:scale-105";
    if (pathname === path) {
      // Si está activo: Azul fijo
      return `${baseClasses} text-[#0088cc] font-bold`;
    } else {
      // Si no está activo: Gris, pero se pone azul al pasar el mouse
      return `${baseClasses} text-gray-700 hover:text-[#0088cc]`;
    }
  };

  const getMobileLinkClasses = (path: string) => {
    const baseClasses = "transition-transform hover:scale-110";
    if (pathname === path) {
      return `${baseClasses} text-[#0088cc] font-black`;
    } else {
      return `${baseClasses} text-gray-800`;
    }
  };

  return (
    <>
      {/* 1. BARRA DE NAVEGACIÓN SUPERIOR */}

      <nav className="flex items-center justify-center md:justify-between px-8 py-1 md:py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-center md:justify-between w-full ">
          <Link
            href="/"
            className="cursor-pointer"
            onMouseEnter={() => setHoverLogo(true)}
            onMouseLeave={() => setHoverLogo(false)}
          >
            <Image
              src={hoverLogo ? "/Logo.webp" : "/Logo.webp"}
              alt="JESA Solutions Logo"
              width={180}
              height={45}
              className="object-contain transition-all duration-300 hover:scale-105"
            />
          </Link>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:flex gap-8 font-semibold text-[15px]">
            <Link href="/" className={getLinkClasses("/")}>
              Inicio
            </Link>
            <Link href="/catalogo" className={getLinkClasses("/catalogo")}>
              Catálogo
            </Link>
            <Link
              href="/sobre-nosotros"
              className={getLinkClasses("/sobre-nosotros")}
            >
              Sobre Nosotros
            </Link>
          </div>
        </div>
        {/* LOGO */}
      </nav>

      {/* 2. BURBUJA FLOTANTE (Móvil) */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-[#0088cc] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Abrir menú"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* 3. MENÚ PANTALLA COMPLETA MÓVIL */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black transition-colors"
          aria-label="Cerrar menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-8 text-2xl font-bold">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={getMobileLinkClasses("/")}
          >
            Inicio
          </Link>
          <Link
            href="/catalogo"
            onClick={() => setIsMenuOpen(false)}
            className={getMobileLinkClasses("/catalogo")}
          >
            Catálogo
          </Link>
          <Link
            href="/sobre-nosotros"
            onClick={() => setIsMenuOpen(false)}
            className={getMobileLinkClasses("/sobre-nosotros")}
          >
            Sobre Nosotros
          </Link>
        </div>
      </div>
    </>
  );
}
