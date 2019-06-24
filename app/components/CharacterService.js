


// @ts-ignore
const swapi = axios.create({
  baseURL: 'https:swapi.co/api/',
  timeout: 30000
});


let _state = {
  characters: []
}

let _subscribers = {
  characters: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}


export default class CharacterService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  getCharacters() {
    swapi.get('people').then(res => {
      console.log(res)
      setState("characters", res.data.results)
    })
      .catch(err => {
        console.error(err)
      })
    console.log("line after request")

  }

  getCharacter(id) {
    swapi.get("people/" + id).then(res => {
      console.log(res.data)
    })
  }


}