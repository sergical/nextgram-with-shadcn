export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-1 items-center gap-4">{id} Test</div>
    </div>
  );
}
