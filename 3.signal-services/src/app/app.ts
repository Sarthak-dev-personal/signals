import { Component, inject, signal } from '@angular/core';
import { QuestionPresenter } from './components/question-presenter/question-presenter';
import { Progress } from "./components/progress/progress";
import { Done } from "./components/done/done";
import { ExamService } from './services/exam.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestionPresenter, Progress, Done],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly store = inject(ExamService);

}