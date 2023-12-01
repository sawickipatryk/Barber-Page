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

    const carousel = document.querySelector('.carousel')
    const arrowBtns = document.querySelectorAll('.arrow')
    const firstCardWidth = carousel.querySelector('.card').offsetWidth
    const carouselChildren = [...carousel.children]

    let isDragging = false
    let startX = 0
    let startScrollLeft = 0

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

    carouselChildren.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
    })
    carouselChildren.slice(0, -cardPerView).forEach(card => {
        carousel.insertAdjacentHTML('beforeend', card.outerHTML)
    })

    arrowBtns.forEach(arrowBtn => {

        arrowBtn.addEventListener('click', () => {

            carousel.scrollLeft += arrowBtn.id === 'left' ? -firstCardWidth : firstCardWidth

        })

    })

    const startDrag = (e) => {
        isDragging = true
        carousel.classList.add('dragging')
        startX = e.pageX
        startScrollLeft = carousel.scrollLeft
    }

    const dragging = (e) => {
        if (!isDragging) return
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
    }

    const stopDrag = () => {
        isDragging = false
        carousel.classList.remove('dragging')
    }

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {

            carousel.classList.add('no-transition')
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth)
            carousel.classList.remove('no-transition')
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add('no-transition')
            carousel.scrollLeft = carousel.offsetWidth
            carousel.classList.remove('no-transition')
        }
    }

    carousel.addEventListener('mousemove', dragging)
    carousel.addEventListener('mousedown', startDrag)
    carousel.addEventListener('scroll', infiniteScroll)
    document.addEventListener('mouseup', stopDrag)

})()