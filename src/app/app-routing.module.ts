import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { ListeGamesComponent } from './liste-games/liste-games.component';

const routes: Routes = [
  {path:"liste",component:ListeGamesComponent},
  {path:"detail/:id",component:DetailComponent},
  {path:'', redirectTo:'liste', pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
