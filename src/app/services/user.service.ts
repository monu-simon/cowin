import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetails: any;
  constructor(private afAuth: AngularFireAuth) { }

  getCurrentUser(): any {
    this.afAuth.authState.subscribe(res => {
      console.log(res);
      if (res) {
        this.userDetails = res;
        localStorage.setItem('user', JSON.stringify(this.userDetails));
        this.userDetails = JSON.parse(localStorage.getItem('user')!);
      } else {
      }
    })
    return this.userDetails
  }

  signOut() {
    this.afAuth.signOut();
    localStorage.setItem('user', 'null');

  }
}
