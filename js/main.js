// Make it rain!!!


//when user clicks menu button or nav the menu displays
$('.button').on('click', function () {
  $('.grid').toggleClass('showMenu')
});

$('.nav a').on('click', function () {
  $('.grid').toggleClass('showMenu')
});


$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

$('.carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


//when user clicks close button, the menu closes
