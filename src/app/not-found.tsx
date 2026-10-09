import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Página no encontrada</h2>
      <p className="text-gray-500 mb-8">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>

      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
