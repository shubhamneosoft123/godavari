import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GodavariComponent } from './godavari/godavari.component';

const routes: Routes = [
  {path:"godavari",component:GodavariComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
