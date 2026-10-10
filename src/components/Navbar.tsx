"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [hoverLogo, setHoverLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 1. BARRA DE NAVEGACIÓN SUPERIOR */}
      <nav className="flex items-center justify-center md:justify-between px-8 py-4 bg-white shadow-sm relative z-30">
        {/* LOGO: Centrado en móvil (justify-center arriba), a la izquierda en PC */}
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

        {/* MENÚ DE ESCRITORIO: Oculto en móvil, visible en pantallas medianas (md:flex) */}
        <div className="hidden md:flex gap-8 font-semibold text-[15px]">
          <Link
            href="/"
            className="text-[#0088cc] transition-all duration-300 hover:text-blue-800 hover:-translate-y-1 hover:scale-105"
          >
            Inicio
          </Link>
          <Link
            href="/catalogo"
            className="text-gray-700 transition-all duration-300 hover:text-[#0088cc] hover:-translate-y-1 hover:scale-105"
          >
            Catálogo
          </Link>
          <Link
            href="/sobre-nosotros"
            className="text-gray-700 transition-all duration-300 hover:text-[#0088cc] hover:-translate-y-1 hover:scale-105"
          >
            Sobre Nosotros
          </Link>
        </div>
      </nav>

      {/* 2. BURBUJA FLOTANTE (Solo visible en móvil) */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 bg-[#0088cc] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Abrir menú"
      >
        {/* Ícono de Hamburguesa (SVG) */}
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

      {/* 3. MENÚ PANTALLA COMPLETA MÓVIL (Animación desde la izquierda) */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Botón para cerrar */}
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

        {/* Enlaces Móviles (Más grandes para fácil lectura) */}
        <div className="flex flex-col items-center gap-8 text-2xl font-bold">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#0088cc] transition-transform hover:scale-110"
          >
            Inicio
          </Link>
          <Link
            href="/catalogo"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 transition-transform hover:scale-110"
          >
            Catálogo
          </Link>
          <Link
            href="/sobre-nosotros"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 transition-transform hover:scale-110"
          >
            Sobre Nosotros
          </Link>
        </div>
      </div>
    </>
  );
}
