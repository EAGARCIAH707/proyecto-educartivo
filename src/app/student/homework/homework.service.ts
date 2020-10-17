import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Homework } from './homework.modal';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HomeworkService {
  private readonly API_URL = 'assets/data/stdHomework.json';

  dataChange: BehaviorSubject<Homework[]> = new BehaviorSubject<Homework[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) {}

  get data(): Homework[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): Observable<Homework[]> {
    return this.httpClient.get<Homework[]>(this.API_URL);
  }

  // DEMO ONLY, you can find working methods below
  addIssue(issue: Homework): void {
    this.dialogData = issue;
  }

  updateIssue(issue: Homework): void {
    this.dialogData = issue;
  }

  deleteIssue(id: number): void {
    console.log(id);
  }
}
