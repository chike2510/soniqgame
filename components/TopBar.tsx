export function TopBar({ cash, fans, week }) {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-bold">SONIQ</h1>
      <div className="text-sm">
        <p>💰 ${cash.toFixed(0)}</p>
        <p>⭐ {fans.toFixed(0)}</p>
        <p>Week {week}</p>
      </div>
    </div>
  );
}
