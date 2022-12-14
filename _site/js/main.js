
const shadeOne = document.querySelector('#shade1');
const shadeTwo = document.querySelector('#shade2');
const shapeOne = document.querySelector('#shape1');
const shapeTwo = document.querySelector('#shape2');
const shapeThree = document.querySelector('#shape3');

window.addEventListener('scroll', function () {
    // let scrollPositionY = window.pageYOffset;
    let scrollPositionX = window.pageYOffset;

    shadeOne.style.transform = 'translateX(' + scrollPositionX * -.4 + 'px)';
    shadeTwo.style.transform = 'translateX(' + scrollPositionX * .4 + 'px)';
    shapeOne.style.transform = 'translateX(' + scrollPositionX * -.5 + 'px)' + 'translateY(' + scrollPositionX * -.5 + 'px)';
    shapeTwo.style.transform = 'translateX(' + scrollPositionX * .4 + 'px)' + 'translateY(' + scrollPositionX * .7 + 'px)';
    shapeThree.style.transform = 'translateX(' + scrollPositionX * -.5 + 'px)';

});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

};

menu.addEventListener('click', mobileMenu);

