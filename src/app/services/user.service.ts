import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';


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
        this.router.navigate(['/userhome'])
        this.loginStatus.next(true)
        this.userDetails = res;
        localStorage.setItem('user', JSON.stringify(this.userDetails));
        this.userDetails = JSON.parse(localStorage.getItem('user')!);
        localStorage.setItem('name',this.userDetails.displayName);
        this.userName.next(localStorage.getItem('name')!);
      } else {
      }
    })
    return this.userDetails
  }

  signOut() {
    this.afAuth.signOut();
    this.loginStatus.next(false);
    localStorage.setItem('user', 'null');
    localStorage.clear();
    this.userName.next('')
  }

  getIsLoggerIn() {
    return this.loginStatus.asObservable();
  }

  getUserName() {
    return this.userName.asObservable();
  }
}
