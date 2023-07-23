import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'teste',
    loadChildren: () => import('./pages/teste/teste.module').then( m => m.TestePageModule)
  },
  {
    path: 'tabela',
    loadChildren: () => import('./pages/tabela/tabela.module').then( m => m.TabelaPageModule)
  },
  {
    path: 'infos',
    loadChildren: () => import('./pages/infos/infos.module').then( m => m.InfosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
