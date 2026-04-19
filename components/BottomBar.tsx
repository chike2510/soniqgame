export function BottomBar({ onNext }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-black">
      <button
        onClick={onNext}
        className="w-full py-3 bg-purple-600 rounded-xl"
      >
        Next Week ▶
      </button>
    </div>
  );
}
