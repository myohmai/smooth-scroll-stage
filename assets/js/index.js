// topページで使用するjs

//Opening-Animation
gsap.registerEffect({
    name: "write",
    effect: (targets, config) => {
    return gsap.to(targets, { 
        duration: config.duration, 
        strokeDashoffset: 0 });
    },
    defaults: { duration: 1 }, 
    extendTimeline: true, 
});

let writetl = gsap.timeline();
let colortl = gsap.timeline();
colortl.fromTo(".mai_gold", { fill: "#ED9AB6"}, { fill: "#D6C1A0", duration: 1})
        .fromTo(".twenty-twentyfour", { opacity: 0 }, { opacity: 1, duration: 0.5}, "-=0.5")
        .fromTo(".mai--offset", { opacity: 0 }, { opacity: 1, duration: 1, ease: "bounce.in"},"-=0.5")
        .to(".mai--offset", { stroke: "#FFF", strokeWidth: 1.5, duration: 1.5, ease: "bounce.in"});

writetl.write("#mask_01", { duration: 0.5})
        .write("#mask_02", { duration: 0.5})
        .write("#mask_03", { duration: 0.4})
        .write("#mask_04", { duration: 0.4})
        .write("#mask_05", { duration: 0.25})
        .write("#mask_06", { duration: 0.5})
        .write(".mask-portfolio_01", { duration: 0.2})
        .write(".mask-portfolio_02", { duration: 0.2}) 
        .write(".mask-portfolio_03", { duration: 0.2})
        .write(".mask-portfolio_04", { duration: 0.2})
        .write(".mask-portfolio_05", { duration: 0.2})
        .write(".mask-portfolio_06", { duration: 0.2})
        .write(".mask-portfolio_07", { duration: 0.2})
        .write(".mask-portfolio_08", { duration: 0.2})
        .add(colortl)
        .to(".logo-container", { yPercent: "-=110", scale: 5, opacity: 0, duration: 0.2, ease: "slow"}, "-=1")
        .to(".opening-animation", { yPercent: "-=110", opacity: 0, duration: 1.5, ease: "slow"}, "-=0.5");

// フワフワアニメーション
gsap.fromTo(
    ".bokeh",
    {
        xPercent: "random(-100,100)",
        yPercent: "random(-75,75)",
    },
    {
        xPercent: "random(-100,100)",
        yPercent: "random(-75,75)",
        duration: 15,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
    });
// Works slick
jQuery(document).ready(function () {
    $(".works__list").slick({
        variableWidth : true,
        prevArrow : '<div class="slick-arrow slick-arrow__prev"></div>',
        nextArrow : '<div class="slick-arrow slick-arrow__next"></div>',
        dots: true,
        dotsClass: "slide-dots"
    });
});

// ハートのテキストが動くアニメーション
gsap.to(".inner-heart__text", {
    duration: 5,
    attr: { startOffset: 20 },
    ease: "none" ,
    repeat: -1,
    yoyo: true
})

  // contact-me にマウスオーバーで処理
const contact = document.querySelector('.contact-me');

  //マウスオーバー時のアニメーション
function contactAnime() {
    let tl = gsap.timeline();
    tl.addLabel("start", 0)
        .to(".decor__heart", {
        opacity: 1,
        duration: 1
        }, "start")
        .to(".heart-gradient__stop1", {
            attr: { offset: 0.5 },
            duration: 1
            }, "start");
    return tl;
};
  //マウスリーブ時のアニメーション
function contactAnimeReverse() {
    let tl = gsap.timeline();
    tl.addLabel("start", 0)
        .to(".decor__heart", {
            opacity: 0,
            duration: 1
            }, "start")
        .to(".heart-gradient__stop1", {
            attr: { offset: 0 },
            duration: 1
            }, "start");
        return tl;
};
  //クリック時のアニメーション
function contactClick() {
    let tl = gsap.timeline({
        onComplete: sendMail(),
    });
        tl.addLabel("start", 0)
        .to(".decor__heart", {
            opacity: 1,
            duration: 1
            }, "start")
        .to(".heart-gradient__stop1", {
            attr: { offset: 0.5 },
            duration: 1
            }, "start")
        .to(".contact-me__outer-heart", {
            scale: 2,
            opacity: 0,
            duration: 2
            }, "start")
        .fromTo(".contact-me", {
            y: 0
            }, {
            duration: 0.2,
            y: -5,
            repeat: 3,
            }, "start")
            .to(".contact-me", {
            duration: 0.8,
            x: 100,
            y: -100,
            scale: 1.5,
            opacity: 0
        }, 0.4);
        return tl;
};
function contactAfter() {
    let tl = gsap.timeline();
    tl.addLabel('start', 0)
    .set(".contact-me__outer-heart", {
        opacity: 1,
        scale: 1,
    }, "start")
    .to(".heart-gradient__stop1", {
        attr: { offset: 0 },
        duration: 0.5
        }, "start")
    .set(".contact-me",{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
    },"start");
    return tl;
};
function contactFunction() {
    tl = gsap.timeline();
    tl.add(contactClick())
    .add(contactAfter());
    return tl;
};
//メールを送る
function sendMail(){
    const address1 = 'mai.xxx.mode.08';
    const address2 = '@gmail.com';
    const address = address1 + address2;
    location.href = 'mailto:' + address;
};
contact.addEventListener('mouseenter',()=>{
    contactAnime();
});
contact.addEventListener('mouseleave',()=>{
    contactAnimeReverse();
});
contact.addEventListener('click',()=>{
    contactFunction();
});

particlesJS("particles-js", {
    "particles":{
        "number":{
            "value":175,
            "density":{
                "enable":true,
                "value_area":631.3181133058181
            }},
            "color":{
                "value":"#ffffff"
            },
            "shape":{
                "type":"circle",
                "stroke":{
                    "width":0,"color":"#000000"
                },
                "polygon":{
                    "nb_sides":5
                },
                "image":{
                    "src":"img/github.svg",
                    "width":100,
                    "height":100
                }},
            "opacity":{
                "value":1,
                "random":true,
                "anim":{"enable":true,
                    "speed":1,"opacity_min":0,"sync":false
                }},
            "size":{
                "value":3,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":4,
                    "size_min":0.3,
                    "sync":false
                }},
                "line_linked":{
                    "enable":false,
                    "distance":150,
                    "color":"#ffffff",
                    "opacity":0.4,
                    "width":1
                },
                    "move":{
                        "enable":true,
                        "speed":1,
                        "direction":"none",
                        "random":true,
                        "straight":false,
                        "out_mode":"out",
                        "bounce":false,
                        "attract":{
                            "enable":false,
                            "rotateX":600,
                            "rotateY":600
                        }
                    }
                },
                "interactivity":{
                    "detect_on":"canvas",
                    "events":{
                        "onhover":{
                            "enable":true,
                            "mode":"bubble"
                            },
                        "onclick":{
                            "enable":true,
                            "mode":"repulse"
                            },
                        "resize":true
                    },
                    "modes":{
                        "grab":{
                            "distance":400,
                            "line_linked":{
                                "opacity":1
                            }},
                        "bubble":{
                            "distance":250,
                            "size":0,
                            "duration":2,
                            "opacity":0,
                            "speed":3
                        },
                        "repulse":{
                            "distance":400,
                            "duration":0.4
                        },
                        "push":{
                            "particles_nb":4
                        },
                        "remove":{
                            "particles_nb":2
                }}},
                "retina_detect":true
            });
            