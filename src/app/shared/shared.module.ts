import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatToolbarModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class SharedModule { }
