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
        if (slideNow < slideCount) {
          translateWidth = -$('.viewport').width() * slideNow;
          $('.slider-wrap').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
          });
          slideNow++;
        } 
      }
    
      function prevSlide() {
        if (slideNow > 1) {
          slideNow--;
          translateWidth = -$('.viewport').width() * (slideNow - 1);
          $('.slider-wrap').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
          });
        
        }
      }

    const $menu = $('[data-menu]');
  const $openMenuBtn = $('[data-menu-open]');
  const $closeMenuBtn = $('[data-menu-close]');
  const $arrowNext = $('.next')
  
  $openMenuBtn.on('click', toggleMenu);
  $closeMenuBtn.on('click', toggleMenu);
  
  function toggleMenu() {
    $menu.toggleClass('is-hidden');
    if( !$menu.hasClass('is-hidden')) {
        $arrowNext.css({'z-index': '-1'})
    }
  }
  
});

