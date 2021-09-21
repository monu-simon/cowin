import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetOtpService } from 'src/app/services/get-otp.service';
import { StateService } from 'src/app/services/stae.service';

@Component({
  selector: 'ci-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  test:any
  benificiaryId:string=""
  tokenValue:any
  constructor(private state:StateService,
    private OtpService:GetOtpService
    ) { }

  ngOnInit(): void {
    this.state.token.subscribe(tokenValue=>{
      this.tokenValue=tokenValue
    })
  }
  onSubmit(userForm:NgForm){
    this.benificiaryId=userForm.value.benid
    this.OtpService.getCertificate(this.benificiaryId,this.tokenValue).subscribe(data=>{
      this.test=data
      console.log(data)
      console.log(this.test);
    })
  }
}
