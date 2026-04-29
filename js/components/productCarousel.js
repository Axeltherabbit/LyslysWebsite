import { drawCover, resizeCanvasToElement } from "../utils/canvas.js";

export function ProductCarousel() {
  return `
    <section class="relative z-40 bg-[#0a0a0a] border-y border-white/5 py-16">
      <div class="max-w-6xl mx-auto px-6">

        <div class="flex flex-col md:flex-row items-stretch bg-[#0f0f0f] rounded-3xl overflow-hidden shadow-2xl min-h-[450px]">

          <div class="w-full md:w-3/5 h-64 md:h-auto relative bg-black">
            <canvas id="carousel-canvas" class="w-full h-full object-cover"></canvas>
            <div class="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent"></div>
          </div>

          <div class="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#0f0f0f]">
            <div id="c-content" class="space-y-6">

              <span id="c-tag" class="inline-block px-3 py-1 bg-red-900/20 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                Prodotto 01
              </span>

              <h3 id="c-title" class="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                Cassata Artigianale
              </h3>

              <p id="c-desc" class="text-gray-400 leading-relaxed font-light min-h-[100px]">
                Un trionfo di pan di spagna, pasta reale e frutta candita. Ogni pezzo è decorato a mano dai nostri maestri pasticceri napoletani.
              </p>

              <div class="flex items-center justify-center gap-6 pt-4">
                <button id="c-prev" class="p-3 rounded-full border border-white/20 hover:bg-white/5 text-white transition-colors" aria-label="Prodotto precedente">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>

                <div id="c-dots" class="flex gap-2">
                  <div class="c-dot w-6 h-1 bg-red-700 transition-all duration-300"></div>
                  <div class="c-dot w-6 h-1 bg-white/10 transition-all duration-300"></div>
                  <div class="c-dot w-6 h-1 bg-white/10 transition-all duration-300"></div>
                </div>

                <button id="c-next" class="p-3 rounded-full border border-white/20 hover:bg-white/5 text-white transition-colors" aria-label="Prodotto successivo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initProductCarousel(slides) {
  let currentIndex = 0;
  let currentFrame = 0;
  let direction = 1;
  let isPlaying = true;

  const canvas = document.getElementById("carousel-canvas");
  const ctx = canvas.getContext("2d");

  const titleEl = document.getElementById("c-title");
  const descEl = document.getElementById("c-desc");
  const tagEl = document.getElementById("c-tag");
  const dots = document.querySelectorAll(".c-dot");

  const nextButton = document.getElementById("c-next");
  const prevButton = document.getElementById("c-prev");

  function animate() {
    if (!isPlaying) return;

    const slide = slides[currentIndex];

    if (!slide || slide.images.length === 0) {
      requestAnimationFrame(animate);
      return;
    }

    currentFrame += direction;

    if (currentFrame >= slide.frameCount - 1) {
      currentFrame = slide.frameCount - 1;
      direction = -1;
    } else if (currentFrame <= 0) {
      currentFrame = 0;
      direction = 1;
    }

    const image = slide.images[currentFrame];

    if (image && image.complete) {
      resizeCanvasToElement(canvas);
      drawCover(ctx, canvas, image);
    }

    requestAnimationFrame(animate);
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.className =
        index === currentIndex
          ? "c-dot w-6 h-1 bg-red-700 transition-all duration-300"
          : "c-dot w-6 h-1 bg-white/10 transition-all duration-300";
    });
  }

  function updateSlide(step) {
    currentIndex = (currentIndex + step + slides.length) % slides.length;

    const slide = slides[currentIndex];

    currentFrame = 0;
    direction = 1;

    gsap.to(["#c-tag", "#c-title", "#c-desc"], {
      opacity: 0,
      y: 15,
      stagger: 0.05,
      duration: 0.2,
      onComplete: () => {
        titleEl.innerText = slide.title;
        descEl.innerText = slide.desc;
        tagEl.innerText = slide.tag;

        updateDots();

        gsap.to(["#c-tag", "#c-title", "#c-desc"], {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4
        });
      }
    });
  }

  nextButton.addEventListener("click", () => updateSlide(1));
  prevButton.addEventListener("click", () => updateSlide(-1));

  window.addEventListener("resize", () => {
    resizeCanvasToElement(canvas);
  });

  animate();
}