import CharacterService from "./CharacterService.js";


let _characterService = new CharacterService()


function drawCharacters() {
  let characterElem = document.querySelector("#character")
  let template = ''
  let characters = _characterService.Characters
  characters.forEach(character => {
    template += character.Template
  })
  characterElem.innerHTML = template
}

export default class CharacterController {
  constructor() {
    _characterService.addSubscriber("characters", drawCharacters)
    _characterService.getCharacters()
    _characterService.getCharacter(1)
    drawCharacters()
  }

  addCharacter(e) {
    e.preventDefault()
    let form = e.target

  }
}