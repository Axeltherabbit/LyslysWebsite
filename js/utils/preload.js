export function loadFrameSequence({ folder, frameCount, onProgress }) {
  const images = [];
  let loaded = 0;

  return new Promise((resolve) => {
    for (let i = 0; i < frameCount; i++) {
      const image = new Image();

      image.onload = () => {
        loaded++;

        if (typeof onProgress === "function") {
          onProgress(loaded, frameCount);
        }

        if (loaded === frameCount) {
          resolve(images);
        }
      };

      image.src = `./images/${folder}/frame_${String(i + 1).padStart(4, "0")}.webp`;
      images.push(image);
    }
  });
}

export function loadCarouselSlides(slides) {
  slides.forEach((slide) => {
    for (let i = 0; i < slide.frameCount; i++) {
      const image = new Image();
      image.src = `./images/${slide.folder}/frame_${String(i + 1).padStart(4, "0")}.webp`;
      slide.images.push(image);
    }
  });
}