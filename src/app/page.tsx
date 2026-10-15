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
      {/* 2. Reemplazamos el primer cuadro azul por el Banner Real */}
      <BannerPromocional
        imgDesktop="/banner-pc.webp" // Cambia esto por el nombre exacto de tu imagen para PC
        imgMobile="/banner-pc.webp" // Cambia esto por el nombre de tu imagen para celular
        enlace="https://wa.me/5491123456789" // Pon aquí el link de WhatsApp u otra página
        alt="Soporte Técnico Profesional"
      />

      <MasVendidos />
      <Ofertas />
      {/* 3. Reemplazamos el segundo cuadro azul (si es el mismo banner, puedes repetir el código o cambiar las imágenes) */}
      <BannerPromocional
        imgDesktop="/banner-pc.webp"
        imgMobile="/banner-pc.webp"
        enlace="https://wa.me/5491123456789"
        alt="Soporte Técnico Profesional"
      />
    </main>
  );
}
