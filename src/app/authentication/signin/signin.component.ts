import { AuthService } from './../../shared/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from './../../shared/security/role';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['admin@school.org', Validators.required],
      password: ['admin@123', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  adminSet() {
    this.loginForm.get('username').setValue('admin@school.org');
    this.loginForm.get('password').setValue('admin@123');
  }
  teacherSet() {
    this.loginForm.get('username').setValue('teacher@school.org');
    this.loginForm.get('password').setValue('teacher@123');
  }
  studentSet() {
    this.loginForm.get('username').setValue('student@school.org');
    this.loginForm.get('password').setValue('student@123');
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.authService
        .login(this.f.username.value, this.f.password.value)
        .subscribe(
          (res) => {
            if (res.success) {
              const role = this.authService.getRole();

              if (role === Role.All || role === Role.Admin) {
                this.router.navigate(['/admin/dashboard/main']);
              } else if (role === Role.Teacher) {
                this.router.navigate(['/teacher/dashboard']);
              } else if (role === Role.Student) {
                this.router.navigate(['/student/dashboard']);
              } else {
                this.router.navigate(['/authentication/signin']);
              }
            } else {
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
          }
        );
    }
  }
}
