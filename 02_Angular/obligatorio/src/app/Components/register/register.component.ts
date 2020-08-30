import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(public fb: FormBuilder) { 
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
    alert("registrado");
  }

}
