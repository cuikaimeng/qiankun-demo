import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import App from './App.vue'

let app = null

function render(container) {
  app = createApp(App)
  app.mount(container ? container.querySelector('#app') : document.getElementById('app'))
}

renderWithQiankun({
  bootstrap() {},
  mount(props) {
    render(props.container)
  },
  unmount() {
    app?.unmount()
    app = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
