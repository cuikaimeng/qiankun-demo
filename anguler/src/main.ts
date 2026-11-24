import { bootstrapApplication } from '@angular/platform-browser'
import { ApplicationRef } from '@angular/core'
import { AppComponent } from './app/app.component'

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean
  }
}

let appRef: ApplicationRef | null = null

async function render() {
  if (!appRef) {
    appRef = await bootstrapApplication(AppComponent)
  }
}

export async function bootstrap() {}

export async function mount() {
  await render()
}

export async function unmount() {
  appRef?.destroy()
  appRef = null
}

if (!window.__POWERED_BY_QIANKUN__) {
  render().catch((error) => console.error(error))
}
