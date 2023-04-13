import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // TODO(jack): use external template when it is supported
  // templateUrl: './app.component.html'
  template: ` <h1>Hello {{ title }}!</h1> `,
})
export class AppComponent {
  title = 'rspack-ng';
}
