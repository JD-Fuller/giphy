import store from "../store.js";
import Gif from "../Models/Gif.js";

let apiKey = "OMFRoicT56uoKJ5rGI4b32wHgyTopGaU";

let _gifApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/"
});

let _sandbox = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jdfuller/gifs"
});

class GifService {
  constructor() {
    console.log("Hello from the service");
  }

  async getGifAsync() {
    let res = await _gifApi.get(
      `random?api_key=OMFRoicT56uoKJ5rGI4b32wHgyTopGaU&tag=&rating=G`
    );
    // let res = await _gifApi.get(`random?api_key=${apiKey}&tag=&rating=G`);
    console.log("This is right before I commit", store.State.gif);
    store.commit("gif", new Gif(res.data.data));
    console.log("This is right after I commit", store.State.gif);
  }

  async saveActiveGifAsync() {
    let activeGif = store.State.gif;
    console.log("this is the activeGiv", activeGif);
    debugger;
    let res = await _sandbox.post("", activeGif);
    console.log("from saveActiveGifAsync", res);
  }
}

const service = new GifService();
export default service;
