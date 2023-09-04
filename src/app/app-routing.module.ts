import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/start-page/start-page.component').then(c => c.StartPageComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.component').then(c => c.AuthComponent)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(c => c.BlogComponent)
  },
  {
    path: 'myBlog',
    loadComponent: () => import('./pages/my-blog/my-blog.component').then(c => c.MyBlogComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./pages/my-blog/create/create.component').then(c => c.CreateComponent)
  },
  {
    path: 'createCommunity',
    loadComponent: () => import('./pages/community/create-community/create-community.component').then(c => c.CreateCommunityComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
