// $(function(){
//   // 슬릭
//   $('.sect01_list').slick({
//     autoplay: true,
//     infinite: true,
//     speed: 300,
//     fade: true,
//     cssEase: 'linear',
//     arrows: true
//   });
// })


$(function(){


// main_gnb
let win = $(window);

win.scroll(function(){
  let sec01 = $('.sec01').offset().top - 80;
  let gnb = $('#gnb');

  if (win.scrollTop() >= sec01) {
    console.log(sec01)
    $('#gnb').addClass('fixed')
  } else{
    $('#gnb').removeClass('fixed')
  }

  // let top = $(this).scrollTop();
  // let mv = $('.main-vs').offset().top;
  // console.log(mv)
  // if (top>0){
  //   $('.mv02').animate({left:'-50'},700)
  //   $('.mv05').animate({left:'-30'},700)
  //   $('.mv03').animate({left:'50'},700)
  //   $('.mv04').animate({left:'30'},700)
  //   $('.mv06').animate({left:'10'},700)
  //   $('.mv07').animate({top:'-20'},700)
  //   $('.mv08').animate({top:'-30'},700)
  //   $('.mv09').animate({top:'-30'},700)
  // } else if(top = 0) {
  //   $('.mv02').animate({left:'50'},700)
  // }

  // if (top > mv - 100){
  //   $('.mv02').animate({left:'-150'},700)
  //   $('.mv05').animate({left:'-50'},700)
  //   $('.mv03').animate({left:'100'},700)
  //   $('.mv04').animate({left:'50'},700)
  //   $('.mv06').animate({left:'30'},700)
  // }


})




  ///////////////////////////
})

$(function(){
  // gsap.from('.mv02',{
  //   scrollTrigger:{
  //     scrub: true
  //   },
  //   x: -50,
  // })

  // 섹션에 사용(화면에 나타날때 시작)
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.to(".mv02", {
  // scrollTrigger: ".mv02", x: -50, })




})
$(function(){
  if (window.matchMedia("screen and (min-width: 769px)").matches){
    // mv02
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".mv02", {
    scrollTrigger: {
      trigger: ".mv02",
      toggleActions: "resume pause reset pause",
      start: "center center",
      scrub: true,
    },
    x: -500, 
    });
  
    // mv03
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".mv03", {
    scrollTrigger: {
      trigger: ".mv03",
      toggleActions: "resume pause reset pause",
      start: "center center",
      scrub: true,
    },
    x: 800, 
    });
  
    // mv04
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".mv04", {
    scrollTrigger: {
      trigger: ".mv04",
      toggleActions: "resume pause reset pause",
      start: "center center",
      scrub: true,
    },
    x: 600, 
    });
  
    // mv05
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".mv05", {
    scrollTrigger: {
      trigger: ".mv05",
      toggleActions: "resume pause reset pause",
      start: "center center",
      scrub: true,
    },
    x: -300, 
    });
  
    // mv06
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".mv06", {
    scrollTrigger: {
      trigger: ".mv06",
      toggleActions: "resume pause reset pause",
      start: "center center",
      scrub: true,
    },
    x: 200, 
    });
  
    // mv07
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".mv07", {
    scrollTrigger: {
      trigger: ".mv07",
      toggleActions: "resume pause reset pause",
      start: "center center",
      scrub: true,
    },
    y: -10, 
    });
  
    // mv08
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".mv08", {
    scrollTrigger: {
      trigger: ".mv08",
      toggleActions: "resume pause reset pause",
      start: "center center",
      scrub: true,
    },
    y: -60, 
    });
      // mv09
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".mv09", {
      scrollTrigger: {
        trigger: ".mv09",
        toggleActions: "resume pause reset pause",
        start: "center center",
        scrub: true,
      },
      y: -200, 
      });
  
    // header h2
    var mvh2 = $('.main-vs h2')
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mvh2, {
    scrollTrigger: {
      trigger: mvh2,
      toggleActions: "resume pause reset pause",
      start: "bottom center",
      scrub: true,
    },
    y: -300, 
    });


       // sec01 list01
    var list01 = $('.list01')
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(list01, {
    scrollTrigger: {
      trigger: list01,
      toggleActions: "resume pause reset pause",
      start: "start center",
      scrub: true,
    },
    y: -600, 
    });

    // sec01 list02
    var list02 = $('.list02')
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(list02, {
    scrollTrigger: {
      trigger: list02,
      toggleActions: "resume pause reset pause",
      start: "start bottom",
      scrub: true,
    },
    y: 300, 
    });

    // sec01 list03
    var list03 = $('.list03')
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(list03, {
    scrollTrigger: {
      trigger: list03,
      toggleActions: "resume pause reset pause",
      start: "start bottom",
      scrub: true,
    },
    y: -400, 
    });

    // sec02 post01
    // var post01 = $('.sec02 .sec02_post01')
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(post01, {
    // scrollTrigger: {
    //   trigger: post01,
    //   toggleActions: "resume pause reset pause",
    //   start: "start bottom",
    //   scrub: true,
    // },
    // y: , 
    // });

    // sec02 post02
    var post02 = $('.sec02 .sec02_post02')
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(post02, {
    scrollTrigger: {
      trigger: post02,
      toggleActions: "resume pause reset pause",
      start: "start bottom",
      scrub: true,
    },
    y: -140, 
    });

    // sec02 post03
    var post03 = $('.sec02 .sec02_post03')
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(post03, {
    scrollTrigger: {
      trigger: post03,
      toggleActions: "resume pause reset pause",
      start: "start bottom",
      scrub: true,
    },
    y: -60, 
    });


  } else{
    $('.sec02_con').slick({
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false
    });
    $('.sec04_con').slick({
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false
    });

        // header h2
    var mvh2 = $('.main-vs h2')
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mvh2, {
    scrollTrigger: {
      trigger: mvh2,
      toggleActions: "resume pause reset pause",
      start: "bottom center",
      scrub: true,
    },
    y: -300, 
    });
  }

})


// 반응형 공통
$(function(){
      // sec02 bg txt
    var sce02bg = $('.sec02 b')
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sce02bg, {
    scrollTrigger: {
      trigger: sce02bg,
      toggleActions: "resume pause reset pause",
      start: "start bottom",
      scrub: true,
    },
    x: -200, 
    });
})

// 반응형 화면전환시 자동 새로고침
$(function(){
  var dwidth = jQuery(window).width();
  jQuery(window).bind('resize', function(e){
  
      var wwidth = jQuery(window).width();
  
      if(dwidth!==wwidth){
      dwidth = jQuery(window).width();
  
      if (window.RT) clearTimeout(window.RT);
      window.RT = setTimeout(function(){
          this.location.reload(false); /* false to get page from cache */
      }, 500);
  }
  });
})


$(function(){
  $('.hbg-gnb').click(function(){
    $('header .inner').animate({left:'0'});
  });
  
  $('.close').click(function(){
    $('.inner').animate({left:'100%'})
  })
});