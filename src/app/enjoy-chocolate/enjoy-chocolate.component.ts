import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enjoy-chocolate',
  templateUrl: './enjoy-chocolate.component.html',
  styleUrls: ['./enjoy-chocolate.component.scss']
})
export class EnjoyChocolateComponent implements OnInit {

  timer: any;
  constructor(private route: Router) { }

  ngOnInit() {
    this.timer = setTimeout(() => {
      this.route.navigate(['/home']);
      clearTimeout(this.timer);
    }, 15000);
  }
}
