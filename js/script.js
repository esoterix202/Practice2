$(document).ready(function () {
    //TOGGLING MOB NAV
    let mobileIcon = $('.bottom-header__mob-icon');
    let mobMenu = $('.bottom-header__mob-menu');

    mobileIcon.on('click', function () {
        $(mobMenu).slideToggle();
    });

    //COLLAPSIBLE LISTS
    let listLevel1 = $('.mob-menu__list1>li>a');
    let listLevel2 = $('.mob-menu__list2>li>a');
    let sidebarList1 = $('.sidebar-cascade__level1>li>a');

    listLevel1.on('click', function () {
        $(this).next().slideToggle();
    });

    listLevel2.on('click', function () {
        $(this).next().slideToggle();
    });

    sidebarList1.on('click', function () {
        $(this).next().slideToggle();
    });

    listLevel1.on('click', function () {
        $('.mob-menu__list1>li>span').toggleClass('transformMobIcon');
    });

    //ACCORDION TOGGLE
    $('.text-block__accordion>span').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('transformAccIcon');
    });

    //SLICK
    $('.slider').slick({
        arrows: true,
        speed: 1200,
        adaptiveHeight: true
    });
});