import { ListComponent } from './Components/Automobile/list/list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from "./Components/Automobile/create/create.component"


const routes: Routes = [
  { path: "automobile/create", component: CreateComponent },
  { path: "", component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
