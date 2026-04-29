export function Loader() {
  return `
    <div id="loader" class="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div class="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-sm tracking-widest uppercase">Caricamento...</p>
    </div>
  `;
}

export function hideLoader(callback) {
  const loader = document.getElementById("loader");

  if (!loader) return;

  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";

    if (typeof callback === "function") {
      callback();
    }
  }, 500);
}