// Check JS is Connected
console.log('JS Connected');

gsap.fromTo(
    ".jaws",
    {
      x: 600
    },
    {
      x: -350,
      duration: 4.5,
      ease: "none"
    }
);
gsap.fromTo(
    ".et",
    {
      x: -150,
      y: 50
    },
    {
      x: 250,
      y: -55,
      duration: 2,
      ease: "none",
      delay: 1.5
    }
);
gsap.fromTo(
    ".harry-potter",
    {
      x: 225
    },
    {
      x: -400,
      duration: 1,
      ease: "none",
      delay: 1
    }
);
gsap.to(".superman-standing-1", {
    opacity: 0,
    duration: 0,
    delay: 3
});
gsap.to(".superman-flight", {
    opacity: 1,
    duration: 0,
    delay: 3
});
gsap.to(".superman-flight", {
    y: -500,
    duration: 0.5,
    delay: 3,
    ease: "power1.in"
});
gsap.fromTo(
    ".superman-standing-2",
    {
      x: -550
    },
    {
      x: 0,
      duration: 0.5,
      delay: 6,
      ease: "power2.out"
    }
);
gsap.fromTo(
    ".close-encounters",
    {
      y: -200
    },
    {
      y: 0,
      duration: 1,
      delay: 3
    }
);
gsap.fromTo(
    "#beam",
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1,
      delay: 4
    }
);
gsap.to("#beam", {
    opacity: 0,
    duration: 1,
    delay: 6
});
gsap.to(".close-encounters", {
    y: -200,
    duration: 1,
    delay: 7
});
gsap.to(".jurassic-park", {
    opacity: 0,
    duration: 1,
    delay: 5
});
gsap.fromTo(
    ".luke-saber",
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1.5,
      delay: 1.5
    }
);
gsap.fromTo(
    ".vader-saber",
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1.5,
      delay: 3
    }
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
gsap.from(".left-arm-ha", {
    rotate: "20deg",
    duration: 0.1,
    x: 40,
    y: 75,
    delay: 7.5,
    ease: "none"
});
gsap.from(".right-arm-ha", {
    rotate: "-20deg",
    duration: 0.1,
    x: -35,
    y: 100,
    delay: 7.5,
    ease: "none"
});