$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
// $('body').scrollspy({
//     target: '.navbar-fixed-top'
// })

// Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function () {
//     $('.navbar-toggle:visible').click();
// });



// Modal Portfolio Daha Fazla Button

function openModal() {
    var myModal = new bootstrap.Modal(document.getElementById('PModalAllReference'));
    myModal.show();
}









