gsap.from(".nav",{
    opacity: 0,
    duration: 2
})
gsap.from(".right1 img",{
    y: 700,
    opacity: 0,
    duration: 2
})
var tl = gsap.timeline()

tl.from(".line1",{
    y: 30,
    opacity: 0,
    duration: 0.5
})
tl.from(".line2",{
    y: 30,
    opacity: 0,
    duration: 0.5
})
tl.from(".line3",{
    y: 30,
    opacity: 0,
    duration: 0.5
})

gsap.from(".left2 img",{
    scrollTrigger:{
        trigger:".container2",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    },
    y: 700,
    opacity: 0,
    duration: 1.5
})
tl.from(".line4",{
    scrollTrigger:{
        trigger:".line4",
        scroller: "body",
        start: "top 60%"
    },
    y: 30,
    opacity: 0,
    duration: 1
})
tl.from(".line5",{
    scrollTrigger:{
        trigger:".line5",
        scroller: "body",
        start: "top 60%"
    },
    y: 30,
    opacity: 0,
    duration: 1
})

tl.from(".line6",{
    scrollTrigger:{
        trigger:".line6",
        scroller: "body",
        start: "top 60%"
    },
    y: 30,
    opacity: 0,
    duration: 1
})

tl.from(".container3 h5",{
    scrollTrigger:{
        trigger:".container3 h5",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
    y: 30,
    opacity: 0,
    duration: 0.5
})
tl.from(".container3 p",{
    scrollTrigger:{
        trigger:".container3 p",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
    y: 30,
    opacity: 0,
    duration: 0.5
})
tl.from(".container3 button",{
    scrollTrigger:{
        trigger:"button",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
    y: 30,
    opacity: 0,
    duration: 0.5
})
gsap.from(".imgcontainer",{
    scrollTrigger:{
        trigger:".container3",
        scroller:"body",
        start:"top 80%",
    },
    y: 400,
    opacity: 0,
    duration: 1.5
})

var tl1 = gsap.timeline()

tl1.from(".content2 h5",{
    y: 30,
    opacity: 0,
    duration: 1
})
tl1.from(".content2 p",{
    y: 30,
    opacity: 0,
    duration: 0.5
})
tl1.from(".container4 hr",{
    y: 30,
    opacity: 0,
    duration: 0.5
})

tl1.from(".content3",{
    scrollTrigger:{
        trigger:".content3",
        scroller:"body",
        start:"top 60%",
    },
    y: 30,
    opacity: 0,
    duration: 0.5
})

// tl1.from(".two",{
//     scrollTrigger:{
//         trigger:".two",
//         scroller:"body",
//         start:"top 60%",
//     },
//     y: 30,
//     opacity: 0,
//     duration: 0.3
// })
tl1.from(".content4",{
    scrollTrigger:{
        trigger:".content4",
        scroller:"body",
        start:"top 60%",
    },
    y: 20,
    opacity: 0,
    duration: 0.3
})
tl1.from(".content5",{
    // scrollTrigger:{
    //     trigger:".content5",
    //     scroller:"body",
    //     start:"top 60%",
    // },
    y: 20,
    opacity: 0,
    duration: 0.3
})