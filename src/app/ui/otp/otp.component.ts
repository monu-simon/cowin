import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { GetOtpService } from 'src/app/services/get-otp.service';
import { StateService } from 'src/app/services/stae.service';

@Component({
  selector: 'ci-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  result: string = "";
  otp: string = "";
  hash256otp: any;
  ret: any
  token: any
  errorMessage = "";
  constructor(
    private stateService: StateService,
    private otpService: GetOtpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("From the OTP compoenet")
    this.stateService.id.subscribe(resutlt => {
      this.result = resutlt;
    })

    console.log(this.result)
  }
  onSubmit() {
    //userForm:NgForm
    //this.otp=userForm.value.otp;
    console.log(this.otp)
    this.hash256otp = sha256(this.otp);
    this.otpService.confirmOTP(this.result, this.hash256otp).subscribe(data => {
      this.ret = data
      console.log("--------------")
      console.log(data)
      this.token = this.ret.token;
      console.log(this.token);
      this.stateService.changeToken(this.token);
      this.router.navigate(['/certificate'])
    },
      err => {
        let status: number = err.status
        console.log(status)
        this.errorMessage = "Enter valid OTP"

      }
    )



  }

}
