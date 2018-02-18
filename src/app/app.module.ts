import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ShoeListComponent } from './shoes/shoe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { CreateShoeComponent } from './shoes/create-shoe.component';
import { EditShoeComponent } from './shoes/edit-shoe.component';
import { SearchShoeComponent } from './shoes/search-shoe.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoeListComponent,
    CreateShoeComponent,
    WelcomeComponent,
    EditShoeComponent,
    SearchShoeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'shoes', component: ShoeListComponent },
      { path: 'shoes/create', component: CreateShoeComponent },
      { path: 'shoes/edit/:id', component: EditShoeComponent },
      { path: 'shoes/search', component: SearchShoeComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
