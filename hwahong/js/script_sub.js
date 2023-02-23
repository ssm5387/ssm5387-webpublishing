
// 브랜드스토리
$(function(){
  if (window.matchMedia("screen and (min-width: 767px)").matches){
      // article1
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".arti01", {
      scrollTrigger: {
        trigger: ".arti01",
        toggleActions: "resume pause reset pause",
        start: "bottom center",
        scrub: true,
      },
      y: -500, 
      });

      // article2
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".arti02", {
      scrollTrigger: {
        trigger: ".arti02",
        toggleActions: "resume pause reset pause",
        start: "start center",
        scrub: true,
      },
      y: -500, 
      });

      // article3
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".arti03", {
      scrollTrigger: {
        trigger: ".arti03",
        toggleActions: "resume pause reset pause",
        start: "start center",
        scrub: true,
      },
      y: -500, 
      });
  }
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

// 고객센터 첨부파일 커스텀
$(function(){
  $('#file').on('change', function(){
    var filename = $('#file').val();
    $('.upload-name').val(filename);
  })
})