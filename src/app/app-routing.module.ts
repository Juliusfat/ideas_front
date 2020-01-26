import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'idea', loadChildren: () => import('./components/idea/idea/idea.module').then(m => m.IdeaModule), canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./components/ideas/ideas.module').then(m => m.IdeasModule) },
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
