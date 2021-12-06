import { Component, OnInit } from '@angular/core';
import { BackendClientService } from '../backend-client.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  timeLeft: number = 10;
  diabledButton = true;
  nextCandyInterval;
  refreshInterval;;
  admin = false;

  constructor(public backend: BackendClientService) { }


  user = {
    name: "Admin",
    password: ""
  }

  ngOnInit() {
    this.backend.updateStatus();
    this.startTimer();
    if (this.backend.gantry.status > 1) {
      this.backend.reqState("waitPat");
    }
  }

  startTimer() {
    this.nextCandyInterval = setInterval(() => {
      if (this.backend.gantry.status > 1){
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          if(this.backend.gantry.connected){
            this.diabledButton = false;
          }
        }
      }
    }, 1000)
    
    this.refreshInterval = setInterval(() => {
      this.backend.updateStatus();
    }, 1000)
    
  }

  disableAdmin(){
    this.user.password = ""
    this.admin = false;
  }

  callShutdown(){
    this.backend.reqState("shutdown");
  }

  callInit(){
    this.backend.reqState("autoconf");
    this.backend.updateStatus();
  }

  callMaintenance(){
    this.backend.reqState("maintenance");
    this.backend.updateStatus();
  }

  resetMaintenance(){
    this.backend.reqState("reset");
    this.backend.updateStatus();
  }
 

  onSubmit() {
    if (this.user.password === "Gantry!"){
      this.admin = true;
      this.backend.updateStatus();
    }
    else{
      alert("Wrong password");
    }
  }

}
