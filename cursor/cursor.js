const section = document.getElementsByClassName('section')[0]

const img = document.getElementsByClassName('img')[0]

// img.style.top = 0;

    gsap.to(img, {
      scrollTrigger: {
        trigger: section,
        scrub: 0.5,
        invalidateOnRefresh: true
      },
      y: section.offsetHeight - img.offsetHeight,
      ease: "none"
    });