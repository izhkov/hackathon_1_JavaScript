import { Module } from '@/core/module'
// import LOADING_GIF from '../../res/loading.gif'

const CATS_URL = 'https://api.thecatapi.com/v1/images/search'

export class CatImageModule extends Module {
  constructor(type, text) {
    super(type, text)
    const loaderDiv = this.#createLoader()
    const image = this.#createImg()

    document.body.append(loaderDiv, image)
    image.onload = function () {
      loaderDiv.classList.toggle('hidden')
      image.classList.toggle('hidden')
    }
    this.loaderDiv = loaderDiv
    this.image = image
  }

  #createImg() {
    const img = document.createElement('img')
    img.classList.add('catImages', 'hidden')
    img.style.borderRadius = '10px'

    return img
  }

  #createLoader() {
    const div = document.createElement('div')
    const span = document.createElement('span')
    span.className = 'loaderText'
    span.textContent = 'Загрузка вашего котика...'
    const loader = document.createElement('img')
    loader.src = '../../res/loading.gif'
    div.classList.add('hidden', 'loader')

    div.append(loader, span)

    return div
  }

  trigger() {
    this.image.classList.add('hidden')
    this.loaderDiv.classList.toggle('hidden')
    fetch(CATS_URL)
      .then((response) => response.json())
      .then((jsonData) => jsonData[0].url)
      .then((cat) => {
        this.image.src = cat
      })
  }
}
