import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
 
import { ContactComponent } from './contact.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
 
describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports : [
        BrowserModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
 
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
 
    de = fixture.debugElement.query(By.css('.container'));
    el = de.nativeElement;
 
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should have "Contact Us" as title', () => {
    expect(component.title).toEqual('Contact Us');
  });
 
  it('should set submitted to true', waitForAsync(() => {
    component.saveForm();
    expect(component.submitted).toBeTrue();
  }));
 
  it('should call the save method', waitForAsync(() => {
    spyOn(component, 'saveForm');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.saveForm).toHaveBeenCalled();
  }));
 
  it('should show the form to be invalid', waitForAsync(() => {
    component.contactForm?.controls['name'].setValue('');
    component.contactForm?.controls['email'].setValue('');
    component.contactForm?.controls['text'].setValue('');
 
    fixture.detectChanges();
 
    expect(component.contactForm?.valid).toBeFalsy();
  }));
 
  it('should show the form to be valid', waitForAsync(() => {
    const contactObject = {
      name: 'Fawzaan',
      email: 'fawz@gmail.com',
      text: 'hello from phase 1'
    };
 
    component.contactForm?.patchValue(contactObject);
 
    expect(component.contactForm?.valid).toBeTruthy();
  }));
 
});