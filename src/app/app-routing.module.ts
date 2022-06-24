import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'games'
  },
  { path: 'games', loadChildren: () => import('./module-games/games.module').then(m => m.GamesModule) },
  { path: 'games/:game-search', loadChildren: () => import('./module-games/games.module').then(m => m.GamesModule) },
  { path: 'details/:id', loadChildren: () => import('./module-game-details/game-details.module').then(m => m.GameDetailsModule) },
  { path: '**',
    redirectTo: 'games'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
