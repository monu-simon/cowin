import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, of, Subject } from 'rxjs';
import { map, subscribeOn, switchAll } from 'rxjs/operators';
import { Districts } from 'src/app/model/districts.model';
import { States } from 'src/app/model/states.model';
import { Vaccinated } from 'src/app/model/vaccinated.model';
import { IndiaCovidCases } from 'src/app/services/india-covid-cases.service';
import { DateService } from 'src/app/shared/date';
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
  vaccinatedData!: Vaccinated;
  statevacinatedData!: Vaccinated;
  flag: boolean = false
  showloader: boolean = false

  constructor(private indiaCovidService: IndiaCovidCases, private currentDatee: VaccinatedDateService) {
    this.currentDatee.setDate();
    this.formatDate = this.currentDatee.getDate();
  }

  ngOnInit(): void {

    const name = ['monu', 'sonu', 'adarsh'];
    const name$ = from(name);
    const subject$=new Subject(); 
    subject$.next("Subject 1")
    subject$.subscribe(val=>{
      console.log(val)

    })
    
    subject$.next("Subject 2") 
    subject$.complete(); 

    const beh$=new BehaviorSubject("Beh Sub 1");
    beh$.next("Beh Sub 3") 
    beh$.subscribe((data)=>{
      console.log(data)
    })
    beh$.next("Beh Sub 2")
    name$.pipe(
      // map((data)=>{ data})
      map((data) => {
       // data = data + 'test'
        return this.getTest(data)
      }),switchAll()
    ).subscribe(data => {
     // data.subscribe(data=>{
       // console.log(data)
      //})
      console.log(data)
    })

    this.indiaCovidService.getDailyVaccinationDetails().subscribe(data => {
      this.vaccinationCount = data.count
    })

    this.indiaCovidService.getStates().subscribe({
      next: states => {
        this.states = states.states
      }
    }
    )

  }
  getTest(message:string){
    //return message+"Test"
    return of(message + 'Testttt')
  }
  getState(event: Event) {
    this.statecode = (event.target as HTMLInputElement).value;
    this.indiaCovidService.getStateWiseVaccinatedDetails(this.statecode, "", this.formatDate).subscribe(
      data => {
        console.log(data)
        this.statevacinatedData = data.topBlock.vaccination
      }
    )
  }
  getDistrict() {
    this.indiaCovidService.getDistricts(this.statecode).subscribe({
      next: districts => {
        console.log(districts)
        this.districts = districts.districts;
      }
    })
  }
  getDistrictCode(event: Event) {
    this.districtcode = (event.target as HTMLInputElement).value;
    this.flag = true
    this.showloader = true
    this.indiaCovidService.getStateWiseVaccinatedDetails(this.statecode, this.districtcode, this.formatDate).subscribe(
      data => {
        this.vaccinatedData = data.topBlock.vaccination
        this.showloader = false
      }
    )

  }

}
