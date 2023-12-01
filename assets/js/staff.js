const app = (function () {
    const navLinks = document.querySelector('.nav__links')
    const toggleMenu = document.querySelector('.toggle__menu')

    toggleMenu.addEventListener('click', () => {
        if (!navLinks.classList.contains('active')) {
            navLinks.classList.add('active')
            return
        }
        navLinks.classList.remove('active')
    })

    const navItemParent = document.querySelector('.nav__item--parent')
    const navSublist = document.querySelector('.nav__sublist')

    navItemParent.addEventListener('click', () => {
        if (window.innerWidth > 1200) return
        if (!navSublist.classList.contains('active')) {
            navSublist.classList.add('active')
            return
        }
        navSublist.classList.remove('active')
    })
})()