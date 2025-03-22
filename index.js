// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
const gameWidth = game.clientWidth;
const dodgerWidth = dodger.clientWidth;

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Assuming the game area width is 400px
      dodger.style.left = `${left + 1}px`;
  }
}


document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
