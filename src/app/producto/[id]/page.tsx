export default function ProductoDetalle({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="p-8 max-w-4xl mx-auto text-center mt-10">
      <h1 className="text-2xl font-bold">Detalles del producto</h1>
      <p className="mt-4 text-gray-600">
        Estás viendo el producto con el ID:{" "}
        <span className="font-mono bg-gray-200 p-1 rounded text-black">
          {params.id}
        </span>
      </p>
    </main>
  );
}
