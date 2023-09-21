export function BtnRotate(name: string) {
  const rotateButton = document.querySelector(`.${name}`);
  if (rotateButton) {
    rotateButton.classList.add("clicked");
    setTimeout(() => {
      rotateButton.classList.remove("clicked");
    }, 300);
  }
}
