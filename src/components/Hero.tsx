import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    // "overflow-hidden" es clave aquí: corta el 30% derecho de la imagen que sobresaldrá del borde
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#00375B] to-[#24A3DD]">
      {/* 1. IMAGEN DE FONDO (Cabeza IA / Circuitos) */}
      <div
        className="absolute z-0 pointer-events-none
        /* MÓVIL: Centrada arriba, opacidad baja (20%) */
        left-1/2 -translate-x-1/2 w-[580px] h-[280px] opacity-50 top-0 
        /* PC: A la derecha, desplazada un poco más allá del borde (-right-[25%]) para que solo se vea el 70% izquierdo, opacidad 100% */
        md:top-1/2 md:-translate-y-1/2 md:left-auto md:translate-x-0 md:-right-[50%] md:w-[1200px] md:h-[800px] md:opacity-50 lg:-right-[20%] 
        lg:w-[2200px] lg:h-[600px] lg:-right-[40%] lg:opacity-50"
      >
        <Image
          src="/hero-bg.webp" // Cambia esto si tu imagen tiene otro nombre
          alt="Inteligencia Artificial Fondo"
          fill
          className="object-contain"
          priority // Carga esta imagen de inmediato por ser la principal
        />
      </div>

      {/* 2. CONTENIDO (Textos y Botones alineados a tu diseño base) */}
      <div
        className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 
        /* MÓVIL: padding top gigante (pt-64) para dejar ver la imagen, todo centrado */
        pt-64 pb-16 text-center 
        /* PC: padding normal, texto alineado a la izquierda */
        md:pt-24 md:pb-24 md:text-left"
      >
        <div className="max-w-2xl flex flex-col items-center md:items-start gap-6">
          {/* TÍTULO */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight md:leading-[1.1]">
            Licencias Originales de <br />
            <span className="text-[#38bdf8]">Software & IA</span>
          </h1>

          {/* DESCRIPCIÓN */}
          <p className="text-blue-100 text-base md:text-lg leading-relaxed">
            Licencias oficiales, herramientas de IA de última generación y
            soluciones integrales para potenciar tu productividad y creatividad.
          </p>

          {/* BOTONES */}
          {/* MÓVIL: flex-col (uno debajo del otro), PC: flex-row (uno al lado del otro) */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-2">
            {/* Botón Principal (Ver Catálogo) */}
            <Link
              href="/catalogo"
              className="bg-[#00aaff] hover:bg-[#0088cc] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Ver Catálogo <span aria-hidden="true">&rarr;</span>
            </Link>

            {/* Botón Secundario (WhatsApp) */}
            <Link
              href="https://wa.me/5491123456789"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
