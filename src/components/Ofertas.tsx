import Link from "next/link";
import Image from "next/image";
import productos from "../data/productos.json";

export default function Ofertas() {
  // Filtrar productos que tengan descuento y tomar 5
  const ofertas = [...productos]
    .filter(
      (producto) =>
        producto.descuento_porcentaje && producto.descuento_porcentaje > 0,
    )
    .slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-10 mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0088cc]">
            Descuentos Especiales en Suscripciones IA
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Ahorra hasta un 45% activando cuentas oficiales premium de los
            modelos generativos más potentes del mercado.
          </p>
        </div>
        <Link
          href="/catalogo"
          className="text-[#00aaff] hover:text-[#0088cc] text-sm font-semibold transition-colors whitespace-nowrap"
        >
          Ver catálogo completo &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {ofertas.map((producto) => (
          <Link
            href={`/producto/${producto.id}`}
            key={producto.id}
            className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
              {/* Etiqueta de Descuento */}
              <span className="absolute top-2 right-2 z-10 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                -{producto.descuento_porcentaje}%
              </span>

              {producto.imagen &&
              (producto.imagen.startsWith("http") ||
                producto.imagen.startsWith("/")) ? (
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="text-gray-400 text-xs flex flex-col items-center">
                  Sin imagen
                </div>
              )}
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1.5">
                {producto.tipo}
              </span>
              <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
                {producto.nombre}
              </h3>
              <p className="text-xs text-gray-500 mb-4 line-clamp-1">
                {producto.plataformas
                  ? producto.plataformas.join(" / ")
                  : producto.descripcion}
              </p>

              <div className="mt-auto flex items-center gap-2">
                <span className="text-lg font-extrabold text-gray-900">
                  ${producto.precio}
                </span>
                {/* Mostramos la palabra "Ahorro" en verde pequeño */}
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                  Ahorro {producto.descuento_porcentaje}%
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
