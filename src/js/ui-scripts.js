(function($){

  // ===== Scroll Slowly Down ====
  $(".scroll-down").click(function () {
    var buttonRef = $(this).attr("href");
    var scrollTop = $(buttonRef).offset().top;
    if ($(window).scrollTop() >= 50) {
      scrollTop -= $('#top-navbar').height();
    }

    $("html,body").animate({
        scrollTop: scrollTop},
        "slow");
  });

  // ===== Scroll Back to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {      // If page is scrolled more than 50px
      $("#return-to-top").fadeIn(200);    // Fade in the arrow
      $('#top-navbar').show();
    } else {
      $("#return-to-top").fadeOut(200);   // Else fade out the arrow
      $('#top-navbar').hide();
    }
  });

  $("#return-to-top").click(function() {    // When arrow is clicked
    $("body,html").animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });

  $('#hello-string').typeIt({
    strings: ['Hello! I\'m Trixie...',
              'I\'m a Programmer.',
              'Nice of you to drop by :)',
              'This is Trixie\'s Site of Wonders'],
    cursor: true,
    deleteSpeed: 100,
    deleteDelay: 2000,
    breakLines: false,
    autoStart: true,
    lifeLike: true,
  });

})(jQuery); // end of jQuery name space
