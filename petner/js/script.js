$("document").ready(function () {
    // 산책지수
    $('.btn-more').click(function(){
        if($('#condition-more').hasClass('con-detail')){
            $('#condition-more').removeClass('con-detail');
            $(this).removeClass('open');
            $(this).addClass('close');
        }
        else{
            $('#condition-more').addClass('con-detail');
            $(this).addClass('open');
            $(this).removeClass('close');
        }
    })

    //미션 페이지
    $('#select-ani .animal-wrap div').click(function(){
        var tab_id = $(this).attr('data');

		$('#select-ani .animal-wrap div').removeClass('selected');
		$('#select-mis .mission-wrap').removeClass('current');

		$(this).addClass('selected');
		$("#"+ tab_id).addClass('current');
    });

    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 150,
      loop: true,
      centeredSlides : true,
      autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 1500, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
      },
      on: {
          init: function() {
              $('.swiper-slide').addClass('changed');
          },

          slideChangeTransitionStart: function() {
              // 기본적으로 제공하는 swiper-slide-active 클래스를 이용해
              // css transition 애니메이션 작성 가능하다.
              // 다만 루프 모드일 때에는 루프 픽스를 하며 slide를 바꿔치기를 하는데,
              // 이 때 플리커링이 발생할 수 있다.
              // css transition을 서로 다르게 설정한 changed, changing 클래스를 이용
              $('.swiper-slide').addClass('changing');
              $('.swiper-slide').removeClass('changed');
          },

          slideChangeTransitionEnd: function() {
              // changing : transition O
              // changed : transition X
              $('.swiper-slide').removeClass('changing');
              $('.swiper-slide').addClass('changed');
          }
      },
  });
});