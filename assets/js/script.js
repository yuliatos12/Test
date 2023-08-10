// let slideNow = 1;
// let slideCount = $('.slider-wrap').children().length;
// let translateWidth = 0;

// $(document).ready(function() {

//     $('.next-btn').click(function() {
//         nextSlide();
//       });
    
//       $('.prev-btn').click(function() {
//         prevSlide();
//       });
    
//       function nextSlide() {
//         if (slideNow < slideCount) {
//           translateWidth = -$('.viewport').width() * slideNow;
//           $('.slider-wrap').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)'
//           });
//           slideNow++;
//         } 
//       }
    
//       function prevSlide() {
//         if (slideNow > 1) {
//           slideNow--;
//           translateWidth = -$('.viewport').width() * (slideNow - 1);
//           $('.slider-wrap').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)'
//           });
        
//         }
//       }

//     const $menu = $('[data-menu]');
//   const $openMenuBtn = $('[data-menu-open]');
//   const $closeMenuBtn = $('[data-menu-close]');
//   const $arrowNext = $('.next')
  
//   $openMenuBtn.on('click', toggleMenu);
//   $closeMenuBtn.on('click', toggleMenu);
  
//   function toggleMenu() {
//     $menu.toggleClass('is-hidden');
//     if( !$menu.hasClass('is-hidden')) {
//         $arrowNext.css({'z-index': '-1'})
//     }
//   }
  
// });

$(document).ready(function() {
  $('.marquee-panels .marquee-panel').each(function(index){
    $('.marquee-nav').append('<a class="marquee-nav-item"></a>');
  });
  
  $('img.marquee-panel-photo').each(function(index){
    let photoWidth = $('.marquee-container').width();
    let photoPosition = index * photoWidth;
    $('.marquee-photos').append('<img class="marquee-photo" style="left: ' + photoPosition + 'px; display: block;" src="' + $(this).attr('src') + '" alt="' + $(this).attr('alt') + '" width="1200" height="450" />');
    $('.marquee-photos').css('width', photoPosition + photoWidth);
  });

  $('.marquee-nav a.marquee-nav-item').click(function(){
    $('.marquee-nav a.marquee-nav-item').removeClass('selected');
    $(this).addClass('selected');

    let navClicked = $(this).index();
    let marqueeWidth = $('.marquee-container').width();
    let distanceToMove = marqueeWidth * (-1);
    let newPhotoPosition = navClicked * distanceToMove + 'px';

    $('.marquee-photos').animate({left: newPhotoPosition}, 1000);
  });
});