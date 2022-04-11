import style from './main.css'
import grid from './grid.js'
import clicks from './clicks.js'
import credits from './credits.js'

const main = document.querySelector('main')
main.append(grid())


const footer = document.querySelector('footer')
const creditTxt = document.createElement('span')
creditTxt.id = 'credits'
footer.appendChild(creditTxt)

clicks()
credits()
