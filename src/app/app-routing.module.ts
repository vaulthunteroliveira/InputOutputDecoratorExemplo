import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'parent' , component: ParentComponent },
  { path: 'child' , component: ChildComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
