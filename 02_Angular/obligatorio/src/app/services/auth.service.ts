import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogging :boolean;
  constructor(private auth: AngularFireAuth) { 
    this.isLogging = false;
  }
  
  public registerUser(email: string, password:string){
    this.auth.createUserWithEmailAndPassword(email, password).
        then(()=>{
            alert("Registrado");
            })
            .catch((error)=>{
                alert(error);
                console.log(error);
            });
  }

  public loginUser(email: string, password:string){
    this.auth.signInWithEmailAndPassword(email, password).
        then(()=>{
            alert("Logeado");
            this.setLogin();
            })
            .catch((error)=>{
                alert(error);
                console.log(error);
            });
  }

  public getisLogging(){
    return this.isLogging;
  }

  public setLogin(){
    this.isLogging = true;
  }
  public setLogout(){
    this.isLogging = false;
  }
}
