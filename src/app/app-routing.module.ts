import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { AutoconnectComponent } from './home/help/autoconnect/autoconnect.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './devices/list/list.component'
import { DiscoverComponent } from './devices/discover/discover.component'


import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'devices', component: ListComponent, canActivate: [AuthGuard] },
    { path: 'discover', component: DiscoverComponent, canActivate: [AuthGuard] },
    { path: 'autoconnect-guide', component: AutoconnectComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }