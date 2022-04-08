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

// I need to make a grid four by five units
// the first and last column are small images, the upper center portion is taken
// up by an enlarged image.  
// need each image to grow slightly when hovered over
// and when clicked, it becomes the upper center, larger image
// so the images switch position when clicked...
// maybe just start with figuring out how to switch two images' positions??

// maybe switch image sources...?

function grid() {
    const grid = document.createElement('div')
    grid.id = 'grid'
    let imgA = document.createElement('img')
    imgA.src = birds
    imgA.id = 'imgA'
    let imgB = document.createElement('img')
    imgB.src = boardwalk
    imgB.id = 'imgB'
    let imgC = document.createElement('img')
    imgC.src = bridge
    imgC.id = 'imgC'
    let imgD = document.createElement('img')
    imgD.src = coast
    imgD.id = 'imgD'
    let imgE = document.createElement('img')
    imgE.src = island
    imgE.id = 'imgE'
    let imgF = document.createElement('img')
    imgF.src = jetty
    imgF.id = 'imgF'
    let imgG = document.createElement('img')
    imgG.src = lake
    imgG.id = 'imgG'
    let imgH = document.createElement('img')
    imgH.src = lavender
    imgH.id = 'imgH'
    let imgI = document.createElement('img')
    imgI.src = meadow
    imgI.id = 'imgI'
    let imgJ = document.createElement('img')
    imgJ.src = town
    imgJ.id = 'imgJ'
    let imgK = document.createElement('img')
    imgK.src = tree
    imgK.id = 'imgK'
    let imgL = document.createElement('img')
    imgL.src = waterfall
    imgL.id = 'imgL'

    grid.append(imgA,imgB,imgC,imgD,imgE,imgF,imgG,imgH,imgI,imgJ,imgK,imgL)
    return grid
}


export default grid
