import './css/index.css'
import ImageUploader from './ImageUploader.vue'

declare global {
  interface Window { Vue: any; }
}

window.Vue = window.Vue || {};

const install = (Vue: any) => {
  Vue.component(ImageUploader.name, ImageUploader)
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

ImageUploader.install = install

export default ImageUploader
