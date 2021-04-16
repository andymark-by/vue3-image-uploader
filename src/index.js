import './css/index.css'
import ImageUploader from './ImageUploader'

const install = (Vue) => {
  Vue.component(ImageUploader.name, ImageUploader)
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

ImageUploader.install = install

export default ImageUploader
