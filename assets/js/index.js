const btn = document.querySelector('.header--btn');
const navBar = document.querySelector('.header__nav');

btn.addEventListener('click', () => {
    navBar.classList.toggle('actived');
})