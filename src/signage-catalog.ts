import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createSignageCatalog, initSignageCatalog } from './components/signage-catalog'
import { createFooter } from './components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createSignageCatalog()}
  ${createFooter()}
`

initNavbar()
initSignageCatalog()
