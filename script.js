let boxTop = 200;
let boxLeft = 200;

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "ArrowDown" || keyName === "s") {
    boxTop += 30;
    document.querySelector("img").style.transform = "rotate(90deg)";
  } else if (keyName === "ArrowUp" || keyName === "w") {
    boxTop -= 30;
    document.querySelector("img").style.transform = "rotate(-90deg)";
  } else if (keyName === "ArrowRight" || keyName === "d") {
    boxLeft += 30;
    document.querySelector("img").style.transform = "scaleX(1)";
  } else if (keyName === "ArrowLeft" || keyName === "a") {
    boxLeft -= 30;
    document.querySelector("img").style.transform = "scaleX(-1)";
  }
  document.getElementById("box").style.top = boxTop + "px";
  document.getElementById("box").style.left = boxLeft + "px";
});

const box = document.createElement("div");

box.id = "box";

const body = document.querySelector("body");

body.appendChild(box);
