import Image from "next/image";
import Link from "next/link";

// Definimos qué datos necesita recibir nuestro banner
interface BannerProps {
  imgDesktop: string;
  imgMobile: string;
  enlace: string;
  alt: string;
}

export default function BannerPromocional({
  imgDesktop,
  imgMobile,
  enlace,
  alt,
}: BannerProps) {
  return (
    // Contenedor que respeta exactamente los mismos márgenes que el resto de tu web
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-6">
      <Link
        href={enlace}
        className="block w-full overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:opacity-95"
      >
        {/* 1. IMAGEN PARA MÓVIL (Se oculta en PC con "md:hidden") */}
        <div className="block md:hidden w-full relative">
          {/* Usa la etiqueta img regular aquí para que se adapte automáticamente al alto de tu diseño móvil sin pedir proporciones exactas */}
          <img
            src={imgMobile}
            alt={`${alt} Móvil`}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* 2. IMAGEN PARA PC (Se oculta en móvil con "hidden" y se muestra en PC con "md:block") */}
        <div className="hidden md:block w-full relative">
          <img
            src={imgDesktop}
            alt={`${alt} PC`}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </Link>
    </div>
  );
}
