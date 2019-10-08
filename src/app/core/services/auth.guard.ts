import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { take, map, tap } from 'rxjs/operators';


import { ToastService } from '../components/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastService: ToastService
  ) { }

  canActivate(next, state): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('Access Denied to', state.url);
          // this.toastService.show('I am a standard toast');
          // this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
          this.toastService.show('Access Denied', { classname: 'bg-danger text-light toast-custom', delay: 50000 });
          this.router.navigate(['/login']);
        }
      })
    );
  }

}
