// scroll and pageup

$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});


$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr('href');
        $('html,body').animate({scrollTop:$(_href).offset().top+"px"});
        return false;
    });
});


