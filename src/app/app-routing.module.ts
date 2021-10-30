import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FeedComponent } from './user/feed/feed.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'UserRegistration',component:UserRegistrationComponent},
  {path:'user',component:UserComponent,
  children:[
    {path:'feed',component:FeedComponent},
    {path:'profile',component:ProfileComponent},
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
