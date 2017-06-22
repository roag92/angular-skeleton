import { Component } from '@angular/core';

@Component({
  selector: 'ng-app',
  template: `
    <h1>{{title}}</h1>
    <p [innerHTML]="description"></p>
  `
})

export class AppComponent {
  title = 'Angular Skeleton';
  description = `It's a skeleton for <a href="https://angular.io" target="_blank">Angular</a>`;
}
