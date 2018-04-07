import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

import { Question } from '../../model/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:Question[];

  constructor(public dataService:DataService) { 
  }
  ngOnInit() {
    this.questions = this.dataService.getQuestion();
  }

  addQuestion(question:Question){
    // console.log(question);
    this.dataService.addQuestion(question);

  }

}