import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userDetails!: any
  constructor(private afAuth: AngularFireAuth) {

  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    const isAuthenticated = user? true: false;
    this.afAuth.authState.subscribe(res => {
      this.userDetails = res;
      console.log(this.userDetails)
    });
    if(!isAuthenticated) {
      alert('You must be authenticated to view the page.')
    }
    return isAuthenticated;
  }

}
