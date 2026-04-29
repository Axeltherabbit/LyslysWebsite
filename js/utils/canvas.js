export function drawCover(ctx, canvas, image) {
  if (!image || !image.complete) return;

  const imgRatio = image.width / image.height;
  const canvasRatio = canvas.width / canvas.height;

  let drawWidth;
  let drawHeight;
  let offsetX;
  let offsetY;

  if (imgRatio > canvasRatio) {
    drawHeight = canvas.height;
    drawWidth = canvas.height * imgRatio;
    offsetX = (canvas.width - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = canvas.width;
    drawHeight = canvas.width / imgRatio;
    offsetX = 0;
    offsetY = (canvas.height - drawHeight) / 2;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}

export function resizeCanvasToElement(canvas) {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}