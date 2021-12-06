import { Component, OnInit } from '@angular/core';
import { BackendClientService } from './backend-client.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dunkermotoren-messemodel';

  constructor(public backend: BackendClientService) { }

  ngOnInit() {
    this.backend.updateStatus();
  }

}
