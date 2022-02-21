class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li'
)
mobileNavbar.init()

/* abre e fecha menu */
/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
// const nav = document.querySelector('.nav-list')
// const menuMobile = document.querySelector('.mobile-menu')
// const menuLinks = document.querySelector('.nav-list li a')
// const toggle = document.querySelectorAll('nav .menu')

// for (const element of toggle) {
//   element.addEventListener('click', function () {
//     nav.classList.toggle('active')
//     menuMobile.classList.toggle('active')
//     animateLinks()
//   })
// }
/* quando clicar em um item do menu, esconder o menu */
// const links = document.querySelectorAll('.nav-list li a')

// Array.from(links).forEach(link => {
//   link.addEventListener('click', function () {
//     document.getElementsByClassName('nav-list').map()
//   })
// })

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
