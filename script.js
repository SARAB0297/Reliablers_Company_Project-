function navAnimation() { 
    const nav=document.querySelector("nav");
nav.addEventListener("mouseenter",function() {
    let tl=gsap.timeline()

    tl.to("#nav-bottom",{
        height:"22vh"
    })
    
    tl.to(".navi  h5",{
        display:"block"
    })
tl.to(".navi h5 span",{
    y:0, 
    //duration:0.3,
    stagger:{
        amount:0.6
    }
    })
})

nav.addEventListener("mouseleave",function() {
    let tl=gsap.timeline()

tl.to(".navi h5 span",{
    y:20, 
    //duration:0.3,
    stagger:{
        amount:0.3
    }
    })
    tl.to(".navi h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.2
    })
})
}
navAnimation();