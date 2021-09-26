import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { GetOtpService } from "./get-otp.service";

@Injectable({
    providedIn:'root'
})
export class RouteGuardService implements CanActivate{

    constructor(private getOtpService:GetOtpService,private router:Router){

    }
    canActivate():boolean{
        let result=true;
        if(this.getOtpService.isLoggedIn()){
            console.log("Worked")
            return true;
        }
        else{
            this.router.navigate(['/admin'])
            return false
            
        }

    }
}