import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './devices/discover/discover.component';
import { AutoconnectComponent } from './home/help/autoconnect/autoconnect.component';
import { LoginComponent } from './login/login.component';


import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'discover', component: DiscoverComponent, canActivate: [AuthGuard] },
    { path: 'autoconnect-guide', component: AutoconnectComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }