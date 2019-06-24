export default class Character {
  constructor(character) {
    this.name = character.name
    this.height = character.height
    this.mass = character.mass
    this.hair_color = character.hair_color
    this.skin_color = character.skin_color
  }

  get Template() {
    return `
    <div class="col-4>
      <ul>
        <li>Character Name: ${this.name}</li>
        <li>Height: ${this.height}</li>
        <li>Weight: ${this.mass}</li>
        <li>Hair Color: ${this.hair_color}</li>
        <li>Skin Color: ${this.skin_color}</li>
        `
  }
}