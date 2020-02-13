export default class Gif {
  constructor(data) {
    this.title = data.title
    // this.url = data.url || data.image.original.url
  }

  get apiTemplate() {
    return this.title
  }

  get activeTemplate() {
    return this.title

  }

  get myTemplate() {
    return this.title
  }
}