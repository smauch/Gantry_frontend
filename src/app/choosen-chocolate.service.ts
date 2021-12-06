import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoosenChocolateService {

  public choosenChocolate: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor() { }

  chooseChocolate(no: number) {
    this.choosenChocolate.next(no);
    console.log("choosen chocolate", no)
  }

  
  backendCall() {
    // this.http.post<number>(`URL`);
  }
}
