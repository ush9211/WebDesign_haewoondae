$(document).ready(function(){
    $('.gnb>li').hover(function(){
        $(this).find('.lnb>li').stop().toggle(300);
    },500);

    $(".slide > div:gt(0)").hide();

    setInterval(function() {
        $('.slide > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('.slide');
    },  3000);
});

