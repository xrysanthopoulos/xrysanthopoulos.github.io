$(document).ready(function() {
  //function window_width() {
  if ($(window).width() < 768) {
    $(".personal-info .p-info").insertAfter("#personal-img");
    $(".social").insertAfter(".p-info");
  } else {
    $(".col-md-4 p").insertAfter(".about h2");
  }
  //}
});
