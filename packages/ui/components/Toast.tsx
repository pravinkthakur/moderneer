export function Toast({ text }: { text: string }) {
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white rounded-xl px-4 py-2 shadow-md">
      {text}
    </div>
  );
}
