gsap.from("#page1 .box", {
  scale: 0,
  rotate: 360,
  duration: 2,
});
gsap.from("#page2 .box", {
  scale: 0,
  rotate: 360,
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
  },
});
gsap.from("#page3 .box", {
  scale: 0,
  rotate: 360,
  duration: 2,
//   scrollTrigger: {
//     trigger: "#page3 .box",
//     scroller: "body",
//     markers: true,
//     scrub: 2,
//   },
});
