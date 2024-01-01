const x_icon = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('#menu');
x_icon.addEventListener('click', () => { mobile_menu.classList.toggle('hidden'); x_icon.classList.toggle('open') })
