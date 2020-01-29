import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/containers/home/home.component';
import { BlogComponent } from './core/containers/blog/blog.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
},{
  path: 'blog',
  pathMatch: 'full',
  component: BlogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
