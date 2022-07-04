// Set up Timeline for wallpaper triangles
let triangleTL = gsap.timeline({
  paused: true,
  repeat: -1,
  yoyo: true
});

function getShadowXY(rotation, inner = false) {
  /* 
  Figures out shadow positions based on
  the rotation of the picture frame.
  Uses different values for inner and outer shadows.
  
  Thanks to Lucie Haberer for figuring out these values!
  
  returns [xPosition, yPosition]
*/
  if (inner) {
    return [
      Math.sin(rotation / (180 / Math.PI)) * 10,
      Math.cos(rotation / (180 / Math.PI)) * 10
    ];
  } else {
    return [
      Math.sin(rotation / (180 / Math.PI)) * 45 + 15,
      Math.cos(rotation / (180 / Math.PI)) * 45
    ];
  }
}

function adjustPicture(rotation, duration = 0) {
  /* 
  Updates shadows and glare when the picture rotates.
  */
  const [outerShadowX, outerShadowY] = getShadowXY(rotation, false);

  gsap.to("#shadow", {
    x: outerShadowX,
    y: outerShadowY,
    duration
  });

  const [innerShadowX, innerShadowY] = getShadowXY(rotation, true);

  gsap.to("#inner-shadow", {
    x: innerShadowX,
    y: innerShadowY,
    duration
  });

  // Keep the white glare lines constant
  gsap.to("#glare-group", {
    duration,
    rotate: -1 * rotation,
    transformOrigin: "center center"
  });
}

function handleMoveEnd(rotation) {
  /*
    Called when dragging or inertia is complete. 
    Applies gravity and 'win' states.
  */

  // If picture is high up, apply fake gravity.
  if (rotation > 45 || rotation < -45) {
    const sign = Math.sign(rotation);
    const newRotation = gsap.utils.random(15, 25, 1) * sign;
    gsap.to("#picture-frame", {
      rotation: newRotation,
      duration: 2
    });
    adjustPicture(newRotation, (duration = 2));
  }

  // Check for 'win' state
  const body = document.querySelector("body");
  if (rotation > -1 && rotation < 1) {
    body.classList.add("win");
    triangleTL.resume();
  } else {
    body.classList.remove("win");
    triangleTL.pause();
  }
}

function init() {
  const initialRotation =
    gsap.utils.random(8.5, 16, 0.1) * gsap.utils.random([1, -1]);

  gsap.set("#cat-image", { x: 275, y: 315 });
  gsap.set("#glare-2", {
    x: 60,
    y: 60
  });
  gsap.set("#glare-3", {
    x: 760,
    y: 360
  });

  gsap.set("#wallpaper path", { transformOrigin: "center" });

  triangleTL.to("#wallpaper path", {
    rotate: 60,
    ease: "back.inOut(2.5)",
    duration: 0.6
  });

  gsap.set("#picture-frame", {
    rotation: initialRotation
  });

  adjustPicture(initialRotation, 0);

  const rotationSign = Math.sign(initialRotation);
  gsap.set("#arrow", {
    stroke: "hsl(200, 20%, 20%)",
    y: 1010,
    scaleX: rotationSign * -1,
    x: () => (initialRotation > 0 ? 5 : 1050),
    drawSVG: "0%",
    opacity: 0.5,
    rotate: 40 * rotationSign
  });

  // Create arrow to give users a hint
  gsap
    .timeline({ delay: 2, repeat: -1, repeatDelay: 2 })
    .to("#arrow", {
      duration: 0.8,
      drawSVG: "0% 100%",
      ease: "power2.inOut",
      rotate: 0
    })
    .to(
      "#arrow",
      {
        drawSVG: "100% 100%",
        duration: 0.4
      },
      1.5
    )
    .set("#arrow", { drawSVG: "0% 0%", rotate: 40 * rotationSign });

  gsap.to("body", {
    opacity: 1,
    duration: 0.2
  });

  /*
    Draggable handles the click/drag logic for us.
    Intertia makes it keep moving if we toss it.
    Rotation point is based on the transform-origin.
  */
  Draggable.create("#picture-frame", {
    type: "rotation",
    inertia: true,
    bounds: { minRotation: -110, maxRotation: 110 },
    onDrag: function () {
      adjustPicture(this.rotation);
      gsap.to("#arrow", { opacity: 0, duration: 0.2 });
    },
    onDragEnd: function () {
      handleMoveEnd(this.rotation);
    },
    onThrowUpdate: function () {
      adjustPicture(this.rotation);
    },
    onThrowComplete: function () {
      handleMoveEnd(this.rotation);
    }
  });
}

init();