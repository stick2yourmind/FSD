import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(public fb: FormBuilder, private authService: AuthService) { 
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password);
    console.log("[LoginComponent] registerForm: ", this.loginForm);
  }

}
