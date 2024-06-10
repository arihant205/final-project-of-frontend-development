function timelineone(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            scrub:1,
            start:"top top",
            markers:true,
            pin:true,
            end:"bottom -250%"
        }
    })
    tl.from("#centerimg",{
        x:200
    })
    .to("#circle #btm img",{
        rotate:"-180deg",
        duration:1,
        stagger:.1,
        ease:Power1,
        scale:0
    },"hello")
    .to("#smcircle",{
        delay:0.2,
        scale:.5,
        scrub:0,
        ease:Power1,
    },"hello")  
    
    
    
    .to("#cimg img",{
        scale:0,
        duration:1,
        ease:Power1,
    },"hello")
    
    .to("#overlay #gola",{
        top:"50%",
        scale:1.75,
        ease:Power1,
    },"hello")
    
    .to("#circle #top img",{
        scale:0,
        duration:1,
        stagger:0.1,
        ease:Power1,
    },"hello")
    
    .to("#centerimg h3",{
        scale:0.5,
        opacity:0,
        duration:1,
        ease:Power1,
    },"hello")  
    
    .to("#overlay>h1",{
        bottom:"-50%",
        scrub:0,
        ease:Power1,
    },"hello")  
    
    .to("#smcircle",{
        scale:0.2,
        duration:1,
        ease:Power1,
    },"hlo")
    .to("#circle",{
        scale:0,
        duration:1,
        ease:Power1,
    },"hlo")
    .to("#overlay #gola",{
        scale:0.5,
        opacity:0,
        duration:1,
        ease:Power1,
    },"hlo")
    .to("#overlay>h2",{
        rotate:0,
        bottom:0,
        ease:Power1,
    },"hlo")
    
    .to("#smcircle",{
        scale:0,
        duration:1,
        ease:Power1,
    },"hellofinal")
    .to("#pinkbox",{
        top:"20%",
        duration:0.999,
        ease:Power1,
    },"hellofinal")
    .to("#pinkbox",{
        top:"-100%",
        ease:Power1,
    })
}
timelineone()
var t2=gsap.timeline({
    scrollTrigger:{
        trigger:"#second",
        pin:true,
        scrub:1,
        markers:true,
        start:"top top",
        end:"bottom -250%",
    }
})
t2.to(".circle"
    ,{ top:"50%",
        stagger:0.1
    })
t2.to(".circle",{
    left:"50%"
},)
t2.to(".circle",{
    scale:.7
},)
t2.to(".purple",{
    scale:7,
    duration:3
},)
t2.to("#stop h1",{
    left:"-230%",
    duration:5
},"hell")
t2.to("#sbtm #one1",{
    top:"0%",
    opacity:0,
    duration:1,
},"hell")
t2.to("#sbtm #two2",{
    delay:0.8,
    top:"10%",
    opacity:1,
    duration:2
},"hell")
t2.to("#sbtm #first",{
    opacity:0,
    delay:.5,
    duration:1
},"hell")
t2.to("#sbtm #sec",{
    delay:1.7,
    opacity:1,
    duration:1
},"hell")
t2.to("#stop .purple",{
    delay:1.7,
    background:"linear-gradient(to right,rgb(213, 167, 180),rgb(180, 170, 213))",
    duration:1
},"hell")
t2.to("#sbtm #two2",{
    top:"0%",
    opacity:0,
    duration:0.5,
},"chal")
t2.to("#sbtm #three3",{
    delay:0.8,
    top:"10%",
    opacity:1,
    duration:1
},"chal")
t2.from("#minipinkbox .pinkmini",{
    y:"500",
    stagger:0.1
},"chal")