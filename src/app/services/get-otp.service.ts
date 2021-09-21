import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class GetOtpService{
    constructor(private http:HttpClient){

    }

    getOTP(no:string,name:string){
        const url="https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";
        //const url="https://cdn-api.co-vin.in/api/v3/vaccination/generateOTP";
        const httpHeaders=new HttpHeaders();
        const body={mobile:no 
            // full_name:name
        }
        console.log(body)
        httpHeaders.append('Content-Type','application/json');
        return  this.http.post(url,body,{headers:httpHeaders});
    }
    confirmOTP(transactionId:string,hashotp:string){
        const url="https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP";
        //const url="https://cdn-api.co-vin.in/api/v3/vaccination/confirmOTP"
        const httpHeaders=new HttpHeaders();
        const body={
            otp:hashotp,
            txnId:transactionId
        }
        console.log(body)
        httpHeaders.append('Content-Type','application/json');
        return this.http.post(url,body,{headers:httpHeaders});

    }
    getCertificate(benid:string,token:any){
        
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
        //const url="https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id="+benid;
        const url="https://cdn-api.co-vin.in/api/v3/vaccination/status"
        return this.http.get(url, { headers:headers });
    }

}