import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetOtpService } from 'src/app/services/get-otp.service';

@Component({
  selector: 'ci-loginapp',
  templateUrl: './loginapp.component.html',
  styleUrls: ['./loginapp.component.css']
})
export class LoginappComponent implements OnInit {

  username!: string
  password!: string
  errorMessage = ""
  constructor(private getOtpService: GetOtpService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.getOtpService.login(this.username, this.password)) {
      this.router.navigate(['home'])
    }
    else{
      this.errorMessage="Enter valid credentials"
    }
  }
}
