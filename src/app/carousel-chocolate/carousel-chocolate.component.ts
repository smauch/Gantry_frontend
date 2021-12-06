import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-chocolate',
  templateUrl: './carousel-chocolate.component.html',
  styleUrls: ['./carousel-chocolate.component.scss']
})
export class CarouselChocolateComponent implements OnInit {
  counter = 0;
  timer: any;

  // Change: Bilder in assets anpassen und hier anpassen 
  // am besten Schokoladen-Bilder als zB rs_vollnuss abspeichern
  // get images from assets as array
  images = ['nusssplit', 'marzipan', 'nugat', 'knusperflakes', 'knusperkeks', 'vollmilch'].map((n) => {
    return {
      url: `assets/img/rs_${n}.png`,
      number: this.counter++
    }
  });

  constructor(private service: QuestionsService, private route: Router) {
  }

  ngOnInit() {
    this.timer = setTimeout(() => {
      this.route.navigate(['/home']);
    }, 120000);
  }

  backendCall(id: number) {
    clearTimeout(this.timer);
    this.service.chocolateNumber(id);
  }
}
