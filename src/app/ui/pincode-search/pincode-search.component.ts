import { Component, OnInit } from '@angular/core';
import { Out } from 'src/app/model/out';
import { Vaccine } from 'src/app/model/vaccine.model';
import { IndiaCovidCases } from 'src/app/services/india-covid-cases.service';
import { DateService } from 'src/app/shared/date';

@Component({
  selector: 'ci-pincode-search',
  templateUrl: './pincode-search.component.html',
  styleUrls: ['./pincode-search.component.css']
})
export class PincodeSearchComponent implements OnInit {

  pin:any
  date:string=""
  flag:boolean=false
  showtableLogic:boolean=false
  showLoader:boolean=false;
  vaccineDetails:Vaccine[] | undefined
  constructor(private indiaService:IndiaCovidCases,private dateService:DateService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.pin)
    this.dateService.setDate(); 
    this.date=this.dateService.getDate();
    this.flag=true
    this.showtableLogic=true
    this.showLoader=true
    this.indiaService.getByPincode(this.pin,this.date).subscribe({
      next:vaccineDetails =>{
        console.log(vaccineDetails) 
        this.vaccineDetails=vaccineDetails.sessions
        this.showLoader=false
      }
    })
    
  }
}
