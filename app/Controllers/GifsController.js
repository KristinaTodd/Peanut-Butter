import GifsService from "../Services/GifsService.js";
import store from "../store.js";

//Private
function _draw() {
  let gifs = store.State.gifs;
  console.log(gifs);
}

//Public
export default class GifsController {
  constructor() {
    console.log("controller is working")
    store.subscribe("gifs", _draw);
  }
}
