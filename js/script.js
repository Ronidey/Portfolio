const $window = $(window);

$window.on("load", function() {
  $(".status").fadeOut();
  $(".preloader").delay(300).fadeOut("slow");
})

$(function() {
  let $navMenu = $(".navbar-menu");

  $("#navBtn").on("click", function() {
    $navMenu.toggleClass("toggled");
  });

  $(".navbar-menu-link").on("click", function(e) {
    e.preventDefault();
    $navMenu.removeClass("toggled");

    let $hash = $(this.hash);

    if ($hash !== "") {
      $("html, body").animate({
        scrollTop: $hash.offset().top
      }, 700, "swing");
    }
  })

  $window.on("scroll", function() {
    let wScroll = $(this).scrollTop();

    $(".navbar-menu-link").each(function() {
      let $link = $(this);
      let sectionOffset = $(this.hash).offset().top;

      if ((sectionOffset - 20)  <= wScroll) {
        $link.parent().addClass("active");
        $link.parent().siblings().removeClass("active");
      }
    })
  })
});
