import { ShowIfLoggedInDirective, ShowIfLoggedInDirectiveModule } from './show-if-logged-in.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `
    <p showIfLoggedIn='true'></p>
  `,
  selector: 'app-test'
})
class TestComponent {}

describe('ShowIfLoggedInDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowIfLoggedInDirectiveModule],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
