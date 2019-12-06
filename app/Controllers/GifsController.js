import service from "../Services/GifService.js";
import store from "../store.js";

//Private
function _drawGifs() {
  let gifs = store.State.gif;
  console.log("this is my store.state.gif", store.State.gif);
  document.getElementById("gif").innerHTML = gifs.Template;
}

//Public
export default class GifsController {
  constructor() {
    console.log("Hello from the controller");
    store.subscribe("gif", _drawGifs);
    service.getGifAsync();
    service.saveActiveGifAsync();
  }

  async saveActiveGifAsync() {
    try {
      await service.saveActiveGifAsync();
    } catch (error) {
      console.error(error);
    }
  }
}
