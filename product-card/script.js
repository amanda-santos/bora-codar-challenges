function toggleGif() {
  const buttonImage = document.querySelector("#turn-360-image");
  const buttonImageSrc = buttonImage.getAttribute("src");

  const productImageElement = document.querySelector("#product-image");

  const turn360Image = "assets/360.svg";
  const closeImage = "assets/x.svg";

  const productImage = "assets/product-image.png";
  const productGif = "assets/product-gif.gif";

  console.log(buttonImageSrc);

  if (buttonImageSrc === turn360Image) {
    buttonImage.setAttribute("src", closeImage);
    productImageElement.setAttribute("src", productGif);
  } else {
    buttonImage.setAttribute("src", turn360Image);
    productImageElement.setAttribute("src", productImage);
  }
}
