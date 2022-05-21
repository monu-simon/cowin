import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country.model';
import { WorldCovidDataApi } from 'src/app/services/world-covid-data-api.service';

@Component({
  selector: 'ci-cases-country',
  templateUrl: './cases-country.component.html',
  styleUrls: ['./cases-country.component.css']
})
export class CasesCountryComponent implements OnInit {

  countries: Country[] = [];
  country: string = "";
  recovered: string = "";
  deaths: string = "";
  confirmed: string = "";
  flag: boolean = false;
  showLoader: boolean = false;


  constructor(private dataService: WorldCovidDataApi) { }

  ngOnInit(): void {
    this.dataService.getCountries().subscribe((data) => {
      this.countries = data;
    })
  }

  getCovidData() {
    this.showLoader = true;
    this.dataService.getCovidRealTime(this.country).subscribe((data) => {
      this.flag = true;
      var index = data.length - 1;
      this.confirmed = data[index].Confirmed;
      this.recovered = data[index].Recovered;
      this.deaths = data[index].Deaths;
      this.showLoader = false;
    })
  }

  getCountry(event: Event) {
    this.country = (event.target as HTMLInputElement).value;
  }

}
