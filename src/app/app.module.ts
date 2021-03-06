import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { environment } from '../environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './devices/list/list.component';
import { ConnectedComponent } from './devices/connected/connected.component';
import { DiscoverComponent } from './devices/discover/discover.component';
import { AutoconnectComponent } from './home/help/autoconnect/autoconnect.component';
import { ToastComponent } from './core/components/toast/toast.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';


import { TimeagoModule } from 'ngx-timeago';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ConnectedComponent,
    DiscoverComponent,
    AutoconnectComponent,
    ToastComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    TimeagoModule.forRoot(),
    NgProgressModule.withConfig({
      spinner: false,
      thick: true,
      color: '#2780E3'
    }),
    NgProgressHttpModule,
    NgProgressRouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
