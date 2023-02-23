$(function(){
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

  /* chart.js */
  const labels = [
    '2021',
    '2020',
    '2019',
    '2018'
  ];

  const data = {
    labels: labels,
    datasets: [
      {
      label: '매출액',
      backgroundColor: '#1468A4',
      borderColor: '#1468A4',
      data: [3953, 4088, 12035, 13049],
      borderWidth: 1
      },
      {
        label: '영업이익',
        backgroundColor: '#2153A1',
        borderColor: '#2153A1',
        data: [1952, 2211, 6800, 8200],  
      },
      {
        label: '당기순이익',
        backgroundColor: '#1DD6A4',
        borderColor: '#1DD6A4',
        data: [2357, 3415, 8000, 12000],  
      }
  ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      maxBarThickness: 50,
      responsive: true,
      animation: {
        animationScale: true
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 50,
            usePointStyle: true,
            pointStyle: 'circle',
            font: {
              size: '14px',
              family: 'Noto Sans KR',
              lineHeight: 1
            }
          }
        }
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );  
});