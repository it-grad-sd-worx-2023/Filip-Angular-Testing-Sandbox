import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  title : string = 'Contact Us' ;
  contactForm? : FormGroup ;
  submitted : boolean = false ;
 
  constructor(private formBuilder : FormBuilder){}
 
  ngOnInit() : void {
    this.contactForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      text : ['', Validators.required]
    });
  }
 
  saveForm(){
    this.submitted = true ;
  }
}
 