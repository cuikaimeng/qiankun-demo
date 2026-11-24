import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

function render(container) {
  const root = container || document
  let count = 0

  const button = root.querySelector('.click-me')
  const onClick = () => {
    count += 1
    button.textContent = `点击次数：${count}`
  }
  button?.addEventListener('click', onClick)
  return () => button?.removeEventListener('click', onClick)
}

let cleanup = null

renderWithQiankun({
  bootstrap() {},
  mount(props) {
    cleanup = render(props.container)
  },
  unmount() {
    cleanup?.()
    cleanup = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
