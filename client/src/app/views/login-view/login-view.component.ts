import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionService } from './state/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string | undefined;

  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
    // try {
    if (this.loginForm.invalid) {
      return;
    }
    this.sessionService
      .login(
        this.loginForm.controls.username.value,
        this.loginForm.controls.password.value
      )
      .pipe(first())
      .subscribe(
        (_) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          console.error(error);
        }
      );
    // } catch (e) {
    // }
  }
}
