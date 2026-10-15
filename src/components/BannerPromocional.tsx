import Link from "next/link";

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
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-6">
      <Link
        href={enlace}
        className="block w-full overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:opacity-95"
      >
        {/* 
          El elemento <picture> obliga al navegador a elegir UNA SOLA imagen 
          antes de descargarla, ahorrando megas en dispositivos móviles.
        */}
        <picture>
          {/* Si la pantalla mide 768px o más (PC o Tablet), descarga y usa la imagen de Desktop */}
          <source media="(min-width: 768px)" srcSet={imgDesktop} />

          {/* Si es pantalla pequeña (Móvil), ignora la de arriba y solo descarga esta */}
          <img
            src={imgMobile}
            alt={alt}
            /* loading="lazy" hace que la imagen no se descargue hasta que el usuario baje haciendo scroll, ahorrando aún más datos */
            loading="lazy"
            className="w-full h-auto object-cover rounded-xl"
          />
        </picture>
      </Link>
    </div>
  );
}
