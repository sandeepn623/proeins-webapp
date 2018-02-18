import { Component } from '@angular/core';
import { ShoeService } from './shoes/shoe.service';

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <nav class='navbar navbar-default'>
        <div class='container-fluid'>
            <a class='navbar-brand'>{{pageTitle}}</a>
            <ul class='nav navbar-nav'>
                <li><a [routerLink]="['/welcome']">Home</a></li>
                <li><a [routerLink]="['/shoes']">Product List</a></li>
            </ul>
        </div>
    </nav>
    <div class='container'>
            <router-outlet></router-outlet>
    </div>
  </div>
  `,
  providers:[ ShoeService ]
})

export class AppComponent {
  pageTitle : string = 'Proeins Shoe Management';
}
