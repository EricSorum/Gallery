import birds from './images/birds.jpg'
import lake from './images/lake.jpg'
import boardwalk from './images/boardwalk.jpg'
import bridge from './images/bridge.jpg'
import coast from './images/coast.jpg'
import island from './images/island.jpg'
import jetty from './images/jetty.jpg'
import lavender from './images/lavender.jpg'
import meadow from './images/meadow.jpg'
import town from './images/town.jpg'
import tree from './images/tree.jpg'
import waterfall from './images/waterfall.jpg'

function grid() {
    const grid = document.createElement('div')
    grid.id = 'grid'
    let imgA = document.createElement('img')
    imgA.src = birds
    imgA.dataset.pic = 'birds'
    imgA.id = 'imgA'
    let imgB = document.createElement('img')
    imgB.src = boardwalk
    imgB.dataset.pic = 'boardwalk'
    imgB.id = 'imgB'
    let imgC = document.createElement('img')
    imgC.src = bridge
    imgC.dataset.pic = 'bridge'
    imgC.id = 'imgC'
    let imgD = document.createElement('img')
    imgD.src = coast
    imgD.dataset.pic = 'coast'
    imgD.id = 'imgD'
    let imgE = document.createElement('img')
    imgE.src = island
    imgE.dataset.pic = 'island'
    imgE.id = 'imgE'
    let imgF = document.createElement('img')
    imgF.src = jetty
    imgF.dataset.pic = 'jetty'
    imgF.id = 'imgF'
    let imgG = document.createElement('img')
    imgG.src = lake
    imgG.dataset.pic = 'lake'
    imgG.id = 'imgG'
    let imgH = document.createElement('img')
    imgH.src = lavender
    imgH.dataset.pic = 'lavender'
    imgH.id = 'imgH'
    let imgI = document.createElement('img')
    imgI.src = meadow
    imgI.dataset.pic = 'meadow'
    imgI.id = 'imgI'
    let imgJ = document.createElement('img')
    imgJ.src = town
    imgJ.dataset.pic = 'town'
    imgJ.id = 'imgJ'
    let imgK = document.createElement('img')
    imgK.src = tree
    imgK.dataset.pic = 'tree'
    imgK.id = 'imgK'
    let imgL = document.createElement('img')
    imgL.src = waterfall
    imgL.dataset.pic = 'waterfall'
    imgL.id = 'imgL'

    grid.append(imgA,imgB,imgC,imgD,imgE,imgF,imgG,imgH,imgI,imgJ,imgK,imgL)
    return grid
}


export default grid
