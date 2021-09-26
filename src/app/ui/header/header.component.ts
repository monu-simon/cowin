import { Component, OnInit } from '@angular/core';
import { GetOtpService } from 'src/app/services/get-otp.service';

@Component({
  selector: 'ci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  welcome:string=""
  flag:boolean=false
  constructor(private getOtpService:GetOtpService) { }

  ngOnInit(): void {
    if(this.getOtpService.isLoggedIn()){
      this.welcome="Welcome Admin"
      this.flag=true
    }
  }

}
