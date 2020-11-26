import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateDividersComponent } from './calculate-dividers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CalculateDividersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CalculateDividersModule { }
