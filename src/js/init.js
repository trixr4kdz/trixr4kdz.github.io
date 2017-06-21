(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready

  // ===== Scroll Slowly Down ====
  $("#download-button").click(function () {
    var buttonRef = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(buttonRef).offset().top},
        'slow');
  });

  // ===== Scroll Back to Top ====
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });
})(jQuery); // end of jQuery name space
