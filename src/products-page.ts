import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createProductsPage } from './components/products-page'
import { createFooter } from './components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createProductsPage()}
  ${createFooter()}
`

initNavbar()
