export function ContactSection() {
  return `
    <section class="relative z-40 min-h-screen bg-white text-black flex items-center justify-center p-10">
      <div class="max-w-4xl w-full">

        <div class="flex flex-col items-start space-y-12">
          <div class="space-y-2">
            <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tighter">Contatti</h2>
            <div class="w-20 h-1.5 bg-red-700"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

            <div class="space-y-1">
              <p class="text-xs uppercase tracking-widest text-gray-400 font-bold">Email</p>
              <a href="mailto:test@test.it" class="text-2xl md:text-3xl font-light hover:text-red-700 transition-colors duration-300">
                test@test.it
              </a>
            </div>

            <div class="space-y-1">
              <p class="text-xs uppercase tracking-widest text-gray-400 font-bold">Telefono</p>
              <a href="tel:12332123132" class="text-2xl md:text-3xl font-light hover:text-red-700 transition-colors duration-300">
                +39 123 321 23132
              </a>
            </div>

            <div class="space-y-1 md:col-span-2 border-t border-gray-100 pt-8">
              <p class="text-xs uppercase tracking-widest text-gray-400 font-bold">Orari</p>

              <div class="flex flex-col space-y-2 pt-2">
                <p class="text-xl font-medium">Lunedì — Venerdì</p>
                <p class="text-lg font-light text-gray-600">09:00 - 18:00</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}