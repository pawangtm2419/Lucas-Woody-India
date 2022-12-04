import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: WatchComponent }
]

@NgModule({
  declarations: [
    WatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WatchModule { }
