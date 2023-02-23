$(document).ready(function(){

    // portfolio
    $('.port .port-con').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnhover: true,
        speed: 600,
        autoplay: true,
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

    // package
    $(".pack-header").slick({
        arrows: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        pauseOnHover : false,
        draggable: false,
        autoplay: true,
        fade: true
    })

    $('.pack-con').slick({
        arrows: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        draggable: false,
        pauseOnHover : false,
        autoplay: true
    })

    // product-category
    var bullet = ['바스/타일', '도배', '도어','몰딩/마루'];
    var swiper = new Swiper(".swiper-container", {
        slidesPerView : 1,
        spaceBetween : 20, 
        touchRatio: 0,
        on: {
          init: function () {
              $(".swiper-slide").css("background-color", 'transparent');
          },
          slideChange: function () {
              var slider = this;
              if (swiper.activeIndex == 0) {
                $('#tab1').addClass('active');
                $('#tab2').removeClass('active');
                $('#tab3').removeClass('active');
                $('#tab4').removeClass('active');
              } 
              else if (swiper.activeIndex == 1) {
                $('#tab1').removeClass('active');
                $('#tab2').addClass('active');
                $('#tab3').removeClass('active');
                $('#tab4').removeClass('active');
              } 
              else if (swiper.activeIndex == 2) {
                $('#tab1').removeClass('active');
                $('#tab2').removeClass('active');
                $('#tab3').addClass('active');
                $('#tab4').removeClass('active');
              } 
              else if (swiper.activeIndex == 3) {
                $('#tab1').removeClass('active');
                $('#tab2').removeClass('active');
                $('#tab3').removeClass('active');
                $('#tab4').addClass('active');
              }
          }
        }
    });
    $('#tab1').click(function () {
        swiper.slideTo(0, 300, false);
    });
    $('#tab2').click(function () {
        swiper.slideTo(1, 300, false);
    });
    $('#tab3').click(function () {
        swiper.slideTo(2, 300, false);
    });
    $('#tab4').click(function () {
      swiper.slideTo(3, 300, false);
    });
     
    //full-page
    $(function(){
        $('#main').fullpage({
        //이동
        menu: '#full-page',
        lockAnchors: false,
        anchors:['sec1', 'sec2', 'sec3', 'sec4'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        responsiveWidth: 1240,
        });

    });
});