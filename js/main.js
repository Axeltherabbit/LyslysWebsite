import { Loader, hideLoader } from "./components/loader.js";
import { Navbar } from "./components/navbar.js";
import { HeroSequence, initHeroSequence } from "./components/heroSequence.js";
import { ProductCarousel, initProductCarousel } from "./components/productCarousel.js";
import { ContactSection } from "./components/contactSection.js";
import { Footer } from "./components/footer.js";

import { carouselSlides, heroConfig } from "./data/products.js";
import { loadFrameSequence, loadCarouselSlides } from "./utils/preload.js";

gsap.registerPlugin(ScrollTrigger);

const app = document.getElementById("app");

app.innerHTML = `
  ${Loader()}
  ${Navbar()}
  ${HeroSequence()}
  ${ProductCarousel()}
  ${ContactSection()}
  ${Footer()}
`;

async function init() {
  const heroImages = await loadFrameSequence({
    folder: heroConfig.folder,
    frameCount: heroConfig.frameCount
  });

  hideLoader(() => {
    initHeroSequence({
      images: heroImages,
      frameCount: heroConfig.frameCount
    });

    loadCarouselSlides(carouselSlides);
    initProductCarousel(carouselSlides);
  });
}

init();