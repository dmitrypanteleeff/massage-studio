export const handleMobileMenu = () => {

    const btnMenu = document.querySelector('.btn__menu');

    const menu = document.querySelector('.mobile-menu');

    const htmlWindow = document.querySelector('html');

    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link-item');

    const toggleMobNav = (menu, btn) => {
        menu.classList.contains('active')
            ? closeMenu(menu, btn)
            : openMenu(menu, btn);
    }

    const closeMenu = (menu, btn) => {
        htmlWindow.classList.remove('active');
        menu.classList.remove('active');
        btn.classList.remove('active');
    }

    const openMenu = (menu, btn) => {
        htmlWindow.classList.add('active');
        menu.classList.add('active');
        btn.classList.add('active');
    }

    if (btnMenu) {
       btnMenu.addEventListener('click', () => toggleMobNav(menu, btnMenu));
    }


    if (mobileMenuLinks) {
        mobileMenuLinks.forEach(link => link.addEventListener('click', () => closeMenu(menu, btnMenu)));
    }
    

}