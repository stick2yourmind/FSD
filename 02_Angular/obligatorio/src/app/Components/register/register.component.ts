import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(public fb: FormBuilder, private authService: AuthService) { 
    this.registerForm = this.fb.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(14) ]]
    })
  }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    this.authService.registerUser(this.registerForm.value.email, this.registerForm.value.password);
    console.log("[RegisterComponent] registerForm: ", this.registerForm);
  }

}
