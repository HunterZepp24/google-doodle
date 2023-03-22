// Check JS is Connected
console.log('JS Connected');

let tl1 = gsap.timeline({ repeat: -1, repeatDelay: 9 });
let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 5 });
let tl3 = gsap.timeline({ repeat: -1, repeatDelay: 5 });
let tl4 = gsap.timeline({ repeat: -1, repeatDelay: 4 });

tl1
  .fromTo(
    ".jaws",
    {
      x: 600
    },
    {
      x: -350,
      duration: 4.5,
      ease: "none",
      delay: 1
    }
  )
  .fromTo(
    ".harry-potter",
    {
      x: 225
    },
    {
      x: -400,
      duration: 1,
      ease: "none"
    },
    "-=3.5"
  )
  .fromTo(
    ".et",
    {
      x: -150,
      y: 50
    },
    {
      x: 250,
      y: -55,
      duration: 2,
      ease: "none"
    },
    "-=3"
  )
  .fromTo(
    ".luke-saber",
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1.5
    },
    "-=2.5"
  )
  .fromTo(
    ".vader-saber",
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1.5
    },
    "-=1.5"
  );
tl2
  .to(".superman-standing-1", {
    opacity: 0,
    duration: 0,
    delay: 4.5
  })
  .to(".superman-flight", {
    opacity: 1,
    duration: 0
  })
  .to(".superman-flight", {
    y: -500,
    duration: 0.5,
    ease: "power1.in"
  })
  .fromTo(
    ".superman-standing-2",
    {
      x: -550
    },
    {
      x: 0,
      duration: 0.5,
      delay: 4,
      ease: "power2.out"
    }
  );
tl3
  .fromTo(
    ".close-encounters",
    {
      y: -200
    },
    {
      y: 0,
      duration: 1,
      delay: 4.5,
      ease: "power1.inOut"
    }
  )
  .fromTo(
    "#beam",
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    }
  )
  .to(".jurassic-park", {
    opacity: 0,
    duration: 1,
    ease: "power1.inOut"
  })
  .to("#beam", {
    opacity: 0,
    duration: 1,
    ease: "power1.inOut"
  })
  .to(".close-encounters", {
    y: -200,
    duration: 1,
    ease: "power1.inOut"
  });
tl4
  .from(".left-arm-ha", {
    rotate: "20deg",
    duration: 0.1,
    x: 40,
    y: 75,
    delay: 10.4,
    ease: "none"
  })
  .from(
    ".right-arm-ha",
    {
      rotate: "-20deg",
      duration: 0.1,
      x: -35,
      y: 100,
      ease: "none"
    },
    "-=.1"
  );
gsap.to("#hand-ij", {
  rotate: "20deg",
  y: 5,
  x: 5,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.25,
  ease: "power1.inOut"
});