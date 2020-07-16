import React, { Component, Fragment } from 'react';
import firebase from '../../config/firebase';


class Login extends Component {
    constructor(props) {
        super(props);

    }
    handleSubmit = (formLoginUserAdmin) => {
        formLoginUserAdmin.preventDefault();
        console.log(formLoginUserAdmin.target.email.value);
        console.log(formLoginUserAdmin.target.password.value);
        const LoginUserAdmin = {
            email : formLoginUserAdmin.target.email.value.toLowerCase(),
            password : formLoginUserAdmin.target.password.value
        }
        firebase.auth().signInWithEmailAndPassword(LoginUserAdmin.email, LoginUserAdmin.password)
        .then(()=>{
            alert("Usuario verificado, bienvenido!");
            let user = firebase.auth().currentUser;
            let userName;
            if (user != null) {
                userName = user.displayName.split("+");
                console.log("Nombre: ", userName[0], "Apellido: ", userName[1]);
              }
        })
        .catch((error)=>{
            alert(error);
        });
   
        /* Cleaning form */
        formLoginUserAdmin.target.email.value = "";
        formLoginUserAdmin.target.password.value = "";
    }
    render() {
        return (
            <Fragment>
            <section id="cont">
                <h2>Ingresar</h2>
                <div id="formulario" onSubmit = {this.handleSubmit}>
                  <form >
                    <input className="entradaFormulario" type="email" placeholder="Email" name="email" required />
                    <input className="entradaFormulario" type="password" placeholder="Contraseña" name="password" required minLength="8" maxLength="14"/>
                    <input className="entradaFormulario" type="submit" value="Enviar"/>
                  </form>
                </div>
            </section>      
            </Fragment>
        )
    }
}
export default Login;