document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".panel");

    const scrollTween = gsap.to(sections, {
        //xPercent: -100 * (sections.length - 1), // only will work when all sections are 100vw wide
        x: () => -(document.querySelector('.container').scrollWidth - window.innerWidth - document.querySelector('.vertical-bar').offsetWidth * 3 - 15),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            end: "+=9000",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true
        },
    });

    gsap.to('.vertical-bar__panel-2', {

        x: () => -(window.innerWidth - document.querySelector('.vertical-bar').offsetWidth * 3 - 15),
        ease: 'none',
        scrollTrigger: {
          
          trigger: '.panel.panel-2',    
          // I understand that the tween above should work as the scroller
          // --> That is, why you should use one of the panels, that are animated in the scrollTween as the trigger element
          containerAnimation: scrollTween,
          
          // Then I'm interpreting the following lines like "when the left side of my vertical bar touches the right side of the scroller, animation should start
          // --> As mentioned, your vertical bars will not move at all. Your understanding of the concept behind the string syntax is correct though.
          // --> The first parameter in the string referes to the trigger element, and the second refers to the scroller/window.
          // Which is why these sorts of calculations will probably be neccessary to get where you want with this.
          start: () => 'left-=15px right-=' + (document.querySelector('.vertical-bar').offsetWidth * 2 + 15),    
          end: () => 'left-=15px left+=' + document.querySelector('.vertical-bar').offsetWidth,
          
          scrub: true,
          invalidateOnRefresh: true
        }
      })

});
