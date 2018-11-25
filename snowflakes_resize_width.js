$(document).ready(function() {
  var width = $(window).width();
  $(window).on('resize', function() {
    if ($(this).width() != width) {
      location.reload();
    }
  });
});
