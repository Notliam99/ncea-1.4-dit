import './style.css'
import viteLogo from "./typescript.svg"
import navBar from './html/nav-all.html?raw'
import footer from './html/footer-all.html?raw'
import homeMain from './html/home-main.html?raw'
import heroBanner from './html/hero-banner.html?raw'

function HtmlDomConstruct(path: String) {
  // header content
  var navbar = navBar.replace("${viteLogo}", viteLogo)
  var headerDOMEL = [ heroBanner, navbar ]
  
  // main content
  var mainDOMEL = []
  if (path == "/") { 
    mainDOMEL.push(homeMain) 
  } else if (path == "/about") {
    mainDOMEL.push("<h1>hello</h1>")
  }
  
  // footer content
  var footerDOMEL = []
  footerDOMEL.push(footer)

  return {
    header: headerDOMEL.join(''),
    main: mainDOMEL.join(''),
    footer: footerDOMEL.join('')
  }
}

function navBarStick (navBar:HTMLDivElement) {
  const scrollWatch = document.createElement('div')
  
  scrollWatch.setAttribute("data-scroll-watcher", "")
  navBar.before(scrollWatch)

  const navWatch = new IntersectionObserver (
    (entries) => {
      navBar.classList.toggle("navbar-stick", !entries[0].isIntersecting)
    }
  )
  navWatch.observe(scrollWatch)
}

console.log(document.getElementById('#navBar'))
console.log(location.pathname)

document.addEventListener("DOMContentLoaded", () => {
  var htmlObject = HtmlDomConstruct(location.pathname)
  document.querySelector<HTMLDivElement>('header')!.innerHTML = htmlObject.header
  document.querySelector<HTMLDivElement>('main')!.innerHTML = htmlObject.main
  document.querySelector<HTMLDivElement>('footer')!.innerHTML = htmlObject.footer
  
  var navBar = document.querySelector<HTMLDivElement>('#navBar')
  if (navBar != null) { 
    navBarStick(navBar)
  }
})
