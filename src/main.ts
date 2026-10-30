import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createHero, initHero } from './components/hero'
import { createStats } from './components/stats'
import { createAbout } from './components/about'
import { createServicesGrid } from './components/services-grid'
import { createPartners, initPartners } from './components/partners'
import { createFooter } from './components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createHero()}
  ${createStats()}
  ${createAbout()}
  ${createServicesGrid()}
  ${createPartners()}
  ${createFooter()}
`

initNavbar()
initHero()
initPartners()
