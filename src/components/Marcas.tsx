import React from "react";

const marcas = [
  {
    nombre: "OpenAI",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#0088cc]"
      >
        <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
      </svg>
    ),
  },
  {
    nombre: "Adobe",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#0088cc]"
      >
        <path d="M2 20h20L12 4z" />
        <path d="M12 14l-2 6" />
      </svg>
    ),
  },
  {
    nombre: "JetBrains",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#0088cc]"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    nombre: "Google",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#0088cc]"
      >
        <path d="M17.5 19.5A9 9 0 1 1 21 12h-9" />
      </svg>
    ),
  },
  {
    nombre: "Autodesk",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#0088cc]"
      >
        <path d="M4 22L12 2l8 20" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    nombre: "Microsoft",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[#0088cc]"
      >
        <path d="M2 2h9v9H2zM13 2h9v9h-9zM2 13h9v9H2zM13 13h9v9h-9z" />
      </svg>
    ),
  },
];

export default function Marcas() {
  return (
    // Quitamos el overflow-hidden de la sección principal para que el fondo de color sí ocupe todo el ancho
    <section className="bg-[#f8fbff] py-14 border-y border-blue-50">
      <style>{`
        @keyframes scroll-infinito {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animar-carrusel {
          display: flex;
          width: max-content;
          animation: scroll-infinito 30s linear infinite;
        }
        .animar-carrusel:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Contenedor central que respeta los márgenes (px-6 lg:px-8) del resto de la web */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Software oficial de las mejores marcas
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Alcance y compatibilidad garantizada en cada producto
          </p>
        </div>

        {/* El carrusel animado ahora está encerrado AQUÍ, con su propio overflow-hidden */}
        <div className="relative w-full flex overflow-hidden rounded-lg">
          <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-[#f8fbff] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-[#f8fbff] to-transparent z-10 pointer-events-none"></div>

          <div className="animar-carrusel">
            <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
              {marcas.map((marca, index) => (
                <div
                  key={`grupo1-${index}`}
                  className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity cursor-default"
                >
                  {marca.icono}
                  <span className="font-bold text-gray-800 text-lg md:text-xl tracking-tight">
                    {marca.nombre}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
              {marcas.map((marca, index) => (
                <div
                  key={`grupo2-${index}`}
                  className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity cursor-default"
                >
                  {marca.icono}
                  <span className="font-bold text-gray-800 text-lg md:text-xl tracking-tight">
                    {marca.nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
