import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExamSchedule } from './exam-schedule.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class ExamScheduleService {
  private readonly API_URL = 'assets/data/examSchedule.json';
  dataChange: BehaviorSubject<ExamSchedule[]> = new BehaviorSubject<
    ExamSchedule[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): ExamSchedule[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllExamSchedule(): void {
    this.httpClient.get<ExamSchedule[]>(this.API_URL).subscribe(
      (data) => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addExamSchedule(examSchedule: ExamSchedule): void {
    this.dialogData = examSchedule;
  }
  updateExamSchedule(examSchedule: ExamSchedule): void {
    this.dialogData = examSchedule;
  }
  deleteExamSchedule(id: number): void {
    console.log(id);
  }
}
