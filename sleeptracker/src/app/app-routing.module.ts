import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'log-overnight-sleep',
    loadChildren: () => import('./log-overnight-sleep/log-overnight-sleep.module').then( m => m.LogOvernightSleepPageModule)
  },
  {
    path: 'log-stanford-sleepiness',
    loadChildren: () => import('./log-stanford-sleepiness/log-stanford-sleepiness.module').then( m => m.LogStanfordSleepinessPageModule)
  },

  {
    path: 'view-overnight',
    loadChildren: () => import('./view-overnight/view-overnight.module').then( m => m.ViewOvernightPageModule)
  },  {
    path: 'view-stanford',
    loadChildren: () => import('./view-stanford/view-stanford.module').then( m => m.ViewStanfordPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
