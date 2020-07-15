import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';


const routes: Routes = [
  { path: '', redirectTo: 'home-screen', pathMatch: 'full' },
  { path: 'home-screen', component: HomeScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
