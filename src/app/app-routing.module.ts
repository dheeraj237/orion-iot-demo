import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './devices/discover/discover.component';
import { AutoconnectComponent } from './home/help/autoconnect/autoconnect.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'discover', component: DiscoverComponent },
    { path: 'autoconnect-guide', component: AutoconnectComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }