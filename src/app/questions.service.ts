import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IQuestions } from './questions';
import { BackendClientService} from './backend-client.service'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private _url: string = "assets/data/question.json";
  private numberOfChocolate: BehaviorSubject<number> = new BehaviorSubject(null);
  private reqChocolate: number;

  constructor(private http: HttpClient, private backend: BackendClientService) { }

  getQuestions(): Observable<IQuestions[]> {
    return this.http.get<IQuestions[]>(this._url);
  }

  chocolateNumber(id: number) {
    this.reqChocolate = id;
    this.numberOfChocolate.next(id);
  }

  // Change: hier den richtigen backendCall einfügen
    serveReqChocolate() {
      console.log("supposed chocolate", this.reqChocolate)
      this.backend.getCandy(this.reqChocolate)
  }


}
