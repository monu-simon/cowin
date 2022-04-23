import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Districts } from "../model/districts.model";
import { districtsOut } from "../model/districtsout.model";
import { Out } from "../model/out";
import { States } from "../model/states.model";
import { statesOut } from "../model/statesout.model";
import { vaccinatedOut } from "../model/vaccinatedout.model";
import { Vaccine } from "../model/vaccine.model";

@Injectable({
    providedIn: 'root'
})
export class IndiaCovidCases {

    constructor(private http: HttpClient) {
    }

    getStates(): Observable<statesOut> {
        const apiUrl = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
        return this.http.get<statesOut>(apiUrl, { observe: 'response' }).pipe(
            map(this.extractHttpData)
        )
    }
    getDistricts(id: string): Observable<districtsOut> {
        const url = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + id
        return this.http.get<districtsOut>(url, { observe: 'response' }).pipe(
            map(this.extractHttpData)
        )
    }
    getVaccineDetails(id: string, date: any): Observable<Out> {
        const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=" + id + "&date=" + date;
        return this.http.get<Out>(url)
    }
    getByPincode(id: string, date: string): Observable<Out> {
        const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + id + "&date=" + date;
        return this.http.get<Out>(url)

    }
    getDailyVaccinationDetails() {
        const url = "https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination";
        return this.http.get<any>(url)
    }
    getStateWiseVaccinatedDetails(stateId: string, districtId: string, date: any): Observable<any> {

        const url = "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=" + stateId + "&district_id=" + districtId + "&date=" + date
        console.log(url)
        return this.http.get<vaccinatedOut>(url)
    }
    extractHttpData(res: HttpResponse<any>) {
        if (res != null) {
            if (res.status === 302) {
                window.location.reload()
                return;
            }
            return res.body;
        }
        return null;
    }
}