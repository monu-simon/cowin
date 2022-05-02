import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetails: any;
  loginStatus = new BehaviorSubject<boolean>(false);
  userName = new BehaviorSubject<string>('');
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  getCurrentUser(): any {
    this.afAuth.authState.subscribe(res => {
      if (res) {
        this.userDetails = res;
        this.router.navigate(['/userhome'])
        this.loginStatus.next(true);
        this.userName.next(this.userDetails.displayName);
      }
    })
    return this.userDetails
  }
  getCurrentUserFullDetails() {
    return this.userDetails;
  }
  signOut() {
    this.afAuth.signOut();
    this.loginStatus.next(false);
    this.userName.next('')
    this.userDetails = null;
  }

  getIsLoggerIn() {
    return this.loginStatus.asObservable();
  }

  getUserName() {
    return this.userName.asObservable();
  }
}
