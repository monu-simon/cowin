import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userDetails!: any
  constructor(private router: Router, private userService: UserService) {

  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if(this.userService.getCurrentUserFullDetails()) {
      console.log(this.userService.getCurrentUserFullDetails());
      return true;
    } else {console.log('Else')
      this.router.navigate(['access-denied'])
      return false
    }
  }

}
