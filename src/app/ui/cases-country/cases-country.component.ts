import { Component, OnInit } from '@angular/core';
import { CountryDetails } from 'src/app/model/country-details.model';
import { Country } from 'src/app/model/country.model';
import { CovidDataApi } from 'src/app/services/covid-data-api.service';

@Component({
  selector: 'ci-cases-country',
  templateUrl: './cases-country.component.html',
  styleUrls: ['./cases-country.component.css']
})
export class CasesCountryComponent implements OnInit {

  countries:Country[]=[]; 
  country:string = "";
  recovered:string="";
  deaths:string="";
  confirmed:string="";
  flag:boolean=false; 
    
  
  constructor(private dataService:CovidDataApi) { }

  ngOnInit(): void {
    this.dataService.getCountries().subscribe((data)=>{
      this.countries=data;
      console.log(this.countries)
    })
  }

  getCovidData(){
    this.dataService.getCovidRealTime(this.country).subscribe((data)=>{
      console.log(data);
      this.flag=true;
      var index=data.length-1; 
      this.confirmed=data[index].Confirmed;
      this.recovered=data[index].Recovered;
      this.deaths=data[index].Deaths;
    })
  }

  getCountry(event:Event){
    this.country=(event.target as HTMLInputElement).value;
  }

}
