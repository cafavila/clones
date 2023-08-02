import characterData from './data.js'
import Character from './Character.js'

document.getElementById('attack-button').addEventListener('click', function() {
    console.log('Art Attack!!')
})

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()