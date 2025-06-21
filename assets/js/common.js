// 全てのページで使用するスクリプト menuなど

// ブレイクポイントでグローバルナビゲーションの表示を切り替え
const nav = document.querySelector('.g-navi');
const mql = window.matchMedia("(max-width: 770px)");
mql.addEventListener("change", screenTest);

function screenTest(e) {
    if(e.matches) {
        nav.style.opacity = 0;
        nav.style.visibility = "hidden";
    } else {
        let result = Hum.classList.contains('active');
        if(result){
            Hum.classList.remove('active');
        }
        nav.style.opacity = 1;
        nav.style.visibility = "visible";
    }
}
// gemを回す
gsap.to(".g-navi__mobile-gem", {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: "none"
});
// クリックでハンバーガーを開閉する
let Hum = document.querySelector('.g-navi__humburger');
Hum.addEventListener('click', ()=>{
    Hum.classList.toggle('active');
    HumBoolean();
});
function HumBoolean() {
    let result = Hum.classList.contains('active');
    if (result) {
        HumActive();
    } else {
        HumReverse();
    }
};
// メニューを開ける
function HumActive() {
    let tl = gsap.timeline();
    tl.addLabel("start", 0)
        .to(".g-navi__humburger--dot", {
        rotation: -90,
        opacity: 0,
        duration: 0.5
        }, "start")
        .addLabel("cross", 0.5)
        .fromTo(".g-navi__humburger--closs-top", {
            rotation: -90,
            x: -10,
            opacity: 0,
        }, {
            rotation: 0,
            x: 0,
            opacity: 1,
            duration: 0.5
        }, "cross")
        .fromTo(".g-navi__humburger--closs-bottom", {
            rotation: 90,
            x: 10,
            opacity: 0
        }, {
            rotation: 180,
            x: 0,
            opacity: 1,
            duration: 0.5
        }, "cross")
        .to(".g-navi__mobile-circle", {
            opacity: 1,
            width: "300vh",
            height: "300vh",
            top: "-100vh",
            right: "-100vh",
            duration: 1
        }, "start")
        .fromTo(".g-navi__mobile", {
            opacity: 0,
            visibility: "visible",
        },{
            opacity: 1,
            duration: 1
        }, "-=0.5")
        .to(".g-navi", {
            opacity: 1,
            visibility: "visible",
            duration:  1
        }, "-=0.5")
        .fromTo(".g-navi__mobile-menu", {
            right: "-50%",
            opacity: 0
        }, {
            right: 0,
            opacity: 0.5,
            duration: 2,
            ease: "slow"
        }, "-=1");
    return tl;
};
// メニューを戻す
function HumReverse() {
    let tl = gsap.timeline();
    tl.addLabel("start",0)
        .addLabel("cross", 0.5)
        .to(".g-navi__mobile-menu", {
            right: "-50%",
            opacity: 0,
            duration: 1,
            ease: "slow"
        }, "start")
        .to(".g-navi", {
            opacity: 0,
            visibility: "hidden",
            duration: 1
        }, "start")
        .to(".g-navi__mobile",{
            opacity: 0,
            visibility: "hidden",
            duration: 1
        },"start")
        .to(".g-navi__mobile-circle", {
            opacity: 0,
            width: "30px",
            height: "30px",
            top: "-15px",
            right: "-15px",
            duration: 0.5
        }, "start")
        .to(".g-navi__humburger--closs-top",  {
            rotation: -90,
            x: -10,
            opacity: 0,
            duration: 0.5
        }, "start")
        .to(".g-navi__humburger--closs-bottom", {
            rotation: 90,
            x: 10,
            opacity: 0,
            duration: 0.5
        }, "start")
        .fromTo(".g-navi__humburger--dot", {
            rotation: 90,
            opacity: 0,
        }, {
            rotation: 0,
            opacity: 1,
            duration: 0.5
            }, "cross");
        return tl;
}; 

function humNonActive() {
    naviMobile = document.querySelector('.g-navi__mobile');
    crossTop = document.querySelector('.g-navi__humburger--closs-top');
    crossBottom = document.querySelector('.g-navi__humburger--closs-bottom');
    navCircle = document.querySelector('..g-navi__mobile-circle');
    //全部隠す
    naviMobile.style.visibility = "hidden";
    crossTop.style.visibility = "hidden";
    crossBottom.style.visibility = "hidden";
    navCircle.style.visibility = "hidden";
};