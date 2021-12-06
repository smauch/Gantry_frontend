import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BackendClientService } from '../backend-client.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  timer: any;
  constructor(private route: Router, private backend: BackendClientService) { }

  ngOnInit() {
    // Change: wenn vom Backend ein ok zurück kommt, dass Schokolade ausgegeben wurde --> dann zu Home navigieren 
    // ODER 
    // Timer hier anpassen
    this.timer = setTimeout(() => {
      this.route.navigate(['/enjoy']);
      clearTimeout(this.timer);
    }, 30000);

    this.backend.observableGantry.subscribe(item => {
      if (!item.pendingCandyReq && this.route.isActive('/loading', true)) {
        this.route.navigate(['/enjoy']);
        clearTimeout(this.timer);
      }
    });
  }


}


