import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  login(email, password): Observable<any> {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
    )
  }

  isAuthenticated(): Observable<any> {
    return this.user.pipe(map(user => user && user.uid !== undefined));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
