import { Suspense } from "react";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function ProductoPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Cargando estructura...</h1>

      {/* El Suspense aísla cualquier error de cliente que esté oculto en tus componentes */}
      <Suspense fallback={<p>Cargando producto...</p>}>
        {/* REEMPLAZA ESTO CON EL CONTENIDO O COMPONENTES REALES DE TU PÁGINA */}
        <div>Contenido de tu producto {params.id}</div>
      </Suspense>
    </main>
  );
}
