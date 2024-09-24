gsap.registerPlugin(ScrollTrigger)


ScrollTrigger.matchMedia({
    // PC
    "(min-width:768px)": function () {
        console.log("PC")
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".bg5",
                start: "40% auto",
                end: "100% auto",
                markers: false,
                pin: true,
                scrub: 3,
                // pinSpacing:false,
            }
        })
        // tl.fromTo('.gift02',{xPercent:100,x:0},{xPercent:0})
        // tl.fromTo('.gift02 .giftImage',{xPercent:-100,x:0},{xPercent:0},"<")
        // tl.fromTo('.gift03',{xPercent:100,x:0},{xPercent:0})
        // tl.fromTo('.gift03 .giftImage',{xPercent:-100,x:0},{xPercent:0},"<")
        gsap.utils.toArray(".gifeControl").forEach((item) => {
            if (item.classList.contains("gift02") || item.classList.contains("gift03")) {
                tl.fromTo(item, { xPercent: 100, x: 0 }, { xPercent: 0 })
                tl.fromTo(item.querySelector('.giftImage'), { xPercent: -100, x: 0 }, { xPercent: 0 }, "<")
            }
        })
    },
    // SP
    "(max-width:767px)": function () {
        console.log("SP")
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".bg5",
                start: "17.5% auto",
                end: "100% auto",
                markers: false,
                pin: true,
                scrub: true,
            }
        })
        tl.fromTo('.gift02', { xPercent: 100, x: 0 }, { xPercent: 0 })
        tl.fromTo('.gift02 .giftImage', { xPercent: -100, x: 0 }, { xPercent: 0 }, "<")
        tl.fromTo('.gift03', { xPercent: 100, x: 0 }, { xPercent: 0 })
        tl.fromTo('.gift03 .giftImage', { xPercent: -100, x: 0 }, { xPercent: 0 }, "<")
    }
})