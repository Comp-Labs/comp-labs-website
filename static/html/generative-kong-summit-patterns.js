let v = 0;

function draw() {
  v = 1 - v;
  document.body.classList.add("scale");
  setTimeout(() => {
    document.body.classList.remove("scale");
  }, 3000);
  document.body.classList.toggle("shift");
  document.querySelectorAll(".inner-" + v).forEach((cell) => {
    cell.style.setProperty(
      "--color-a",
      "var(--color" + Math.floor(Math.random() * 11) + ")"
    );
    cell.style.setProperty(
      "--color-b",
      "var(--color" + Math.floor(Math.random() * 11) + ")"
    );
    cell.style.setProperty(
      "--color-c",
      "var(--color" + Math.floor(Math.random() * 11) + ")"
    );
    cell.style.setProperty(
      "--clip-a",
      "var(--clip" + Math.floor(Math.random() * 8) + ")"
    );
    cell.style.setProperty(
      "--clip-b",
      "var(--clip" + Math.floor(Math.random() * 8) + ")"
    );
    cell.style.setProperty("--rotate-1", Math.floor(Math.random() * 6) * 90);
    cell.style.setProperty("--rotate-2", Math.floor(Math.random() * 6) * 90);
    cell.style.setProperty("--opacity", Math.floor(Math.random() * 4) - 2);
    cell.style.setProperty("--opacity-2", Math.floor(Math.random() * 4) - 1);
  });
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.style.setProperty("--modifier", Math.floor(Math.random() * 2) + 1);
  });
}

draw();

setInterval(function () {
  draw();
}, 4500);