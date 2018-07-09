import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState :any;
  constructor(private authAf : AngularFireAuth) {
    this.authState = this.authAf.authState
   }

  googleSign(){
    this.authAf.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signWithEmail(email,password){
    // console.log(email)
    // console.log(password)
    this.authAf.auth.signInWithEmailAndPassword(email,password);
  }

  windowRef(){
    return window;
  }
}
