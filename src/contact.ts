import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createContactPage, initContactPage } from './components/contact-page'
import { createFooter } from './components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createContactPage()}
  ${createFooter()}
`

initNavbar()
initContactPage()
