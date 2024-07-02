var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
  y: -10,
  duration: 0.3,
  delay: 0.1,
  stagger: 0.1,
  opacity: 0,
});
tl.from(".center-part1", {
  x: -100,
  opacity: 0,
  duration: 0.6,
});
tl.from(
  ".center-part1 h1,.center-part1 p, .center-part1 button",
  {
    x: -50,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
  },
  "-=0.8"
);
tl.from(
  ".center-part2 img",
  {
    opacity: 0,
    duration: 1,
    scale: 0.5,
    ease: "elastic.out(1,1.5)",
  },
  "-=.5"
);
tl.from(
  ".section1bottom img",
  {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  },
  "-=0.7"
);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".part2 h4").forEach((link) => {
    link.dataset.text = link.textContent;

    link.addEventListener("mouseenter", () => {
      gsap.to(link, { y: 0, duration: 0.3 });
      gsap.to(link, {
        y: 0,
        opacity: 1,
        duration: 0.1,
        onStart: () => link.classList.add("hover"),
      });
    });

    link.addEventListener("mouseleave", () => {
      // gsap.to(link, { y: 0, duration: 0.3});
      gsap.to(link, {
        y: 0,
        opacity: 1,
        duration: 0.1,
        onComplete: () => link.classList.remove("hover"),
      });
    });
  });
});
const navHeading = document.querySelector("nav h1 span");
const star = document.querySelector("nav h1 i");
star.addEventListener("mouseenter", function () {
  gsap.to(star, {
    rotate: 360,
    duration: 2,
    ease: "linear",
  });
});

star.addEventListener("mouseleave", function () {
  gsap.to(star, {
    rotate: 45,
    duration: 2,
    ease: "linear",
  });
});
navHeading.addEventListener("mouseenter", () => {
  gsap.to(navHeading, {
    translateX: 5,
    duration: 0.2,
    ease: "linear",
  });
});
navHeading.addEventListener("mouseleave", () => {
  gsap.to(navHeading, {
    translateX: 0,
    duration: 0.2,
    ease: "linear",
  });
});
