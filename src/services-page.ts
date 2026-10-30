import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createServicesPage, initServicesPage } from './components/services-page'
import { createFooter } from './components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createServicesPage()}
  ${createFooter()}
`

initNavbar()
initServicesPage()