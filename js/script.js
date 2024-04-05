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


// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//       nav = document.getElementById(navId)

//     toggle.addEventListener('click', () => {
//       // Add show-menu class to nav menu
//       nav.classList.toggle('show-menu')

//       // Add show-icon to show and hide the menu icon
//       toggle.classList.toggle('show-icon')
//     })
//   }

//   showMenu('nav-toggle', 'nav-menu')











