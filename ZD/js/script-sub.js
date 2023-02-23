$(document).ready(function(){
    // filter
    $('.texture-gnb ul li').click(function(){
        const num= $('.texture-gnb ul li').index($(this));
        $('.texture-gnb ul li').removeClass('active');
        $('.texture-box .texture-content').removeClass('active');

        $('.texture-gnb ul li:eq(' + num +')').addClass('active');
        $('.texture-box .texture-content:eq(' + num +')').addClass('active');
    });
    let num = 0.2;
        document.querySelectorAll('.aniview_card').forEach((el)=>{
        // 각 엘리먼트의 animation-delay를 0.5, 1.0, 1.5 ~ 차례로 준다.
        el.style.setProperty('animation-delay', `${num}s`);
        num += 0.2;
    })
});