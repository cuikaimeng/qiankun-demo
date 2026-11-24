import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container">
      <h1>Angular 子应用</h1>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      h1 {
        color: #dd0031;
      }
    `
  ]
})
export class AppComponent {
  count = 0
}
