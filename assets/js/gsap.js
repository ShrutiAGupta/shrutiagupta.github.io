document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".panel");

    const scrollTween = gsap.to(sections, {
        //xPercent: -100 * (sections.length - 1), // only will work when all sections are 100vw wide
        x: () => -(document.querySelector('.container').scrollWidth - window.innerWidth - document.querySelector('.vertical-bar').offsetWidth * 3 + 15),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            end: "+=9000",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true
        },
    });

});
