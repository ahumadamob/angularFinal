import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login() {
    throw new Error('No implementado.');
  }
  loginForm:FormGroup
  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]]    
    })
  }
}
