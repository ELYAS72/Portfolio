const nav = document.querySelectorAll('nav h1');


window.addEventListener('load', () => {
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(nav, 4, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)


    TL.play();

})
