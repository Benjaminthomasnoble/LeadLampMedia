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

window.addEventListener('scroll', function () {
    const shadeOne = document.querySelector('#shade1');
    let scrollPositionY = window.pageYOffset;
    let scrollPositionX = window.pageXOffset;

    shadeOne.style.transform = 'translateY(' + scrollPositionY * .4 + 'px)';
});