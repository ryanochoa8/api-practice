import CharacterController from "./components/CharacterController.js";

class App {
  constructor() {
    this.controllers = {
      characterController: new CharacterController()
    }
  }
}

window["app"] = new App()