import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetOtpService } from 'src/app/services/get-otp.service';
import { StateService } from 'src/app/services/stae.service';

@Component({
  selector: 'ci-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mobilenumber: number = 0
  txnId: any
  a: string = ""
  id: string = ""
  phone: string = ""
  name:string=""
  errorMessage: string = ""

  constructor(private otpService: GetOtpService, private route: Router, private state: StateService) { }

  ngOnInit(): void {
    console.log(this.phone)
  }
  onSubmit() {
    // console.log(userForm.value)
    // this.mobilenumber=userForm.value.no;
    // console.log(this.mobilenumber)
    // this.otpService.getOTP(this.mobilenumber).subscribe(data=>{
    //   this.txnId=data
    //   this.a =this.txnId.txnId;
    //   this.state.changeId(this.a) userForm:NgForm
    // })
    // this.route.navigate(['/otp',this.a])
    console.log(this.phone)
    this.otpService.getOTP(this.phone,this.name).subscribe(
      data => {
        this.txnId = data
        this.a = this.txnId.txnId;
        localStorage.setItem('txn', this.a)
        this.state.changeId(this.a)
        this.route.navigate(['/otp'])
      },
      err => {
        let status: number = err.status
        if (status == 500) {
          console.log("Error")
          this.errorMessage = "Enter a valid  mobile number"
        }

      }
    )
    //this.route.navigate(['/otp',this.a])
  }

}
