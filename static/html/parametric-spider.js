/*--------------------
Vars
--------------------*/
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const win = {
  w: window.innerWidth,
  h: window.innerHeight };

const mouse = {
  x: win.w * 0.5,
  y: win.h * 0.5,
  lerpX: win.w * 0.5,
  lerpY: win.h * 0.5,
  stepX: 0,
  stepY: 0,
  oldStepX: 0,
  oldStepY: 0,
  angle: 0 };

const opts = {
  cellSize: 40,
  pawRadius: 94,
  pawHeight: 200,
  pawRandomStep: 0.2,
  bodyHeight: 20,
  spiderOffsetX: 30,
  spiderOffsetY: 40,
  shadowY: 0.3,
  speed: 0.12,
  stop: false,
  jump: 0 };

let cols = 0;
let rows = 0;

/*--------------------
Lerp
--------------------*/
const lerp = (a, b, c) => {
  return (1 - c) * a + c * b;
};

/*--------------------
Random
--------------------*/
const random = (start, range) => {
  return start - range + Math.random() * range * 2;
};

/*--------------------
Resize
--------------------*/
const handleResize = () => {
  win.w = window.innerWidth;
  win.h = window.innerHeight;
  canvas.width = win.w;
  canvas.height = win.h;
  cols = Math.round(win.w / opts.cellSize) + 1;
  rows = Math.round(win.h / opts.cellSize) + 1;
};
handleResize();
window.addEventListener('resize', handleResize);

/*--------------------
Paws
--------------------*/
const Paws = [
{ x: win.w * 0.5, y: win.h * 0.5 },
{ x: win.w * 0.5, y: win.h * 0.5 },
{ x: win.w * 0.5, y: win.h * 0.5 },
{ x: win.w * 0.5, y: win.h * 0.5 },
{ x: win.w * 0.5, y: win.h * 0.5 },
{ x: win.w * 0.5, y: win.h * 0.5 },
{ x: win.w * 0.5, y: win.h * 0.5 },
{ x: win.w * 0.5, y: win.h * 0.5 }];


/*--------------------
Clear
--------------------*/
const clear = () => {
  ctx.clearRect(0, 0, win.w, win.h);
};

/*--------------------
Circle
--------------------*/
const circle = (x, y, r, c) => {
  ctx.fillStyle = c;
  ctx.beginPath();
  ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
};

/*--------------------
Rect
--------------------*/
const rect = (x, y, r, c) => {
  ctx.fillStyle = c;
  ctx.fillRect(x, y, r, r);
};

/*--------------------
Walk
--------------------*/
const walk = () => {
  let ind = 0;
  Array(10).
  fill().
  forEach((a, i) => {
    const theta = i / 10;
    if (i % 5 === 0) return;
    const x = random(
    mouse.x + cols * 0.5 + opts.pawRadius * Math.sin(theta * Math.PI * 2),
    opts.pawRadius * opts.pawRandomStep);

    const y = random(
    mouse.y + rows * 0.5 + opts.pawRadius * Math.cos(theta * Math.PI * 2),
    opts.pawRadius * opts.pawRandomStep);


    gsap.to(Paws[ind++], {
      x,
      y,
      duration: opts.speed,
      ease: 'power3.out()',
      delay: (i + 2) % 4 * 0.1 });

  });
};

/*--------------------
Check Step
--------------------*/
const checkStep = () => {
  mouse.stepX = Math.round(mouse.x / win.w * (cols - 1)) * opts.cellSize;
  mouse.stepY = Math.round(mouse.y / win.h * (rows - 1)) * opts.cellSize;

  if (mouse.oldStepX !== mouse.stepX || mouse.oldStepY !== mouse.stepY) {
    walk();
  }

  mouse.oldStepX = mouse.stepX;
  mouse.oldStepY = mouse.stepY;
  // rect(mouse.stepX, mouse.stepY, opts.cellSize, 'rgba(255, 0, 0, .1)')
};

