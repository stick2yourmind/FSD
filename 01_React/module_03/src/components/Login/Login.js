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
        let type = undefined;
        /* Creating JSON with user data */ 
        const LoginUserAdmin = {
            email : formLoginUserAdmin.target.email.value.toLowerCase(),
            password : formLoginUserAdmin.target.password.value
        }
        /* Checkikg if user exists */
        firebase.firestore().collection("Users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if((doc.data().email === LoginUserAdmin.email) && (doc.data().password === LoginUserAdmin.password)){
                    type = "User";
                    console.log("Usuario registrado");
                    }
            });
        });
        /* Checkikg if admin exists */
        firebase.firestore().collection("Admin").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if((doc.data().email === LoginUserAdmin.email) && (doc.data().password === LoginUserAdmin.password)){
                    type = "Admin"
                    console.log("Admin registrado");
                    }
            });
        }).then(() => { /* Advice to user/admin if is registered */ 
            if((type==="User") || (type==="Admin")){
                alert(type + " registrado");
            }
            else{
                alert("Usuario no registrado");
            }

        });


        /* Cleaning form */
        formLoginUserAdmin.target.email.value = ""
        formLoginUserAdmin.target.password.value = ""
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