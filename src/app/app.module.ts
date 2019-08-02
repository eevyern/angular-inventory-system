import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './modules/home/components/item-list/item-list.component';
import { ItemDetailsComponent } from './modules/home/components/item-details/item-details.component';
import { SignupFormComponent } from './modules/home/components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailsComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ItemListComponent },
      { path: 'items/:itemID', component: ItemDetailsComponent },
      { path: 'signup', component: SignupFormComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
