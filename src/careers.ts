import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createCareersPage, initCareersPage } from './components/careers-page'
import { createFooter } from './components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createCareersPage()}
  ${createFooter()}
`

initNavbar()
initCareersPage()
