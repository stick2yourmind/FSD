import React, { Component, Fragment } from 'react';
import firebase from '../../config/firebase';


class Register extends Component {
    constructor(props) {
        super(props);

    }
    handleSubmit = (formNewUser) => {
        formNewUser.preventDefault();
        console.log(formNewUser.target.firstname.value);
        console.log(formNewUser.target.lastname.value);
        console.log(formNewUser.target.email.value);
        console.log(formNewUser.target.password.value);
        /* Creating JSON with user data */ 
        const newUser = {
            firstname : formNewUser.target.firstname.value,
            lastname : formNewUser.target.lastname.value,
            email : formNewUser.target.email.value.toLowerCase(),
            password : formNewUser.target.password.value
        }
        /* Getting password from an user email
        firebase.firestore().collection("Users").where("email", "==", formNewUser.target.email.value)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log("password")
            console.log(doc.id, " => ", doc.data().password);
            });
        })

        Adding a user
        firebase.firestore().collection('Users').add(newUser)
        .then(doc=>{console.log(doc)})
        .catch(error=>{console.log(error)})

        */
        /* Ckecking if email already exists at database to avoid duplication */
        let userExists = false;
        firebase.firestore().collection("Users").where("email", "==", newUser.email)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           alert("Usuario ya existente, ingrese otro email")
           userExists = true;
           });
        }).then( ()=>{
           if(!userExists){ /* Adding to db new user */
               firebase.firestore().collection('Users').add(newUser)
           .then(doc=>{console.log(doc)})
           .catch(error=>{console.log(error)})
           alert("Nuevo usuario ha sido ingresado")
                }
            })

        
        /* Cleaning form */
        formNewUser.target.firstname.value = ""
        formNewUser.target.lastname.value = ""
        formNewUser.target.email.value = ""
        formNewUser.target.password.value = ""
    }
    render() {
        return (
            <Fragment>
            <section id="cont">
                <h2>Registrarse</h2>
                <div id="formulario" onSubmit = {this.handleSubmit}>
                  <form >
                    <input className="entradaFormulario" type="text" placeholder="Nombre" name="firstname" required/>
                    <input className="entradaFormulario" type="text" placeholder="Apellido" name="lastname" required />
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
export default Register;