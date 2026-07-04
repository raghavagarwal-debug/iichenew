function initLenisScroll() {
    if (typeof Lenis === 'undefined') {
        console.warn('Lenis Smooth Scroll CDN is not loaded.');
        return;
    }

    const scrollContainer = document.getElementById('main-content');
    let lenis;

    if (scrollContainer) {
        // used in index.html
        lenis = new Lenis({
            wrapper: scrollContainer,
            content: scrollContainer.children[0] || scrollContainer,
            lerp: 0.04,
            smoothWheel: true
        });
    } else {
        // used in other pages
        lenis = new Lenis({
            lerp: 0.04,
            smoothWheel: true
        });
    }
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    if (typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollContainer || document.body, {
            scrollTop(value) {
                return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }
        });
    }
    window.lenis = lenis;
    if (scrollContainer && window.location.hash === '#blogs-section') {
        lenis.scrollTo(0, { immediate: true });
    }
    const wrapper = document.querySelector('.relative.z-10');
    if (wrapper && !scrollContainer) {
        gsap.to(wrapper, { opacity: 1, duration: 2.0, ease: 'power2.out' });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLenisScroll);
} else {
    initLenisScroll();
}
