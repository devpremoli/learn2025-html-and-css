const bgImg = document.getElementById("hero-bg");
const bgImgInfo = document.getElementById("bg-img-info");

const img = new Image();
img.src = "./images/hill.jpg";

bgImg.onload = () => {
  const width = bgImg.naturalWidth;
  const height = bgImg.naturalHeight;
  console.log(width);
  const ratio = (width / height).toFixed(2);

  bgImgInfo.innerText = `Width: ${width}px, Height: ${height}px, Aspect Ratio: ${ratio}`;
};
