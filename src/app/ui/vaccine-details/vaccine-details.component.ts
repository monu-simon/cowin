import { Component, OnInit } from '@angular/core';
import { Districts } from 'src/app/model/districts.model';
import { States } from 'src/app/model/states.model';
import { Vaccine } from 'src/app/model/vaccine.model';
import { IndiaCovidCases } from 'src/app/services/india-covid-cases.service';
import { DateService } from 'src/app/shared/date';

@Component({
  selector: 'ci-vaccine-details',
  templateUrl: './vaccine-details.component.html',
  styleUrls: ['./vaccine-details.component.css']
})
export class VaccineDetailsComponent implements OnInit {

  states!: States[];
  districts!: Districts[];
  logic: boolean = false;
  statecode!: string;
  districtcode!: string;
  formatDate: any
  vaccineDetails!: Vaccine[];
  showtableLogic: boolean = false;
  showLoader: boolean = false;
  constructor(private indiaCovidService: IndiaCovidCases, private currentDatee: DateService) {

  }

  ngOnInit(): void {
    this.indiaCovidService.getStates().subscribe({
      next: states => {
        this.states = states.states
      }
    }
    )
  }
  getDistrict() {
    this.indiaCovidService.getDistricts(this.statecode).subscribe({
      next: districts => {
        this.districts = districts.districts;
        this.logic = true;

      }
    })
  }
  getState(event: Event) {
    this.statecode = (event.target as HTMLInputElement).value;
  }
  getDistrictCode(event: Event) {
    this.districtcode = (event.target as HTMLInputElement).value;
    this.currentDatee.setDate();
    this.formatDate = this.currentDatee.getDate();
    this.showtableLogic = true;
    this.showLoader = true;
    this.indiaCovidService.getVaccineDetails(this.districtcode, this.formatDate).subscribe({
      next: vaccineDetails => {
        this.vaccineDetails = vaccineDetails.sessions
        this.showLoader = false;
      }
    })

  }
}
