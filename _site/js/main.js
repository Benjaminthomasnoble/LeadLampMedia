// window.onscroll = function () { myFunction() };

// const navbar = document.getElementById("#navbar");
// const sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYoffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

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