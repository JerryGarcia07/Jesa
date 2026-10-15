// 1. Importamos los datos de nuestro archivo JSON
import productos from "../data/productos.json";
import Hero from "../components/Hero";
import Marcas from "../components/Marcas";
import NuevosProductos from "../components/NuevosProductos";
import MasVendidos from "../components/MasVendidos";
import Ofertas from "../components/Ofertas";
import BannerPromocional from "../components/BannerPromocional";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <NuevosProductos />
      <Marcas />
      {/* Separador visual opcional (como los banners de soporte técnico de tu diseño) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-4">
        <div className="w-full h-24 bg-blue-900 rounded-xl flex items-center justify-center text-white text-xl font-bold opacity-80">
          Banner Promocional Soporte Técnico
        </div>
      </div>

      <MasVendidos />
      <Ofertas />
    </main>
  );
}
