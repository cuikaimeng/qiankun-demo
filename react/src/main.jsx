import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root = null

function render(container) {
  root = ReactDOM.createRoot(container)
  root.render(<BrowserRouter basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
    <App />
  </BrowserRouter>)
}

renderWithQiankun({
  bootstrap() {},
  mount(props) {
    render(props.container.querySelector('#root'))
  },
  unmount() {
    root?.unmount()
    root = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render(document.getElementById('root'))
}
