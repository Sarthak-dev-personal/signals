import {
  computed,
  Injectable,
  signal,
  inject,
} from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import {
  BehaviorSubject,
  switchMap,
  tap,
} from 'rxjs';

import { ExamGeneratorService } from './exam-generator.service.ts';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  // Don't expose the original signals to the components.
  private readonly privateQuestions = signal<Question[]>([
    {
      caption: 'How much is 4 * 3',
      answers: ['4', '8', '12', '16'],
      correctAnswerIndex: 2,
    },
    {
      caption: 'How much is 5 + 5',
      answers: ['5', '10', '15', '20'],
      correctAnswerIndex: 1,
    },
    {
      caption: 'How much is 6 + 6',
      answers: ['6', '12', '18', '24'],
      correctAnswerIndex: 1,
    },
  ]);

  // Only readonly signals are exposed. The consuming components won't be able to edit them.
  public questions = this.privateQuestions.asReadonly();

  private readonly userAnswersIndices = signal<number[]>([]);

  public userAnswers = computed(() => this.userAnswersIndices().map<Answer>((answer, index) => {
    return {
      userAnswerIndex: answer,
      isCorrect: answer === this.questions()[index].correctAnswerIndex
    }
  }));

  private readonly privateIsBusy = signal<boolean>(false);

  public isBusy = this.privateIsBusy.asReadonly();

  public currentQuestionIndex = computed(() => this.userAnswers().length);

  public currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()]);

  public questionsCount = computed(() =>this.questions().length);

  public isQuizDone = computed(() => this.questionsCount() === this.userAnswers().length);

  public correctAnswers = computed(() => this.userAnswers().filter(answers => answers.isCorrect));

  public correctAnswersCount = computed(() => this.correctAnswers().length);

  private readonly generateExams$ = new BehaviorSubject<number>(1);

  public level = toSignal(this.generateExams$);

  public answerCurrentQuestion(answerIndex: number): void {
    this.userAnswersIndices.update(
      answers => {
        return [...answers, answerIndex];
      },
    );
  }

  public increaseLevel(): void {
    this.generateExams$.next(this.generateExams$.value + 1);
  }

  public decreaseLevel(): void {
    this.generateExams$.next(this.generateExams$.value - 1);
  }

  public resetLevel(): void {
    this.generateExams$.next(this.generateExams$.value);
  }

  constructor() {
    const generatorService = inject(ExamGeneratorService);

    this.generateExams$.pipe(
      tap(() => this.privateIsBusy.set(true)),
      switchMap(level => generatorService.generateQuiz(level)),
      tap(questions => {
        this.privateQuestions.set(questions);
        this.userAnswersIndices.set([]);
        this.privateIsBusy.set(false);
      })
    ).subscribe();
  }
}
