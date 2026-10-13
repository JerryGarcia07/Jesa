import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // Obtenemos el año actual automáticamente para el copyright
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto">
      {/* 1. SECCIÓN PRINCIPAL AZUL */}
      <div className="bg-[#0088cc] text-white py-12">
        {/* Contenedor central y Grid para separar en 2 columnas en PC, y 1 en móvil */}
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-12">
          {/* COLUMNA IZQUIERDA: Logo y Descripción */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <Link href="/" className="w-fit">
              <Image
                src="/Logo.webp"
                alt="JESA Solutions Logo Blanco"
                width={180}
                height={45}
                /* 
                  TRUCO MAGNÍFICO: "brightness-0 invert" 
                  Convierte cualquier imagen (incluso a color o negra) a blanco puro. 
                  Ideal para poner logos sobre fondos oscuros sin editar la imagen original.
                */
                className="object-contain brightness-0 invert opacity-95 transition-opacity hover:opacity-100"
              />
            </Link>
            <p className="text-blue-50 text-sm leading-relaxed max-w-md mt-2">
              Plataforma líder en distribución de licencias de software
              original, herramientas de ingeniería y suscripciones de
              Inteligencia Artificial para profesionales y empresas.
            </p>
          </div>

          {/* COLUMNA DERECHA: Canales de Contacto */}
          {/* En móvil se alinea a la izquierda, en PC (md:items-end) se alinea a la derecha */}
          <div className="flex flex-col gap-4 md:w-1/2 md:items-end">
            <h3 className="text-xl font-bold mb-1">Canales de Contacto</h3>

            <ul className="flex flex-col gap-3 text-blue-50 text-sm">
              {/* Correo */}
              <li className="flex items-center gap-3 md:flex-row-reverse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span>soporte@jesasolutions.com</span>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-3 md:flex-row-reverse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <span>WhatsApp: +54 9 11 2345-6789</span>
              </li>

              {/* Horario */}
              <li className="flex items-center gap-3 md:flex-row-reverse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>Atención: Lun-Dom 24 Horas</span>
              </li>

              {/* Redes Sociales */}
              <li className="flex items-center gap-3 md:flex-row-reverse mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                <Link
                  href="#"
                  className="font-semibold underline underline-offset-4 hover:text-white transition-colors"
                >
                  Redes sociales oficial →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. BARRA INFERIOR DE DERECHOS DE AUTOR */}
      <div className="bg-[#1a1a1a] text-gray-400 py-4 px-6 text-center text-xs tracking-wide">
        ©2026 JESA SOLUTIONS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
