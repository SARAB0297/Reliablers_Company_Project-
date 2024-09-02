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

function page2Animation() {
    const rightElem=document.querySelectorAll(".right-elem")
    rightElem.forEach(function(elem){
        elem.addEventListener("mouseenter",function() {
       /*   elem.childNodes[3].style.opacity=1 */
            gsap.to(elem.childNodes[3], {
                opacity:1,scale:1
            })
        })
        elem.addEventListener("mouseleave",function() {
           /* elem.childNodes[3].style.opacity=0 */
           gsap.to(elem.childNodes[3], {
            opacity:0,scale:0
        })
        })
        
          elem.addEventListener("mousemove", function (dets) {
    
                gsap.to(elem.childNodes[3], {
                    x: dets.x - elem.getBoundingClientRect().x - 50,
                    y: dets.y - elem.getBoundingClientRect().y - 100
                })
            })
    })
}

function page3VideoAnimation() {
var page3Center=document.querySelector(".page3-center");
var video=document.querySelector("#page3 video");

page3Center.addEventListener("click",function(){

    video.play()
    gsap.to(video, {
        transform:'scaleX(1) scaleY(1)',
        opacity:1,
        borderRadius:0 
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video, {
        transform:'scaleX(0.7) scaleY(0)',
        opacity:0,
        borderRadius:"30px"
    })
})
}

//navAnimation();
page2Animation();
page3VideoAnimation();