import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TestComponent } from './test/test.component';
import { UtilityModule } from '../utility/utility.module';



@NgModule({
  declarations: [HomeScreenComponent, TestComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UtilityModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
