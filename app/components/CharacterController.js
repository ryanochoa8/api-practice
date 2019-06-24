import CharacterService from "./CharacterService.js";


let _characterService = new CharacterService()


function drawCharacters() {
  // TODO make this draw on the page
}

export default class CharacterController {
  constructor() {
    _characterService.addSubscriber("characters", drawCharacters)
    _characterService.getCharacters()
    _characterService.getCharacter(2)
  }
}