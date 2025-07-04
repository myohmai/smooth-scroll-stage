import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
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
  } from '/src/gradient-controller.js';
import '../assets/scss/gradient-controller.scss';

window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
    // responsiveSVG
    function updateViewBox() {
        let svg = document.getElementById("gradient-svg");
        let width = window.innerWidth;
        let height = window.innerHeight;
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
    };

    window.addEventListener('resize', updateViewBox);
    updateViewBox();

    function setScrollTriggers(){
        // Reset scrollTop and transforms before measuring scrollHeight
        document.querySelectorAll('.sss_description').forEach(el => el.scrollTop = 0);
        gsap.set('.smooth-scroll-stage', { clearProps: "all" });
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        

        setTimeout(() => {
        // descriptinの高さ
          let descriptionWrapper = document.querySelector('.sss_description-wrapper');
          let descriptionWrapperScrollHeight = descriptionWrapper.scrollHeight || 0;
          let descriptionWrapperHeight = descriptionWrapperScrollHeight - descriptionWrapper.clientHeight || 0;

          let description01 = document.querySelector('.sss_description--01');
          let description01ScrollHeight = description01.scrollHeight || 0;
          let description01Height = description01ScrollHeight - description01.clientHeight || 0;

          let description02 = document.querySelector('.sss_description--02');
          let description02ScrollHeight = description02.scrollHeight || 0;
          let description02Height = description02ScrollHeight - description02.clientHeight || 0;

          let description03 = document.querySelector('.sss_description--03');
          let description03ScrollHeight = description03.scrollHeight || 0;
          let description03Height = description03ScrollHeight - description03.clientHeight || 0;

          let description04 = document.querySelector('.sss_description--04');
          let description04ScrollHeight = description04.scrollHeight || 0;
          let description04Height = description04ScrollHeight - description04.clientHeight || 0;

          let description05 = document.querySelector('.sss_description--05');
          let description05ScrollHeight = description05.scrollHeight || 0;
          let description05Height = description05ScrollHeight - description05.clientHeight || 0;


        // section_wrapperのheightを指定
          const sectionWrapper = document.querySelector('.sss-wrapper');
          let sectionWrapperHeight =
            description01ScrollHeight +
            description02ScrollHeight +
            description03ScrollHeight +
            description04ScrollHeight +
            description05ScrollHeight +
            window.innerHeight;
          function setSectionHeight(){
          sectionWrapper.style.height = sectionWrapperHeight + 'px';
          }
          setSectionHeight();

        // タイトルのアニメーション
          gsap.registerEffect({
              name: 'titlein',
              extendTimeline: true,
              effect: (targets, config) => {
              let parent = targets[0];
              let en = parent.querySelector('.sss_title--en');
              let line = parent.querySelector('.sss_title--line');
              let ja = parent.querySelector('.sss_title--ja');

              let tl = gsap.timeline({
                          onStart: () => {
                      parent.style.display = "block";
                  },
                  duration: config.duration
              });

              tl.set(en, { x : '100%', opacity : 0})
                  .set(line, { x : '100%', opacity : 0 })
                  .set(ja, { x : '-100%', opacity : 0 })
                  .fromTo(parent, {
                  opacity: 0
                  },
                          {
                  opacity: 1,
                  duration: 1
                  })
                  .addLabel('titleIn')
                  .to(en, { x : 0, opacity : 1, duration : 1 }, 'titleIn')
                  .to(line, { x : 0, opacity : 1, duration : 1 }, 'titleIn')
                  .to(ja, { x : 0, opacity : 1, duration : 1 }, 'titleIn')

              return tl;
              }

          });

          gsap.registerEffect({
              name: 'titleout',
              extendTimeline: true,
              effect: (targets, config) => {
                  let parent = targets[0];
                  let en = parent.querySelector('.sss_title--en');
                  let line = parent.querySelector('.sss_title--line');
                  let ja = parent.querySelector('.sss_title--ja');

                  let tl = gsap.timeline({
                          onComplete: () => {
                      parent.style.display = "none";
                      },
                      duration: config.duration
                  });

              tl.addLabel('titleOut')
                  .to(en, { x : '-100%', opacity : 0, duration : 1 }, 'titleIn')
                  .to(line, { x : '-100%', opacity : 0, duration : 1 }, 'titleIn')
                  .to(ja, { x : '100%', opacity : 0, duration : 1 }, 'titleIn')
                  .to(parent, { opacity: 0 })

                  return tl;
                  }

              })

          // アイコンのアニメーション
          const sectionIcon = document.querySelectorAll('.sss_icon');
          const classList = [ "sss_icon--center", "sss_icon--right", "sss_icon--hidden-right", "sss_icon--hidden-left", "sss_icon--left" ];

          function iconAnime(direction) {
            let currentClasses = Array.from(sectionIcon).map( icon => classList.find(cls => icon.classList.contains(cls)));

            sectionIcon.forEach((icon, index) => {
              icon.classList.remove(currentClasses[index]);

              let newIndex;
              if (direction === "enter") {
                newIndex = (index + classList.length - 1) % classList.length;
                } else if (direction === "reverse") {
            newIndex = (index + 1) % classList.length; 
                          }
              icon.classList.add(currentClasses[newIndex]);
            });
          }

          // link-visible
          function showLink(index) {
            document.querySelectorAll('.sss_description--link').forEach(link => {
              link.classList.remove('active');
            });
            const targetLink = document.querySelector(`.sss_description--link-${index}`);
            if (targetLink) targetLink.classList.add('active');
          }

        let secWrap = document.querySelector('.sss-wrapper');
        let secWrapOffset = secWrap.getBoundingClientRect().top + window.scrollY;
      

          ScrollTrigger.create({
              id: 'wholeanim',
              trigger: '.sss-wrapper',
              start: 'top top',
              end: () => `+=${sectionWrapperHeight}`,
              pin: '.smooth-scroll-stage',
              pinSpacing: false,
              scrub: true,
              invalidateOnRefresh: true,
              onLeave: () => {
                ScrollTrigger.getById('wholeanim')?.disable();
              }
          });	

          // アニメーション01
        let animation01 = ScrollTrigger.create({
                id: 'anim',
                trigger: '.sss-wrapper',
                start: "top top",
                end: () => `+=${secWrapOffset}`,
                scrub: true,
                invalidateOnRefresh: true,
                onEnter: () => {
                  flowerIn().play();
                },
                onLeaveBack: () => {
                  flowerOut().play();
                }
          });
        
        let tl01 = gsap.timeline();
        tl01.fromTo('.sss_icon-wrapper',{
          opacity : 0,
          y : 20
        },{
          opacity : 1,
          y : 0,
          duration: 0.1,
          scrollTrigger :{
          trigger : animation01.trigger,
            start : animation01.start,
            end : animation01.end,
            scrub: true
        }
        })
        .fromTo('.sss_title-wrapper',{
          opacity : 0,
          y : 20
        },{
          opacity : 1,
          y : 0,
          duration: 0.1,
          scrollTrigger : {
          trigger : animation01.trigger,
            start : animation01.start,
            end : animation01.end,
            scrub: true,
            onEnter : ()=> {
              showLink(1);
              gsap.timeline()
              .titlein('.sss_title--01', { duration : 0.025 })
            }
        }
        }, 0.05)
        .fromTo('.sss_description--01',{
          opacity : 0,
          y : 20
        },{
          opacity : 1,
          y : 0,
          duration: 0.1,
          scrollTrigger :{
          trigger : animation01.trigger,
            start : animation01.start,
            end : animation01.end,
            scrub: true
        }
        }, 0.1)
        
          // アニメーション02
          let animation02 = ScrollTrigger.create({
            id: 'anim0101',
            trigger: '.sss-wrapper',
            start:`${animation01.end - secWrapOffset}px top` ,
            end: () => `+=${description01Height}`,
            scrub: true,
            invalidateOnRefresh: true,
            onEnterBack: ()=>{
              showLink(1);
              flowerIn().play();
            },
            onLeave: ()=>{
              flowerOut().play();
              gsap.timeline()
              .titleout('.sss_title--01', { duration : 0.025 })
            }
          });
        
        let tl02 = gsap.timeline();
        tl02.to('.sss_description--01', {
          scrollTo : description01Height ,
          scrollTrigger :{
          trigger : animation02.trigger,
            start : animation02.start,
            end : animation02.end,
            scrub: true
              }
        })
      
          // アニメーション03
          let animation03 = ScrollTrigger.create({
            id: 'anim0102',
            trigger: '.sss-wrapper',
            start: `${animation02.end - secWrapOffset}px top`,
            end: () => `+=${description01.clientHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
            onEnter: ()=>{
              showLink(2);
              gsap.timeline()
              .titlein('.sss_title--02', { duration : 0.025 });
              iconAnime('enter');
              stage2().play();
              ribbonIn().play();
            },
            onLeaveBack: ()=>{
              iconAnime('reverse');
              stage1().play();
              ribbonOut().play();
            }
          });
          
          let tl03 = gsap.timeline();
          tl03.to('.sss_description--01',{
            y : `-=${descriptionWrapper.clientHeight * 1.1 }`,
            opacity : 0,
            scrollTrigger :{
            trigger : animation03.trigger,
              start : animation03.start,
              end : animation03.end,
              scrub: true,
              }
          })
          .fromTo('.sss_description--02',{
            y : `+=${descriptionWrapper.clientHeight}`,
            opacity : 0
          },{
            y : 0,
            opacity : 1,
            scrollTrigger :{
            trigger : animation03.trigger,
              start : animation03.start,
              end : animation03.end,
              scrub: true,
              }
          })

          // アニメーション04
          let animation04 = ScrollTrigger.create({
            id: 'anim0201',
            trigger: '.sss-wrapper',
            start: `${animation03.end - secWrapOffset}px top`,
            end:() =>  `+=${description02Height}`,
            scrub: true, 
            invalidateOnRefresh: true,     
            onEnterBack: () => {
              showLink(2);
            },
            onLeave: ()=>{
              ribbonOut().play();
              gsap.timeline()
              .titleout('.sss_title--02', { duration : 0.025 });
            },
            onLeaveBack : ()=>{
              ribbonIn().play();
              gsap.timeline()
              .titleout('.sss_title--02', { duration : 0.025 })
              .titlein('.sss_title--01', { duration : 0.025 });
            }
          })
          let tl04 = gsap.timeline();
            tl04.to('.sss_description--02', {
              scrollTo : description02Height,
              scrollTrigger :{
              trigger : animation04.trigger,
                start : animation04.start,
                end : animation04.end,
                scrub: true
                  }
            })

          // アニメーション05
          let animation05 = ScrollTrigger.create({
            id: 'anim0202',
            trigger: '.sss-wrapper',
            start: `${animation04.end - secWrapOffset}px top`,
            end: () => `+=${description02.clientHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
            onEnter: ()=>{
              showLink(3);
              stage3().play();
              butterflyIn().play();
              gsap.timeline()
              .titlein('.sss_title--03', { duration : 0.025 });
              iconAnime('enter');
            },
            onLeaveBack: ()=>{
              stage2().play();
              butterflyOut().play();
              iconAnime('reverse');
            }
          })
          
          let tl05 = gsap.timeline();
          tl05.to('.sss_description--02',{
            y : `-=${descriptionWrapper.clientHeight * 1.1 }`,
            opacity : 0,
            scrollTrigger :{
            trigger : animation05.trigger,
              start : animation05.start,
              end : animation05.end,
              scrub: true,
              }
          })
          .fromTo('.sss_description--03',{
            y : `+=${descriptionWrapper.clientHeight}`,
            opacity : 0
          },{
            y : 0,
            opacity : 1,
            scrollTrigger :{
            trigger : animation05.trigger,
              start : animation05.start,
              end : animation05.end,
              scrub: true,
              }
          })

          // アニメーション06
          let animation06 = ScrollTrigger.create({
            id: 'anim0301',
            trigger: '.sss-wrapper',
            start: `${animation05.end - secWrapOffset}px top`,
            end:() =>  `+=${description03Height}`,
            scrub: true,
            invalidateOnRefresh: true,
            onEnterBack: () =>{
              showLink(3)
            },
            onLeave: ()=>{
              butterflyOut().play();
              gsap.timeline()
                .titleout('.sss_title--03', { duration : 0.025 })
            },
            onLeaveBack : ()=>{
              butterflyIn().play();
              gsap.timeline()
              .titleout('.sss_title--03', { duration : 0.025 })
              .titlein('.sss_title--02', { duration : 0.025 });
            }
          });
        
          let tl06 = gsap.timeline();
            tl06.to('.sss_description--03', {
              scrollTo : description03Height ,
              scrollTrigger :{
              trigger : animation06.trigger,
                start : animation06.start,
                end : animation06.end,
                scrub: true
                  }
            })

          // アニメーション07
          let animation07 = ScrollTrigger.create({
            id: 'anim0302',
            trigger: '.sss-wrapper',
            start: `${animation06.end - secWrapOffset}px top`,
            end: () => `+=${description03.clientHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
            onEnter: ()=>{
              showLink(4);
              stage4().play();
              heartIn().play();
              gsap.timeline()
              .titlein('.sss_title--04', { duration : 0.025 });
              iconAnime('enter');
            },
            onLeaveBack: ()=>{
              stage3().play();
              heartOut().play();
              iconAnime('reverse');
            }			
          })
          
            let tl07 = gsap.timeline();
          tl07.to('.sss_description--03',{
            y : `-=${descriptionWrapper.clientHeight * 1.1 }`,
            opacity : 0,
            scrollTrigger :{
            trigger : animation07.trigger,
              start : animation07.start,
              end : animation07.end,
              scrub: true,
              }
          })
          .fromTo('.sss_description--04',{
            y : `+=${descriptionWrapper.clientHeight}`,
            opacity : 0
          },{
            y : 0,
            opacity : 1,
            scrollTrigger :{
            trigger : animation07.trigger,
              start : animation07.start,
              end : animation07.end,
              scrub: true,
              }
          })

          // アニメーション08
          let animation08 = ScrollTrigger.create({
            id: 'anim0401',
            trigger: '.sss-wrapper',
            start: `${animation07.end - secWrapOffset}px top`,
            end: () => `+=${description04Height}`,
            scrub: true,
            invalidateOnRefresh: true,
            onEnterBack: () => {
              showLink(4);
            },
            onLeave: ()=>{
              heartOut().play();
              gsap.timeline()
                .titleout('.sss_title--04', { duration : 0.025 })
            },
            onLeaveBack : ()=>{
              heartIn().play();
              gsap.timeline()
              .titleout('.sss_title--04', { duration : 0.025 })
              .titlein('.sss_title--03', { duration : 0.025 });
            }
          })
          
          let tl08 = gsap.timeline();
            tl08.to('.sss_description--04', {
              scrollTo : description04Height ,
              scrollTrigger :{
              trigger : animation08.trigger,
                start : animation08.start,
                end : animation08.end,
                scrub: true
                  }
            })

          // アニメーション09
          let animation09 = ScrollTrigger.create({
            id: 'anim0402',
            trigger: '.sss-wrapper',
            start: `${animation08.end - secWrapOffset}px top`,
            end: () => `+=${description04.clientHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
            onEnter: ()=>{
              showLink(5);
              stage5().play();
              roseIn().play();
              gsap.timeline()
              .titlein('.sss_title--05', { duration : 0.025 });
              iconAnime('enter');
            },
            onLeaveBack: ()=>{
              stage4().play();
              roseOut().play();
              iconAnime('reverse');
            }
          })
          
          let tl09 = gsap.timeline();
            tl09.to('.sss_description--04',{
            y : `-=${descriptionWrapper.clientHeight * 1.1 }`,
            opacity : 0,
            scrollTrigger :{
            trigger : animation09.trigger,
              start : animation09.start,
              end : animation09.end,
              scrub: true,
              }
          })
          .fromTo('.sss_description--05',{
            y : `+=${descriptionWrapper.clientHeight}`,
            opacity : 0
          },{
            y : 0,
            opacity : 1,
            scrollTrigger :{
            trigger : animation09.trigger,
              start : animation09.start,
              end : animation09.end,
              scrub: true,
              }
          })

          // アニメーション10
          let animation10 = ScrollTrigger.create({
            id: 'anim0501',
            trigger: '.sss-wrapper',
            start: `${animation09.end - secWrapOffset}px top`,
            end: () => `+=${description05Height}`,
            scrub: true,
            invalidateOnRefresh: true,
            onLeaveBack : ()=>{
              gsap.timeline()
              .titleout('.sss_title--05', { duration : 0.025 })
              .titlein('.sss_title--04', { duration : 0.025 });
            }
          })
          let tl10 = gsap.timeline();
            tl10.to('.sss_description--05', {
              scrollTo : description05Height ,
              scrollTrigger :{
              trigger : animation10.trigger,
                start : animation10.start,
                end : animation10.end,
                scrub: true
                  }
            })

          // アニメーション11
          let animation11 = ScrollTrigger.create({
            id: 'anim0502',
            trigger: '.sss-wrapper',
            start: `${animation10.end - secWrapOffset}px top`,
            end: () => `+=${description05.clientHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
            onLeave: () => {
              roseOut().play();
            },
            onEnterBack: () => {
              roseIn().play();
              gsap.set('.smooth-scroll-stage', { y: 0 });
              ScrollTrigger.getById('wholeanim')?.enable();
              ScrollTrigger.refresh();
            }
          })
          let tl11 = gsap.timeline();
            tl11.to('.smooth-scroll-stage',{
            y : `-=${window.innerHeight}`,
            scrollTrigger :{
            trigger : animation11.trigger,
              start : animation11.start,
              end : animation11.end,
              scrub: 1
                } 			
          })
        }, 0);
    }
    // end of createScrollTrigger
    setScrollTriggers();

    ScrollTrigger.refresh();

    // リサイズ時に関数を再実行
    window.addEventListener('resize', () => {
        document.querySelectorAll('.sss_description').forEach(el => {
          el.scrollTop = 0;
        });
        
        gsap.set('.smooth-scroll-stage', { clearProps: "all" });
        gsap.set('.sss_description', { clearProps: "all" });
      ScrollTrigger.getById('wholeanim')?.kill();
      setScrollTriggers();
      ScrollTrigger.refresh(); // 新しい計算値を反映させるためにrefresh
    });

    });
