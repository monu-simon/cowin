import { Component, OnInit } from '@angular/core';
import { Districts } from 'src/app/model/districts.model';
import { States } from 'src/app/model/states.model';
import { Vaccinated } from 'src/app/model/vaccinated.model';
import { vaccineName } from 'src/app/model/vaccineName.model';
import { IndiaCovidCases } from 'src/app/services/india-covid-cases.service';
import { VaccinatedDateService } from 'src/app/shared/vaccinatedDate';

@Component({
  selector: 'ci-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vaccinationCount!: number;
  statecode!: string;
  states!: States[];
  districts!: Districts[];
  districtcode: string = ""
  formatDate: any
  districtVaccinationStat!: Vaccinated;
  stateVaccinationStat!: Vaccinated;
  flag: boolean = false
  showloader: boolean = false
  todaysTitle!: string;
  todaysSubTitle!: string;
  covaxin!: string;
  covisheild!: string
  sputnik!: string;

  constructor(private indiaCovidService: IndiaCovidCases, private currentDatee: VaccinatedDateService) {
    this.currentDatee.setDate();
    this.formatDate = this.currentDatee.getDate();
  }

  ngOnInit(): void {

    this.getVaccinationInfo('', '');
    this.getDailyTotalVaccinationCount();
    this.getStatesName();

  }


  getDailyTotalVaccinationCount() {
    this.indiaCovidService.getDailyVaccinationCount().subscribe(data => {
      this.todaysTitle = 'Vaccination Count',
        this.todaysSubTitle = 'Vaccinations Administered Today'
      this.vaccinationCount = data.count;
    })
  }

  getStatesName() {
    this.indiaCovidService.getStates().subscribe({
      next: states => {
        this.states = states.states
      }
    }
    )
  }

  getVaccinationInfo(stateCode: string, districtCode: string) {
    this.indiaCovidService.getStateWiseVaccinatedDetails(stateCode, districtCode, this.formatDate).subscribe(
      res => {
        let vaccination: vaccineName = res.topBlock.vaccination;
        this.covaxin = vaccination.covaxin;
        this.covisheild = vaccination.covishield;
        this.sputnik = vaccination.sputnik
      }
    )
  }

  getStateVaccinationStat(event: any) {
    this.statecode = event.value;
    this.indiaCovidService.getStateWiseVaccinatedDetails(this.statecode, "", this.formatDate).subscribe(
      data => {
        this.stateVaccinationStat = data.topBlock.vaccination
      }
    )
  }
  getDistrict() {
    this.indiaCovidService.getDistricts(this.statecode).subscribe({
      next: districts => {
        this.districts = districts.districts;
      }
    })
  }

  getDistrictVaccinationStat(event: any) {
    this.districtcode = event.value;
    this.flag = true
    this.showloader = true
    this.indiaCovidService.getStateWiseVaccinatedDetails(this.statecode, this.districtcode, this.formatDate).subscribe(
      data => {
        this.districtVaccinationStat = data.topBlock.vaccination
        this.showloader = false
      }
    )
  }

}
