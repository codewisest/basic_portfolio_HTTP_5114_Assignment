let hamburgerMenu = document.querySelector('.hamburger_menu');
let navModal = document.querySelector('.navigation_modal');
if(hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('slant');
        navModal.classList.toggle('show_modal');
        console.log('clicked')
    })}