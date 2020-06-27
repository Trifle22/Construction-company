$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.hamburger-menu').toggleClass('hamburger-menu-active');

});
$('.close-menu-btn').on('click', function(e) {
    e.preventDefault;
    $('.hamburger-menu').removeClass('hamburger-menu-active');
    $('.menu-btn').removeClass('menu-btn_active');

})

$('.dropdown').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('dropdown-active');
});