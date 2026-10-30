import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createAboutPage } from './components/about-page'
import { createFooter } from './components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createAboutPage()}
  ${createFooter()}
`

initNavbar()