import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators'
import { Country } from "../model/country.model";




@Injectable({
    providedIn: 'root'
})
export class WorldCovidDataApi {
    constructor(private http: HttpClient) {

    }

    getCountries(): Observable<Country[]> {
        const url = "https://api.covid19api.com/countries";
        return this.http.get<Country[]>(url, { observe: 'response' }).pipe(
            map(this.extractHttpData)
        )

    }
    getCovidRealTime(country: string): Observable<any> {
        const url = "https://api.covid19api.com/total/dayone/country/" + country
        return this.http.get<any>(url)
    }
    extractHttpData(res: HttpResponse<any>) {
        if (res != null) {
            if (res.status === 302) {
                window.location.reload();
                return;
            }
            return res.body;
        }
        return null;
    }
}