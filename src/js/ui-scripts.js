(function($){

  // ===== Scroll Slowly Down ====
  $(".scroll-down").click(function () {
    var buttonRef = $(this).attr("href");
    console.log("HERE");
    $("html,body").animate({
        scrollTop: $(buttonRef).offset().top},
        "slow");
  });

  // ===== Scroll Back to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $("#return-to-top").fadeIn(200);    // Fade in the arrow
    } else {
      $("#return-to-top").fadeOut(200);   // Else fade out the arrow
    }
  });
  $("#return-to-top").click(function() {      // When arrow is clicked
    $("body,html").animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });

  // ==== Send email button ====
  $("#send-email-button").click(function() {
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var email = $("#email-address").val();
    var message = $("#message").val();

    // TODO
  });

})(jQuery); // end of jQuery name space
