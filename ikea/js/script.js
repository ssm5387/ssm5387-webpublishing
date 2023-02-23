$(document).ready(function(){

  /*
  // 이미지 클릭시 변경
  $('#btn').on({
    'click': function(){
      $('#mv').attr('src','./mv/mv2.mp4');
      $('#btn').css('display' ,'none');
    }
  });
  */

  //스크롤 커스텀
  $(window).on("load",function(){
    $(".product_list").mCustomScrollbar();
  });

  $(window).on("load",function(){
    $(".box_wrap").mCustomScrollbar({
      axis:"x",
      theme:"dark-3"
    });
  });

  $(window).on("load",function(){
    $(".frame3").mCustomScrollbar({
      theme:"dark-3"
    });
  });

  // 가이드 화면
  $(function () {
    setTimeout(() => {
      $('.guide').fadeOut();
    }, 5000);
  })
  $(document).on('click', '.guide .btn_g', function () {
    $('.guide').fadeOut(200)
  });
  // 인트로 화면 전환
  $(document).on('click', '#btn', function () {
    $('.intro_page').fadeOut(200)
  });

  // // 인트로 영상 전환
  // $('#btn').click(function(){
  //   setTimeout(function(){
  //     $('.intro_page2').fadeOut();
  //   },5000);
  // })
  
  //로고
  $(document).on('click', '.logo', function () {
    $('.nav_container').fadeOut(200)
  });
  $(document).on('click', '.logo', function () {
    $('.video_box1').fadeIn(200)
  });
  $(document).on('click', '.logo', function () {
    $('.prev').fadeOut(200)
  });

  //클릭시 prev버튼 생성
  $(document).on('click', '#btn', function () {
    $('.prev').css('display','block')
  })

  $(document).on('click', '.prev', function () {
    $('.lobby_video').fadeIn(200)
  })

  //인포메이션 슬라이드
  $(document).on('click', '.info1', function () {
    $('.infomation').slideToggle(0)
  })
  
  $(document).mouseup(function (e){
    if($(".infomation").has(e.target).length === 0){
      $(".infomation").hide();
    }
  });
  $(document).on('click', '.info_btn', function () {
    $('.infomation').fadeOut(200)
  })



  //로비 네비게이션
  $(document).on('click', '.lobby_video button', function () {
    $('.nav_container').fadeIn(200)
  })
  
  //로비 버튼 삭제
  $(document).on('click', '.lobby_video button', function () {
    $('.lobby_video button').css('display','none')
  })

  //서브페이지 제품 상세페이지
  $(document).on('click', '.txt_wrap1 img', function () {
    $('.item_box2').css('display','block')
  })
  $(document).on('click', '.txt_wrap2 img', function () {
    $('.item_box3').css('display','block')
  })
  $(document).on('click', '.txt_wrap3 img', function () {
    $('.item_box4').css('display','block')
  })
  $(document).on('click', '.txt_wrap4 img', function () {
    $('.item_box5').css('display','block')
  })
  $(document).on('click', '.txt_wrap5 img', function () {
    $('.item_box6').css('display','block')
  })
  $(document).on('click', '.txt_wrap6 img', function () {
    $('.item_box7').css('display','block')
  })
  $(document).on('click', '.txt_wrap7 img', function () {
    $('.item_box8').css('display','block')
  })
  $(document).on('click', '.txt_wrap8 img', function () {
    $('.item_box9').css('display','block')
  })
  $(document).on('click', '.txt_wrap9 img', function () {
    $('.item_box10').css('display','block')
  })
  $(document).on('click', '.txt_wrap10 img', function () {
    $('.item_box11').css('display','block')
  })
  // 클릭시 선택영역 밑줄
  // $('.item').click(function(){
  //   $(this).toggleClass('active');
  // })
  // $('.standard').click(function(){
  //   $(this).toggleClass('on');
  // })
  
  $(document).on('click', '.txt_wrap img', function () {
    $('.product_wrap').css('display','none')
  })
  $(document).on('click', '.x_button', function () {
    $('.item_box').fadeOut(200)
  });

  //모든 상품 리스트
  $('.all_product').mouseenter(function(){
    $('.product_list').stop().slideDown();
  });

  $('.all_product').mouseleave(function(){
    $('.product_list').stop().slideUp();
  });
  $('.product_list').mouseleave(function(){
    $('.product_list').stop().slideUp();
  });


  //브랜드 스토리 영상 출력
  // $('desc-container11').click(function (){
  //   $('.video').css('display','block')
  // });

  $('.video_b').click(function (){
    $('.video1').css('display','block')
  })
  $('.video_b2').click(function (){
    $('.video2').css('display','block')
  })
  $('.video_b3').click(function (){
    $('.video3').css('display','block')
  })
  $('.video_b4').click(function (){
    $('.video4').css('display','block')
  })
  $('.video_b5').click(function (){
    $('.video5').css('display','block')
  })
  $('.video_b6').click(function (){
    $('.video6').css('display','block')
  })
  
  $('.video1 .btn').click(function (){
    $('.video1').css('display','none')
  })
  $('.video2 .btn').click(function (){
    $('.video2').css('display','none')
  })
  $('.video3 .btn').click(function (){
    $('.video3').css('display','none')
  })
  $('.video4 .btn').click(function (){
    $('.video4').css('display','none')
  })
  $('.video5 .btn').click(function (){
    $('.video5').css('display','none')
  })
  $('.video6 .btn').click(function (){
    $('.video6').css('display','none')
  })
  
  // 브랜드스토리 액자 클릭시 팝업
  $('.frame').click(function (){
    $('.frame1').css('display','block')
  })
  $('.frame2').click(function (){
    $('.frame3').css('display','block')
  })

  $(document).mouseup(function (e){
    if($(".frame1 img").has(e.target).length === 0){
      $(".frame1").hide();
    }
  });
  $(document).mouseup(function (e){
    if($(".frame3 img").has(e.target).length === 0){
      $(".frame3").hide();
    }
  });
  ///////////////////////////////////////
});




