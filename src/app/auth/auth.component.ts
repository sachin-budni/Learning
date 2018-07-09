import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { PhoneNumber } from './phonenumber';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email :string;
  password : string;
  mobileNum : number;
  otp:number;

  windowRef : any;
  phoneNum = new PhoneNumber();
  verificationCode: string;

  user: any;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.windowRef = this.authService.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }
  LogIn(){
    this.authService.signWithEmail(this.email,this.password);
  }
  googleLogIn(){
    this.authService.googleSign();
  }

  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNum.e164();
    console.log(num)
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }
}
