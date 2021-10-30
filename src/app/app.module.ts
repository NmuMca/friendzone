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

@NgModule({
  declarations: [AppComponent,
UserRegistrationComponent,HomeComponent,UserComponent,NavbarComponent,TabsComponent, ProfileComponent],
 entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
