export function Navbar() {
  return `
    <nav class="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent">
      <div class="flex items-center gap-4">
        <img src="icon.ico" class="h-8 w-auto object-contain drop-shadow-md" alt="Lyslys logo">
        <span class="text-xl font-bold tracking-tighter uppercase text-white">Lyslys</span>
      </div>
    </nav>
  `;
}