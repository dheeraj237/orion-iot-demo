import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iotclient';

  constructor(
    public afAuth: AngularFireAuth,
    public auth: AuthService
  ) { }

}
