export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl mb-2 tracking-wider">DOLOS</h1>
      <p className="text-xl mb-16 tracking-wide">Ancient villain reborn</p>
      <div className="bg-[#DCE6DC] rounded-3xl p-12 max-w-2xl w-full border-2 border-mine-shaft">
        <div className="grid grid-cols-[auto,1fr] gap-8 items-center">
          <div className="w-32 h-32 bg-contain bg-no-repeat bg-center"
               style={{ backgroundImage: 'url("/pixel-portrait.png")' }} />
          <div className="text-left text-xl tracking-wide leading-relaxed">
            <p>I ABSORBE EVERYTHING.</p>
            <p>I TELL YOU HOW IT IS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}