/*--------------------
Draw Spider
--------------------*/
const drawSpider = () => {
  const x = mouse.lerpX - opts.spiderOffsetX;
  const y = mouse.lerpY - opts.spiderOffsetY;

  // Shadows
  Paws.forEach((p, i) => {
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y + opts.bodyHeight);
    const x2 = lerp(x, p.x, 0.5);
    const y2 = lerp(y + opts.jump, p.y, opts.shadowY);
    ctx.quadraticCurveTo(x2, y2, p.x, p.y);
    ctx.stroke();
    ctx.closePath();
  });

  // Paws
  Paws.forEach((p, i) => {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(x, y + opts.jump);
    const x1 = lerp(x, p.x, 0.5);
    const y1 = lerp(y + opts.jump, p.y - opts.pawHeight, 0.5);
    ctx.quadraticCurveTo(x1, y1, p.x, p.y);
    ctx.stroke();
    ctx.closePath();
  });

  // Head
};

/*--------------------
Draw Mouse
--------------------*/
const drawMouse = () => {
  mouse.lerpX = lerp(mouse.lerpX, mouse.x, 0.1);
  mouse.lerpY = lerp(mouse.lerpY, mouse.y, 0.1);

  if (opts.stop) {
    mouse.lerpX = win.w * 0.5;
    mouse.lerpY = win.h * 0.5;
    mouse.x = win.w * 0.5;
    mouse.y = win.h * 0.5;
  }
  checkStep();
};

/*--------------------
Draw
--------------------*/
const draw = t => {
  clear();
  drawMouse();
  drawSpider();
  requestAnimationFrame(draw);
};
draw();

/*--------------------
GUI
--------------------*/
const gui = new dat.GUI();
const f = gui.addFolder('Settings');
f.add(opts, 'spiderOffsetX', -100, 100, 1);
f.add(opts, 'spiderOffsetY', -100, 100, 1);
f.add(opts, 'pawRadius', 0, 100, 1).onChange(walk);
f.add(opts, 'pawHeight', 0, 200, 1);
f.add(opts, 'pawRandomStep', 0, 1, 0.1);
f.add(opts, 'bodyHeight', 0, 100, 1);
f.add(opts, 'shadowY', 0, 1, 0.1);
f.add(opts, 'speed', 0, 0.3, 0.01);
f.add(opts, 'cellSize', 10, 200, 1).onChange(handleResize);
f.add(opts, 'stop');
f.close();

/*--------------------
Mouse
--------------------*/
const handleMouseMove = e => {
  if (opts.stop) {
    mouse.lerpX = win.w * 0.5;
    mouse.lerpY = win.h * 0.5;
    mouse.x = win.w * 0.5;
    mouse.y = win.h * 0.5;
  } else {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }
};
const handleTouchMove = e => {
  mouse.x = e.touches[0].clientX;
  mouse.y = e.touches[0].clientY;
};
const handleMouseDown = () => {
  if (opts.stop) return;
  gsap.killTweensOf(opts);
  gsap.to(opts, {
    jump: opts.bodyHeight,
    duration: 0.5,
    ease: 'power3.out' });

};
const handleMouseUp = () => {
  if (opts.stop) return;
  gsap.killTweensOf(opts);
  gsap.to(opts, {
    jump: 0,
    duration: 2,
    ease: 'elastic(1.4, 0.1)' });

};
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('touchstart', handleTouchMove);
window.addEventListener('touchmove', handleTouchMove);
window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);

/*--------------------
Credits
--------------------*/
const credits = () => {
  const div = document.createElement('div');
  div.classList.add('credits');
  div.innerHTML = `
      <a href="https://linktr.ee/supahfunk" target="_blank" rel="noreferrer">
        <h1>Fabio Ottaviani</h1>
        <h2>Supahfunk</h2>
      </a>
  `;
  document.body.appendChild(div);
};
credits();