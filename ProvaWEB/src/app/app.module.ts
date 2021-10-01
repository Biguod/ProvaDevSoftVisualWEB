import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Components/Automobile/create/create.component';
import { ListComponent } from './Components/Automobile/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,       
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
