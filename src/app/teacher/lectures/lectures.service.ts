import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lectures } from './lectures.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class LecturesService {
  private readonly API_URL = 'assets/data/lectures.json';
  dataChange: BehaviorSubject<Lectures[]> = new BehaviorSubject<Lectures[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Lectures[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllLecturess(): void {
    this.httpClient.get<Lectures[]>(this.API_URL).subscribe(
      (data) => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addLectures(lectures: Lectures): void {
    this.dialogData = lectures;
  }
  updateLectures(lectures: Lectures): void {
    this.dialogData = lectures;
  }
  deleteLectures(id: number): void {
    console.log(id);
  }
}
