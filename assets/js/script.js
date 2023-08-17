let currentPanel = 1;
let totalPanels = 0;
let autoPlay = true;
let timePassed = 0;
let timeToChange = 3;

function autoAdvance() {
  if (timePassed == timeToChange) {
    timePassed = 0;
    if (currentPanel == totalPanels) {
      currentPanel = 0;
    }
    if (autoPlay == true) {
      $(
        ".marquee_nav a.marquee_nav_item:nth-child(" + (currentPanel + 1) + ")"
      ).trigger("click");
    }
  } else {
    timePassed += 1;
  }
  $(".timePassed").html("timePassed = " + timePassed);
  $(".autoPlay").html("autoPlay = " + autoPlay);
}

$(document).ready(function () {
  // debug

  $(".autoPlay").html("autoPlay = " + autoPlay);
  $(".timePassed").html("timePassed = " + timePassed);
  $(".timeToChange").html("timeToChange = " + timeToChange);
  $(".currentPanel").html("currentPanel = " + currentPanel);
  //
  setInterval(autoAdvance, 1000);

  $('.marquee_container').hover(
function() {
autoPlay = false;
$(this).removeClass('autoplay');
},
function(){
autoPlay = true;
timePassed = 0;
$(this).addClass('autoplay');
}
  );

  $("img.marquee_panel_photo").each(function (index) {
    const photoWidth = $(".marquee_container").width();
    const photoPosition = index * photoWidth;

    $(".marquee_photos").append(
      '<img class="marquee_photo" style="left:' +
        photoPosition +
        ';" src="' +
        $(this).attr("src") +
        '" alt="' +
        $(this).attr("alt") +
        '" width="1200" height="450"/>'
    );
    $(".marquee_photos").css("width", photoPosition + photoWidth);
  });

  $(".marquee_panels .marquee_panel").each(function (index) {
    $(".marquee_nav").append('<a class="marquee_nav_item"></a>');
    totalPanels = index + 1;
    $(".totalPanels").html("totalPanels = " + totalPanels);
  });

  $(".marquee_nav a.marquee_nav_item").click(function () {
    $(".marquee_nav a.marquee_nav_item").removeClass("selected");
    $(this).addClass("selected");

    const navClicked = $(this).index();
    const marqueeWidth = $(".marquee_container").width();
    const distanceToMove = marqueeWidth * -1;
    const newPhotoPosition = navClicked * distanceToMove + "px";

    currentPanel = navClicked + 1;
    $(".currentPanel").html("currentPanel = " + currentPanel);

    $(".marquee_photos").animate({ left: newPhotoPosition }, 1000);
  });

  $(".marquee_panels img").imgpreload(function () {
    initializeMarquee();
  });

  const $menu = $("[data-menu]");
  const $openMenuBtn = $("[data-menu-open]");
  const $closeMenuBtn = $("[data-menu-close]");
  const $arrowNext = $(".next");

  $openMenuBtn.on("click", toggleMenu);
  $closeMenuBtn.on("click", toggleMenu);

  function toggleMenu() {
    $menu.toggleClass("is-hidden");
  }
});

function initializeMarquee() {
  $(".marquee_nav a.marquee_nav_item:first").addClass("selected");
  $(".marquee_photos").fadeIn(500);
}
