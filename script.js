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

    const btns = document.querySelectorAll('.price-list__button')
    const items = document.querySelectorAll('.price-list__box')
    const itemsContainer = document.querySelector('.price-list__price-list-container')

    btns.forEach(btn => {

        btn.addEventListener('click', (e) => {

            btns.forEach(btn => btn.classList.remove('active'))

            const id = e.target.dataset.options.toLowerCase()
            let choices = [...items]

            btn.classList.add('active')

            if (id === 'all') {

                itemsContainer.innerHTML = ''
                choices.forEach(choice => itemsContainer.appendChild(choice))
            } else {
                itemsContainer.innerHTML = ''
                choices = choices.filter(choice => choice.getAttribute('data-options').toLowerCase().includes(id))
                choices.forEach(choice => itemsContainer.appendChild(choice))
            }

        })

    })
})()