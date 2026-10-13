// 1. Importamos los datos de nuestro archivo JSON
import productos from "../data/productos.json";
import Hero from "../components/Hero";
import NuevosProductos from "../components/NuevosProductos";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <NuevosProductos />
      <section className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Nuestros Productos</h1>

        {/* 2. Creamos una cuadrícula (Grid) que se adapta al tamaño de la pantalla */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* 3. Usamos .map() para recorrer nuestra lista de productos */}
          {productos.map((producto) => (
            // Cada elemento de la lista necesita una propiedad "key" única
            <div
              key={producto.id}
              className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col"
            >
              {/* Como aún no tienes imagen, pondremos un cuadro gris temporal */}
              <div className="bg-gray-100 h-48 w-full rounded-lg mb-4 flex items-center justify-center text-gray-400 font-medium">
                Imagen del producto
              </div>

              {/* Nombre del producto */}
              <h2 className="font-semibold text-lg text-gray-800 leading-tight mb-2">
                {producto.nombre}
              </h2>

              {/* Etiqueta del tipo de producto */}
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full w-fit mb-3">
                {producto.tipo}
              </span>

              {/* Descripción corta */}
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                {producto.descripcion}
              </p>

              {/* Precio y Botón al final de la tarjeta */}
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-2xl text-gray-900">
                  ${producto.precio}
                </span>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
