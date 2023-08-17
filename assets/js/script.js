$(document).ready(function () {
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
  });

  $(".marquee_nav a.marquee_nav_item").click(function () {
    $(".marquee_nav a.marquee_nav_item").removeClass("selected");
    $(this).addClass("selected");

    const navClicked = $(this).index();
    const marqueeWidth = $(".marquee_container").width();
    const distanceToMove = marqueeWidth * -1;
    const newPhotoPosition = navClicked * distanceToMove + "px";

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
