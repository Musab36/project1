/*
$(document).ready(function() {
    //HOMEPAGE
    var count = 0;
    var images = ["co.jpg", "co2.jpg"];
    var image = $(".middiv");

    image.css("background-image", "url(" + images[count] + ")");
    setInterval(function() {
      image.fadeOut(300, function() {
        image.css("background-image", "url(" + images[count++] + ")");
        image.fadeIn(300);
      });
      if (count === images.length) {
        count = 0;
      }
    }, 10000);
});
*/
