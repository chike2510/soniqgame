export function StatCard({ title, value }) {
  return (
    <div className="bg-zinc-800 p-3 rounded-lg">
      <p className="text-sm">{title}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}
