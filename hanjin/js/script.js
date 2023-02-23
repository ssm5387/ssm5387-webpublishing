$(function(){
  var options = {
    animateClass: 'animated',
    animateThreshold: 100,
    scrollPollInterval: 20
  }
  $('.aniview').AniView(options);

  $('.banner .slide-banner').slick({
    dots: true,
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'linear',
    autoplay: true
  });

  $(".gnb ul .hover").hover(function(){
    $('header').addClass('on');
    $(".gnb_bar").stop(true).slideDown();
    $(".gnb_bg").stop(true).slideDown();
  },function(){
    $('header').removeClass('on');
    $(".gnb_bar").stop(true).slideUp();
    $(".gnb_bg").stop(true).slideUp();
  });

  $(".gnb_btn").click(function(){
    $('header').addClass('on');
    $('.menu_bg').css( {'display' : 'block' } );
    $(".menu_bg").stop(true).animate({ right: '0'}, 700);
  });

  $(".menu_bg button").click(function(){
    $('header').removeClass('on');
    $('.menu_bg').css( {'display' : 'block' } );
    $(".menu_bg").stop(true).animate({ right: '-50%'}, 700);
  });

  $('.network-wrap .network-con').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.prevArrow'),
    nextArrow: $('.nextArrow'),
    adaptiveHeight: true,
    draggable: false,
    arrows : true, 
    responsive:[
      {
        breakpoint: 1240,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 767,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  });
});