import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { TabsComponent } from './user/tabs/tabs.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PostmakerComponent } from './user/postmaker/postmaker.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import { SearchComponent } from './user/search/search.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

@NgModule({
  declarations: [AppComponent,
  UserRegistrationComponent,
  HomeComponent,
  UserComponent,
  NavbarComponent,
  TabsComponent,
  ProfileComponent,
  PostmakerComponent,
  SearchComponent,
  UserDetailsComponent],
 entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},ImagePicker],
  bootstrap: [AppComponent],
})
export class AppModule {}
