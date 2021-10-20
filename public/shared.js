var toggleButton = document.getElementsByClassName('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(toggleButton);
console.dir(mobileNav);

toggleButton.addEventListener('click', function(e) {
    mobileNav.style.display = 'block';
    console.log(toggleButton);
});
