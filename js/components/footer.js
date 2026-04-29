export function Footer() {
  return `
    <footer class="bg-white border-t border-gray-100 py-10 px-8">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-sm text-gray-500 font-light">
          &copy; 2026 Lyslys. Tutti i diritti riservati.
        </p>

        <div class="flex flex-col md:items-end gap-1">
          <p class="text-xs uppercase tracking-widest text-gray-400 font-bold">P.IVA</p>
          <p class="text-sm text-gray-600 font-mono">01234567890</p>
        </div>
      </div>
    </footer>
  `;
}