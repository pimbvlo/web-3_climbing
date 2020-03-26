var navigationWidth = $("nav").width();
// var navigationHeight = $("nav").scrollTop();

// when a link is clicked, force the menu to reverse all the animations
$('nav ul li').on("click", burgerClicked);

var contentSections = ["#section-1", "#section-3", "#section-4", "#section-5", "#section-7", "#section-8"];
var st = $('#section-3').scrollTop();
console.log(st);
// listen for the window to resize and reset the nav width var
$(window).resize(function() {
    console.log(navigationWidth);
    navigationWidth = $("nav").width();
});

// $( window ).resize(function() {
//     console.log(navigationHeight);
//     navigationHeight = $(window).scrollTop();
// });
