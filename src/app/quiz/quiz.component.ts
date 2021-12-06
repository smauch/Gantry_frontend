import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { IQuestions } from "../questions";
import { QuestionsService } from "../questions.service";
import { interval } from "rxjs";
import { timeout } from "rxjs/operators";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"],
})
export class QuizComponent implements OnInit {
  numQuestionsToAnswer = 3;
  questionsAnswers = [];
  questionsCounter = 0;
  progress = 0;
  showTrueFalse = false;
  nextQuestion = false;
  getChocolate = false;
  showAnswers = true;
  timer: any;
  nextQuestionTimer: any;

  constructor(private _dataService: QuestionsService, private route: Router) {}

  ngOnInit() {
    this._dataService.getQuestions().subscribe((data) => {
      for (var i = 0; i < this.numQuestionsToAnswer; i++) {
        var random = Math.floor(Math.random() * (data.length - i));
        this.questionsAnswers.push(data[random]);
        data.splice(random, 1);
      }
    });

    this.timer = setTimeout(() => {
      this.route.navigate(["/home"]);
    }, 30000);
  }

  pushedButton() {
    this.showAnswers = false;
    this.showTrueFalse = true;
    this.progress = this.progress + (100.0 / this.numQuestionsToAnswer);
    if (this.questionsCounter < (this.numQuestionsToAnswer -1)) {
      this.nextQuestion = true;
      this.nextQuestionTimer  = setTimeout(() => {
        this.nextQuestionMethod();
      }, 5000);
    }
    if (this.questionsCounter === (this.numQuestionsToAnswer -1)){
      this.getChocolate = true;
      this.nextQuestionTimer  = setTimeout(() => {
        this.serveChocolate();
      }, 5000);
    } 
  }

  nextQuestionMethod() {
    clearTimeout(this.nextQuestionTimer);
    clearTimeout(this.timer);
    this.showAnswers = true;
    this.showTrueFalse = false;
    this.nextQuestion = false;
    if (this.questionsCounter < this.numQuestionsToAnswer) this.questionsCounter++;
  }


  serveChocolate() {
    clearTimeout(this.nextQuestionTimer);
    clearTimeout(this.timer);
    this._dataService.serveReqChocolate();
  }
}
