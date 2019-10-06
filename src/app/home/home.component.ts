import { Component, OnInit } from '@angular/core';


import { AuthService } from '../core/services/auth.service';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
