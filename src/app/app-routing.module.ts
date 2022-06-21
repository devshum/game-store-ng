import { GameDetailsComponent } from './module-game-details/components/game-details/game-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'games'
  },
  // {
  //   path: 'search/:game-search',
  //   { path: 'articles/:id', loadChildren: () => import('./module-game-details/game-details.module').then(m => m.GameDetailsModule) },
  // },
  { path: 'games', loadChildren: () => import('./module-games/games.module').then(m => m.GamesModule) },
  { path: 'articles/:id', loadChildren: () => import('./module-game-details/game-details.module').then(m => m.GameDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
