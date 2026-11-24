import $ from 'jquery'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

function render(container) {
  const root = container ? $(container).find('#app') : $('#app')
  let count = 0

  root.html(`
    <main class="container">
      <h1>jQuery 子应用</h1>
    </main>
  `)

  root.find('.click-me').on('click', function () {
    count += 1
    $(this).text(`点击次数：${count}`)
  })
}

renderWithQiankun({
  bootstrap() {},
  mount(props) {
    render(props.container)
  },
  unmount() {
    $('.click-me').off('click')
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
