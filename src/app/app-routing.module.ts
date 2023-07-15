import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmeComponent } from './filme/filme.component';
import { NaveComponent } from './nave/nave.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'filme', component: FilmeComponent},
  {path:'nave',component:NaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
