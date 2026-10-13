import Link from "next/link";
import Image from "next/image";
import productos from "../data/productos.json";

export default function NuevosProductos() {
  // Ordenar productos por fecha de ingreso (más recientes primero) y tomar solo 5
  const ultimosProductos = [...productos]
    .sort(
      (a, b) =>
        new Date(b.fecha_ingreso).getTime() -
        new Date(a.fecha_ingreso).getTime(),
    )
    .slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-16">
      {/* ENCABEZADO DE LA SECCIÓN */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0088cc]">
            Nuevos Productos & Lanzamientos
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Lo último en herramientas de Inteligencia Artificial y computación
            avanzada.
          </p>
        </div>

        <Link
          href="/catalogo"
          className="text-[#00aaff] hover:text-[#0088cc] text-sm font-semibold transition-colors whitespace-nowrap"
        >
          Ver catálogo completo &rarr;
        </Link>
      </div>

      {/* CUADRÍCULA DE PRODUCTOS */}
      {/* 1 columna en móvil (grid-cols-1), 5 columnas en PC (lg:grid-cols-5) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {ultimosProductos.map((producto) => (
          <Link
            href={`/producto/${producto.id}`}
            key={producto.id}
            className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* ÁREA DE IMAGEN (Con altura fija para mantener uniformidad) */}
            <div className="relative h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
              {/* Etiqueta "Nuevo" - Posicionada arriba a la derecha */}
              <span className="absolute top-2 right-2 z-10 bg-[#00aaff] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                Nuevo
              </span>

              {/* Lógica de imagen: Si hay link en el JSON se muestra, si no, muestra el placeholder */}
              {producto.imagen ? (
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="text-gray-400 text-xs font-medium flex flex-col items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 opacity-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span>Imagen pendiente</span>
                </div>
              )}
            </div>

            {/* INFORMACIÓN DEL PRODUCTO */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Tipo / Categoría */}
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1.5">
                {producto.tipo}
              </span>

              {/* Nombre */}
              <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
                {producto.nombre}
              </h3>

              {/* Plataformas / Resumen (Mostramos las plataformas unidas si existen) */}
              <p className="text-xs text-gray-500 mb-4 line-clamp-1">
                {producto.plataformas
                  ? producto.plataformas.join(" / ")
                  : producto.descripcion}
              </p>

              {/* Precio (Empujado hacia abajo con mt-auto) */}
              <div className="mt-auto">
                <span className="text-lg font-extrabold text-gray-900">
                  ${producto.precio}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
