import '../assets/scss/gradient-controller.scss';
import { gsap } from "gsap";

// responsiveSVG
function updateViewBox() {
    let svg = document.getElementById("service-intro_svg");
    let width = window.innerWidth;
    let height = window.innerHeight;
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
};

window.addEventListener('resize', updateViewBox);
document.addEventListener('DOMContentLoaded', () => {
    updateViewBox(); // 初回実行
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
            gradientTarget: "#skills-section_gradient--radial-01",
            stop01: "#radial-stop_01",
            stop02: "#radial-stop_02",
            stop03: "#radial-stop_03"
        },
        extendTimeline: true
    });
    
    const stage1 = gsap.effects.gradColors( null, {
        cx : "0%",
        cy : "50%",
        color01 : gradient.color1,
        color02 : gradient.color2,
        color03 : gradient.color3
    });

    const stage2 = gsap.effects.gradColors( null, {
        cx : "0%",
        cy : "0%",
        color01 : gradient.color2,
        color02 : gradient.color3,
        color03 : gradient.color4
    });

    const stage3 = gsap.effects.gradColors( null, {
        cx : "100%",
        cy : "0%",
        color01 : gradient.color3,
        color02 : gradient.color4,
        color03 : gradient.color5
    });

    const stage4 = gsap.effects.gradColors( null, {
        cx : "100%",
        cy : "0%",
        color01 : gradient.color4,
        color02 : gradient.color5,
        color03 : gradient.color6
    });

    const stage5 = gsap.effects.gradColors( null, {
        cx : "100%",
        cy : "50%",
        color01 : gradient.color5,
        color02 : gradient.color6,
        color03 : gradient.color7
    });

    gsap.registerEffect({
        name: "gradColors"
    })
    gsap.registerEffect({
        name: "fadein",
        effect: (targets, config) => {
            return gsap.to(targets, { duration: config.duration, opacity: 1 , paused: true });
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

    const flowerIn = gsap.effects.fadein('.svg-flower');
    const flowerOut = gsap.effects.fadeout('.svg-flower');
    
    const flowerRote = gsap.to('.svg-flower', {
        rotation : 360,
        duration : 10,
        repeat : -1,
        transformOrigin: '50% 50%',
        ease : 'none'
    })

    flowerRote.play();

    const ribbonIn = gsap.effects.fadein('.svg-ribbon');
    const ribbonOut = gsap.effects.fadeout('.svg-ribbon');

    const ribbon = gsap.to('.svg-ribbon',{
        strokeDashoffset: 0,
        yoyo : true,
        repeatDelay: 0.5,
        repeat: -1,
        duration: 10,
        ease : 'none'
    })

    ribbon.play();

    const butterflyIn = gsap.effects.fadein('.svg-butterfly');
    const butterflyOut = gsap.effects.fadeout('.svg-butterfly');

    const butterflyFly = gsap.to('.svg-butterfly',{
        scaleX: 0.7,
        yoyo: true,
        repeat: -1,
        duration: 3,
        transformOrigin: '50% 50%',
        ease: 'none'
    })

    butterflyFly.play();

    const heartIn = gsap.effects.fadein('.svg-heart');
    const heartOut = gsap.effects.fadeout('.svg-heart');

    const heartScale = gsap.to('.svg-heart',{
        scale : 1.1,
        yoyo: true,
        repeat: -1,
        duration: 3,
        transformOrigin: '50% 50%',
        ease: 'none'
    })

    heartScale.play();

    const roseIn = gsap.effects.fadein('.svg-rose');
    const roseOut = gsap.effects.fadeout('.svg-rose');

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
});