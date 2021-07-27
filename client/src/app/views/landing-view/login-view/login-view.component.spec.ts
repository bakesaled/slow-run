import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewComponent } from './login-view.component';
import { LoginViewModule } from './login-view.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';

describe('LoginViewComponent', () => {
  let component: LoginViewComponent;
  let fixture: ComponentFixture<LoginViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginViewModule,
        HttpClientTestingModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        LocalStorageService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
