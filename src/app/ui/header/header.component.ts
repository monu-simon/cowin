import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetOtpService } from 'src/app/services/get-otp.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  welcome:string=""
  flag:boolean=false
  user: any;
  loginStatus$ !: Observable<boolean>
  username$ !: Observable<string>
  constructor(private getOtpService:GetOtpService, private userService: UserService) { }

  ngOnInit(): void {
    this.loginStatus$ = this.userService.getIsLoggerIn();
    this.username$ = this.userService.getUserName();
   this.user = this.userService.getCurrentUserFullDetails();
  }

  signOut() {
    this.userService.signOut();
  }

}
