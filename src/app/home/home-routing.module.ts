import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'home-screen', component: HomeScreenComponent },
  { path: 'test-screen', component: TestComponent },
  { path: '', redirectTo: 'home-screen', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
