import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should validate email', () => {
    const emailControl = component.form.controls['email'];
    expect(emailControl.valid).toBeFalsy();
    emailControl.setValue('test@example.com');
    expect(emailControl.valid).toBeTruthy();
    emailControl.setValue('invalid-email');
    expect(emailControl.valid).toBeFalsy();
  });
});
