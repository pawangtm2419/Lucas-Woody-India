import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'watch', loadChildren: () => import('./watch/watch.module').then(m => m.WatchModule)},
  { path: 'accessories', loadChildren: () => import('./accessories/accessories.module').then(m => m.AccessoriesModule)},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
