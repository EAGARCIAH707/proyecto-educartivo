import { AuthGuard } from './shared/security/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DynamicScriptLoaderService } from './shared/services/dynamic-script-loader.service';
import { ConfigService } from './shared/services/config.service';
import { CalendarService } from './calendar/calendar.service';
import { TeachersService } from './admin/teachers/all-teachers/teachers.service';
import { StudentsService } from './admin/students/all-students/students.service';
import { LibraryService } from './admin/library/all-assets/library.service';
import { DepartmentService } from './admin/departments/all-departments/department.service';
import { StaffService } from './admin/staff/all-staff/staff.service';
import { HolidayService } from './admin/holidays/all-holidays/holiday.service';
import { FeesService } from './admin/fees/all-fees/fees.service';
import { ContactsService } from './contacts/contacts.service';
import { RightSidebarService } from './shared/services/rightsidebar.service';
import { LecturesService } from './teacher/lectures/lectures.service';
import { LeaveRequestService } from './teacher/leave-request/leave-request.service';
import { ExamScheduleService } from './teacher/exam-schedule/exam-schedule.service';
import { HomeworkService } from './student/homework/homework.service';
import { LeaveRequestService as stdLeaveReqService } from './student/leave-request/leave-request.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { MatListModule } from '@angular/material/list';
import { SimpleDialogComponent } from './ui/modal/simpleDialog.component';
import { DialogformComponent } from './ui/modal/dialogform/dialogform.component';
import { BottomSheetOverviewExampleSheet } from './ui/bottom-sheet/bottom-sheet.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/security/auth.service';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    SimpleDialogComponent,
    DialogformComponent,
    BottomSheetOverviewExampleSheet,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonToggleModule,
    ClickOutsideModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    DynamicScriptLoaderService,
    ConfigService,
    RightSidebarService,
    TeachersService,
    StudentsService,
    LibraryService,
    CalendarService,
    DepartmentService,
    StaffService,
    HolidayService,
    ContactsService,
    FeesService,
    LecturesService,
    LeaveRequestService,
    ExamScheduleService,
    HomeworkService,
    stdLeaveReqService,
    AuthService,
    AuthGuard,
  ],
  entryComponents: [
    SimpleDialogComponent,
    DialogformComponent,
    BottomSheetOverviewExampleSheet,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
