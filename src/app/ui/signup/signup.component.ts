import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
@Component({
  selector: 'ci-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(public  afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value.username)
  }
  signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  signout() {
    this.afAuth.signOut();
  }

}
