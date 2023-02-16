import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  signup() {
    throw new Error('No implementado.');
  }
  signupForm:FormGroup
  constructor(private fb:FormBuilder){
    this.signupForm = this.fb.group({
      firstname:['', [Validators.required]],
      lastname:['', [Validators.required]],
      email:['', [Validators.required]],
      phone:[''],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]    
    })
  }

}
