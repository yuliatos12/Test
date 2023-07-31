let slideNow = 1;
let slideCount = $('.slider-wrap').children().length;
let translateWidth = 0;

$(document).ready(function() {

    $('.next-btn').click(function() {
        nextSlide();
    });

    $('.prev-btn').click(function() {
        prevSlide();
    });

function nextSlide() {
    if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slider-wrap').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow);
        $('.slider-wrap').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
}
function prevSlide() {
    if (slideNow === 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.viewport').width() * (slideCount - 1);
        $('.slider-wrap').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow - 2);
        $('.slider-wrap').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
            
        });
        slideNow--;
    }
}
});

