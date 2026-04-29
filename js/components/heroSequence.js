import { drawCover } from "../utils/canvas.js";

export function HeroSequence() {
  return `
    <main id="scroll-container" class="relative h-[400vh]">
      <div class="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center overflow-hidden">

        <div class="w-full md:w-1/2 h-1/2 md:h-full relative z-10 bg-black">
          <canvas id="hero-canvas" class="w-full h-full object-cover"></canvas>
        </div>

        <div class="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-10 lg:px-20 bg-[#0a0a0a] relative z-30">
          <div id="text-block" class="max-w-xl space-y-8">
            <h1 class="animate-me text-5xl md:text-7xl font-black tracking-tighter text-white">Lyslys</h1>

            <div class="space-y-6">
              <p class="animate-me text-xl md:text-2xl font-light text-gray-400 leading-relaxed">
                Portiamo prodotti artigianali <span class="text-red-500 font-medium">...</span>
              </p>

              <p class="animate-me text-xl md:text-2xl font-light text-gray-400 leading-relaxed">
                dai maestri Napoletani e Siciliani <span class="text-red-500 font-medium">....</span>
              </p>

              <p class="animate-me text-2xl md:text-4xl font-bold text-white border-l-4 border-red-700 pl-6">
                nella vostra attività
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  `;
}

export function initHeroSequence({ images, frameCount }) {
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");

  const state = {
    frame: 0
  };

  function render() {
    const image = images[state.frame];

    if (!image || !image.complete) return;

    const isMobile = window.innerWidth < 768;

    canvas.width = isMobile ? window.innerWidth : window.innerWidth / 2;
    canvas.height = isMobile ? window.innerHeight / 2 : window.innerHeight;

    drawCover(ctx, canvas, image);
  }

  gsap.to(state, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5
    },
    onUpdate: render
  });

  gsap.to(".animate-me", {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: "top -20%",
      end: "top -60%",
      scrub: 1
    }
  });

  window.addEventListener("resize", render);

  render();
}