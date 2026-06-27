const cards = gsap.utils.toArray(".card");

cards.forEach((card, i) => {
  gsap.to(card, {
    scale: 1 + i * 0.05,
    scrollTrigger: {
      trigger: card,
      start: "top center",
      end: "+=500",
      scrub: true
    }
  });
});