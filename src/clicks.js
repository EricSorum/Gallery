import credits from "./credits"

const list = {
    birds: 'Image by <a href=\"https://pixabay.com/users/giani-1202/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=100367\">Giani Pralea</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=100367">Pixabay</a>',
    lake: 'Image by <a href="https://pixabay.com/users/jplenio-7645255/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3601004">jplenio</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3601004">Pixabay</a>',
    jetty: 'Image by <a href="https://pixabay.com/users/frankwinkler-64960/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=192990">Frank Winkler</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=192990">Pixabay</a>',
    tree: 'Image by <a href="https://pixabay.com/users/giani-1202/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=99852">Giani Pralea</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=99852">Pixabay</a>',
    meadow: 'Image by <a href="https://pixabay.com/users/nordseher-6327161/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6344387">Ingo Jakubke</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6344387">Pixabay</a>',
    coast: 'Image by <a href="https://pixabay.com/users/thanasispp-7223278/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6514351">Thanasis P.</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6514351">Pixabay</a>',
    waterfall: 'Image by <a href="https://pixabay.com/users/renegossner-10236719/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6473754">Rene Gossner</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6473754">Pixabay</a>',
    boardwalk: 'Image by <a href="https://pixabay.com/users/yangguangwu-23578224/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6796350">GuangWu YANG</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6796350">Pixabay</a>',
    wheat: 'Image by <a href="https://pixabay.com/users/picjumbo_com-2130229/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=865152">free stock photos from www.picjumbo.com</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=865152">Pixabay</a>',
    town: 'Image by <a href="https://pixabay.com/users/elg21-3764790/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6467851">ELG21</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6467851">Pixabay</a>',
    bridge: 'Image by <a href="https://pixabay.com/users/frankwinkler-64960/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=192982">Frank Winkler</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=192982">Pixabay</a>',
    island: 'Image by <a href="https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1285147">Pexels</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1285147">Pixabay</a>',
    lavender: 'Image by <a href="https://pixabay.com/users/rdlaw-10461825/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3764937">RD Law</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3764937">Pixabay</a>'
}


function clicks() {
    document.querySelectorAll('img').forEach(item => {
        item.addEventListener('click', event => {
            document.getElementById('imgB').id = event.target.id
            event.target.id = 'imgB'
            credits()            
        })
    })
}

export default clicks
