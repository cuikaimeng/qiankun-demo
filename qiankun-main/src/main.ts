import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
    {
        name: 'app-anguler',
        entry: 'http://127.0.0.1:8083',
        container: '#subapp',
        activeRule: '/app-anguler'
    },
    {
        name: 'app-html',
        entry: 'http://127.0.0.1:8086',
        container: '#subapp',
        activeRule: '/app-html'
    },
    {
        name: 'app-jquery',
        entry: 'http://127.0.0.1:8085',
        container: '#subapp',
        activeRule: '/app-jquery'
    },
    {
        name: 'app-react',
        entry: 'http://127.0.0.1:8084',
        container: '#subapp',
        activeRule: '/app-react'
    },
    {
        name: 'app-vue2',
        entry: 'http://127.0.0.1:8081',
        container: '#subapp',
        activeRule: '/app-vue2'
    },
    {
        name: 'app-vue3',
        entry: 'http://127.0.0.1:8082',
        container: '#subapp',
        activeRule: '/app-vue3'
    }
])

createApp(App).mount('#app')

// 等 Vue 渲染出 #subapp 容器后再启动 qiankun
start()
