import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FeedComponent } from './user/feed/feed.component';
import { PostmakerComponent } from './user/postmaker/postmaker.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SearchComponent } from './user/search/search.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'UserRegistration',component:UserRegistrationComponent},
  {path:'user',component:UserComponent,
    children:[
      {path:'feed',component:FeedComponent},
      {path:'profile',component:ProfileComponent},
      {path:'post',component:PostmakerComponent},
      {path:'search',component:SearchComponent},
    
    ]
  
  },
  {path:'userDetails/:id',component:UserDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
