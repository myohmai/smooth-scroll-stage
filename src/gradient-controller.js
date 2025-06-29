import '../assets/scss/gradient-controller.scss';
import { gsap } from "gsap";

const gradient = {
    color1 : "#F2B3C8",
    color2 : "#E981A4",
    color3 : "#AF617B",
    color4 : "#DC8686",
    color5 : "#FFD69C",
    color6 : "#91EDD3",
    color7 : "#B7BAE2"
}
gsap.registerEffect({
    name: "gradColors",
    effect: (_, config) => {
        const tl = gsap.timeline({ paused: true });

        tl.to(config.gradientTarget, {
        attr: {
            cx: config.cx,
            cy: config.cy
        },
        duration: config.duration,
        ease: config.ease
        });

        tl.to(config.stop01, {
        attr: { 'stop-color': config.color01 },
        duration: config.duration,
        ease: config.ease
        }, 0);

        tl.to(config.stop02, {
        attr: { 'stop-color': config.color02 },
        duration: config.duration,
        ease: config.ease
        }, 0);

        tl.to(config.stop03, {
        attr: { 'stop-color': config.color03 },
        duration: config.duration,
        ease: config.ease
        }, 0);

        return tl;
    },
    defaults: {
        duration: 0.1,
        ease: "power1.inOut",
        cx: "0%",
        cy: "50%",
        color01: gradient.color1,
        color02: gradient.color2,
        color03: gradient.color3,
        gradientTarget: "#skills-section_gradient--radial",
        stop01: "#radial-stop_01",
        stop02: "#radial-stop_02",
        stop03: "#radial-stop_03"
    },
    extendTimeline: true
});

function stage1() {
    const tl = gsap.effects.gradColors( null, {
            cx : "0%",
            cy : "50%",
            color01 : gradient.color1,
            color02 : gradient.color2,
            color03 : gradient.color3
        });
        tl.eventCallback("onComplete", () => tl.kill());
    return tl;
};

function stage2() {
    const tl = gsap.effects.gradColors( null, {
            cx : "0%",
            cy : "0%",
            color01 : gradient.color2,
            color02 : gradient.color3,
            color03 : gradient.color4
        });
        tl.eventCallback("onComplete", () => tl.kill());
    return tl;
};

function stage3() {
    const tl = gsap.effects.gradColors( null, {
            cx : "100%",
            cy : "0%",
            color01 : gradient.color3,
            color02 : gradient.color4,
            color03 : gradient.color5
        });
        tl.eventCallback("onComplete", () => tl.kill());
    return tl;
};

function stage4() {
    const tl = gsap.effects.gradColors( null, {
            cx : "100%",
            cy : "0%",
            color01 : gradient.color4,
            color02 : gradient.color5,
            color03 : gradient.color6
        });
        tl.eventCallback("onComplete", () => tl.kill());
    return tl;
};

function stage5() {
    const tl = gsap.effects.gradColors( null, {
            cx : "100%",
            cy : "50%",
            color01 : gradient.color5,
            color02 : gradient.color6,
            color03 : gradient.color7
        });
        tl.eventCallback("onComplete", () => tl.kill());
    return tl;
};


gsap.registerEffect({
    name: "gradColors"
})
gsap.registerEffect({
    name: "fadein",
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, opacity: 0.5 , paused: true });
    },
    defalts : { duration: 0.1 },
    extendTimeline: true
})

gsap.registerEffect({
    name: "fadeout",
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, opacity: 0 , paused: true });
    },
    defalts : { duration: 0.1 },
    extendTimeline: true
})

function flowerIn(){
    const tl = gsap.effects.fadein('.svg-flower');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}

function flowerOut(){
    const tl = gsap.effects.fadeout('.svg-flower');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}

const flowerRote = gsap.to('.svg-flower', {
    rotation : 360,
    duration : 10,
    repeat : -1,
    transformOrigin: '50% 50%',
    ease : 'none'
})

flowerRote.play();

function ribbonIn(){
    const tl = gsap.effects.fadein('.svg-ribbon');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}

function ribbonOut(){
    const tl = gsap.effects.fadeout('.svg-ribbon');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}


const ribbon = gsap.to('.svg-ribbon',{
    strokeDashoffset: 0,
    yoyo : true,
    repeatDelay: 0.5,
    repeat: -1,
    duration: 10,
    ease : 'none'
})

ribbon.play();

function butterflyIn(){
    const tl = gsap.effects.fadein('.svg-butterfly');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}

function butterflyOut(){
    const tl = gsap.effects.fadeout('.svg-butterfly');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}

const butterflyFly = gsap.to('.svg-butterfly',{
    scaleX: 0.7,
    yoyo: true,
    repeat: -1,
    duration: 3,
    transformOrigin: '50% 50%',
    ease: 'none'
})

butterflyFly.play();

function heartIn(){
    const tl = gsap.effects.fadein('.svg-heart');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}

function heartOut(){
    const tl = gsap.effects.fadeout('.svg-heart');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}

const heartScale = gsap.to('.svg-heart',{
    scale : 1.1,
    yoyo: true,
    repeat: -1,
    duration: 3,
    transformOrigin: '50% 50%',
    ease: 'none'
})

heartScale.play();

function roseIn(){
    const tl = gsap.effects.fadein('.svg-rose');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}

function roseOut(){
    const tl = gsap.effects.fadeout('.svg-rose');
    tl.eventCallback("onComplete", () => tl.kill());
    return tl;
}

const roseBloom = gsap.timeline({
    repeat: -1
});

roseBloom.fromTo('.rose_01 .petal', {
    opacity : 0
},{
    opacity : 0.8,
    stagger : 0.1,
    duration : 0.5,
    ease : 'none'
})
.fromTo('.rose_02 .petal', {
    opacity : 0
},{
    opacity : 0.8,
    stagger : 0.1,
    duration : 0.5,
    ease : 'none'
}, '-=2.5')
.to('.rose_01 .petal', {
    opacity : 0,
    duration : 1,
    ease : 'none'
    })
.to('.rose_02 .petal', {
    opacity : 0,
    duration : 1,
    ease : 'none'
})

roseBloom.play();

export {
    stage1,
    stage2,
    stage3,
    stage4,
    stage5,
    flowerIn,
    flowerOut,
    ribbonIn,
    ribbonOut,
    butterflyIn,
    butterflyOut,
    heartIn,
    heartOut,
    roseIn,
    roseOut
};