import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createSafetyCatalog, initSafetyCatalog } from './components/safety-catalog'
import { createFooter } from './components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createSafetyCatalog()}
  ${createFooter()}
`

initNavbar()
initSafetyCatalog()
