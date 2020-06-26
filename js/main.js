$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
});

$('.dropdown').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('dropdown-active');
});