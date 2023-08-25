import './style.css'
import viteLogo from "../public/vite.svg"
import navBar from './html/nav-all.html?raw'
import footer from './html/footer-all.html?raw'
import homeMain from './html/home-main.html?raw'

function HtmlDomConstruct(path: String) {
  // header content
  var navbar = navBar.replace("${viteLogo}", viteLogo)
  var headerDOMEL = [ navbar ]
  
  // main content
  var mainDOMEL = []
  if (path == "/") { 
    mainDOMEL.push(homeMain) 
  } else if (path == "/about") {
    mainDOMEL.push(navBar)
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

console.log(HtmlDomConstruct('/help'))
console.log(location.pathname)

document.addEventListener("DOMContentLoaded", () => {
  var htmlObject = HtmlDomConstruct(location.pathname)
  document.querySelector<HTMLDivElement>('header')!.innerHTML = htmlObject.header
  document.querySelector<HTMLDivElement>('main')!.innerHTML = htmlObject.main
  document.querySelector<HTMLDivElement>('footer')!.innerHTML = htmlObject.footer
})
