$(document).ready(function(){



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// jQuery navbar animations

  $(".navbar-brand").hover(function(){
      $(this).filter(':not(:animated)').animate({ "font-size": "1.5em", "letter-spacing": "0.0625em" });
  }, function() {
      $(this).animate({ "font-size": "18px", "letter-spacing": "-0.0625em" });
  });
  $(".right-items a").hover(function(){
      $(this).filter(':not(:animated)').animate({ "font-size": "1.25em", "letter-spacing": "0.0625em" });
  }, function() {
      $(this).animate({ "font-size": "14px", "letter-spacing": "-0.0625em" });
  });










});




























