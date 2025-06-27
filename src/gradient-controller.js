import '../assets/scss/gradient-controller.scss';
// responsiveSVG
function updateViewBox() {
  let svg = document.getElementById("service-intro_svg");
  let width = window.innerWidth;
  let height = window.innerHeight;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
};

window.addEventListener('resize', updateViewBox);
updateViewBox();


let flowerRote = gsap.to('.svg-flower', {
  rotation : 360,
  duration : 10,
  repeat : -1,
  transformOrigin: '50% 50%',
  ease : 'none'
})

flowerRote.play();

let ribbon = gsap.to('.svg-ribbon ',{
  strokeDashoffset: 0,
  yoyo : true,
  repeatDelay: 0.5,
  repeat: -1,
  duration: 10,
  ease : 'none'
})

ribbon.play();

let butterflyFly = gsap.to('.svg-butterfly',{
  scaleX: 0.7,
  yoyo: true,
  repeat: -1,
  duration: 3,
  transformOrigin: '50% 50%',
  ease: 'none'
})

butterflyFly.play();

let heartScale = gsap.to('.svg-heart',{
  scale : 1.1,
  yoyo: true,
  repeat: -1,
  duration: 3,
  transformOrigin: '50% 50%',
  ease: 'none'
})

heartScale.play();

let roseBloom = gsap.timeline({
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