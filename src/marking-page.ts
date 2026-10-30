import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createMarkingPage, initMarkingPage } from './components/marking-page'
import { createFooter } from './components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createMarkingPage()}
  ${createFooter()}
`

initNavbar()
initMarkingPage()
