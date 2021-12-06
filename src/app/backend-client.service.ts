import { Injectable } from '@angular/core';
import {webSocket} from 'rxjs/webSocket';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { retryWhen, delay, take } from 'rxjs/operators'
import { GantrySystem } from './gantry-system';

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {

  gantry: GantrySystem = {
    status: 0,
    errorStr: "",
    pendingCandyReq: false,
    connected: false,
    upTime: 0,
    availableCandies: [],
    processedCandies: 0
  }
  observableGantry: BehaviorSubject<GantrySystem>;
  REST_API = "http://192.168.0.110:34568/";

  requestable_state = {
    "reset" : 2,
    "shutdown" : 6,
    "maintenance" : 5,
    "waitPat" : 3,
    "autoconf" : 1
  }

 

  constructor(private http: HttpClient) { 
    this.observableGantry = new BehaviorSubject<GantrySystem>(this.gantry);
  }
  

  sendPostRequest(endpoint, body){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>((this.REST_API + endpoint), body, httpOptions )
     .pipe(
        catchError(err => {
          if (err.status != 0){
            console.log('Handling error locally and rethrowing it...', err);
            return throwError(err);
          }
          console.log('Handling error globally...', err);
          this.gantry.connected = false;
          this.observableGantry.next(this.gantry)
      })
    )
  }


  getCandy(candy){
    this.gantry.pendingCandyReq = true;
    this.sendPostRequest("candy/getCandy",{"id":candy}).subscribe(
      data => {
        this.gantry.pendingCandyReq = false;
        this.observableGantry.next(this.gantry)
      },
      error => {
        if(error.status == 404){
          alert("Candy isn't available anymore");
          this.updateStatus();
        }
      },
      () => {
        // 'onCompleted' callback.
      });
  }

  updateStatus(){
    this.sendPostRequest("gantry/getStatus", {})
    .subscribe(
    data => {
      this.gantry.connected = true;
      this.gantry.errorStr = data["errorMsg"];
      this.gantry.status = data["status"];
      this.gantry.upTime = data["uptime"];
      this.gantry.availableCandies = data["availableCandies"];
      this.gantry.processedCandies = data["processedCandies"];
      this.observableGantry.next(this.gantry)
      console.log(this.gantry)
    });
  }

  reqState(state:string){
    state = this.requestable_state[state];
    if(state){
      this.sendPostRequest("gantry/reqState", {"state":state})
      .subscribe(
      data => {
        this.gantry.connected = true;
        this.observableGantry.next(this.gantry)
        console.log(data)
      });
    }    
  }

  notConnected(status){
    console.log("Check connection", status)
    if(status ){

    }
  }
}