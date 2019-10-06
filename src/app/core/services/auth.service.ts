import { Injectable } from '@angular/core';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../model/user.model';
import { Router } from '@angular/router';

import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.afAuth.auth.signInWithPopup(provider);
    console.log('credentials', credentials);
    return this.updateUserData(credentials.user);
  }

  async githubSignIn() {
    const provider = new auth.GithubAuthProvider();
    const credentials = await this.afAuth.auth.signInWithPopup(provider);
    console.log('credentials', credentials);
    return this.updateUserData(credentials.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/login']);
  }

  private updateUserData({ uid, email, displayName, photoURL }: User) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const accountid = uuid.v4();
    const data = {
      uid,
      accountid,
      email,
      displayName,
      photoURL
    };
    console.log('data', data)
    userRef.set(data, { merge: true });
    return this.router.navigate(['/home']);
  }

}
