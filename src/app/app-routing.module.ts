import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FeedComponent } from './user/feed/feed.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'UserRegistration',component:UserRegistrationComponent},
<<<<<<< HEAD
  {path:'user',component:UserComponent,
  children: [
    {
      path: 'dashboard', // child route path
      component: FeedComponent, // child route component that the router renders
    },
  ]
  },
=======

  {path:'user',component:UserComponent},

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

>>>>>>> 5c184f26fa01e26d4b51b1d5c092bdd87188dc53
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
