export default class Gif {
  constructor(data) {
    this.title = data.title;
    this.url = data.image_mp4_url || data.url;
  }

  get Template() {
    return `
    <div class="card" style="width:400px; text-align: center;">
              <video autoplay loop
                class="card-img-top"
                src="${this.url}"
                alt="gif image"></video>
              <div class="card-body">
                <h4 class="card-title" style="font-variant: all-small-caps;">${this.title}</h4>
                <button class="btn btn-primary" onclick="app.gifsController.saveActiveGifAsync()">Save GIF</button>
                <button class="btn btn-primary">New GIF</button>
              </div>
            </div>`;
  }
}
