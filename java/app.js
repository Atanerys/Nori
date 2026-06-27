
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`)
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const smoother = ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
})

gsap.from(".flip-card", {
    x: -1000,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".team-cards",
        start: "top 99%",
        end: "top 1%",
        scrub: true
    }
});

window.addEventListener("load", () => {

    const grid = document.querySelector(".reviews-grid");

    new Masonry(grid, {
        itemSelector: ".review",
        gutter: 30,
        percentPosition: true
    });

});

gsap.utils.toArray(".review").forEach(card => {
    gsap.fromTo(card,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 70%",
                scrub: true
            }
        }
    );
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            smoother.scrollTo(target, true);
        }
    });
});


