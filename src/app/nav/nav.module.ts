import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav.component';
import { FaIconsComponent } from './fa-icons/fa-icons.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [
    FaIconsComponent,
    NavComponent],
  exports:[ NavComponent ]
})
export class NavModule { }