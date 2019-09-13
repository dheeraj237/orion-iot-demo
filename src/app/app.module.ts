import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './devices/list/list.component';
import { ConnectedComponent } from './devices/connected/connected.component';
import { DiscoverComponent } from './devices/discover/discover.component';
import { AutoconnectComponent } from './home/help/autoconnect/autoconnect.component';
import { MarkdownDirective } from './core/diretives/markdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ConnectedComponent,
    DiscoverComponent,
    AutoconnectComponent,
    MarkdownDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
