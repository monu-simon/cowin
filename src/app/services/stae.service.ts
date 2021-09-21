import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class StateService{
    private idSource = new BehaviorSubject<string>("dfdf");
    id=this.idSource.asObservable()
    private tokenSource = new BehaviorSubject<string>("sdfdf");
    token=this.tokenSource.asObservable(); 

    constructor(){

    }
    changeId(id:string){
        console.log("changing")
        this.idSource.next(id);
    }
    changeToken(token:string){
        this.tokenSource.next(token);
    }

}