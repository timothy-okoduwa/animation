

// import simpleParallax from 'simple-parallax-js';


// var images = document.querySelectorAll('thumbnail');
// new simpleParallax(images,{
//   orientation: 'right',
//   overflow: true
// });

$('.img-parallax').each(function() {
  var $image = $(this);
  var $imageParent = $(this).parent();
  function parallaxImg () {
    var speed = $image.data('speed');
    var imageY = $imageParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = $imageParent.innerHeight();
    // The next pixel to show on screen      
    var winBottom = winY + winH;
    // If block is shown on screen
    if (winBottom > imageY && winY < imageY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imageY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Percentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    $image.css({ top: imgPercent + '%', transform: 'translate(-50%, -' + imgPercent + '%)' });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});