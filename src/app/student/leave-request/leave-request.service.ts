import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LeaveRequest } from './leave-request.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class LeaveRequestService {
  private readonly API_URL = 'assets/data/stdLeaveReq.json';
  dataChange: BehaviorSubject<LeaveRequest[]> = new BehaviorSubject<
    LeaveRequest[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): LeaveRequest[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllLeaveRequests(): void {
    this.httpClient.get<LeaveRequest[]>(this.API_URL).subscribe(
      (data) => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addLeaveRequest(leaveRequest: LeaveRequest): void {
    this.dialogData = leaveRequest;
  }
  updateLeaveRequest(leaveRequest: LeaveRequest): void {
    this.dialogData = leaveRequest;
  }
  deleteLeaveRequest(id: number): void {
    console.log(id);
  }
}
