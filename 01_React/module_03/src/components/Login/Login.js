import React, { Component, Fragment } from 'react';
import firebase from '../../config/firebase';
import GlobalContext from '../../GlobalState/GlobalContext';


class Login extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);

    }

    adminCheck = (email) => {
        let isAdmin = false;
        firebase.firestore().collection("Admin").where("email", "==", email)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log("[adminCheck] doc: ", doc);
            console.log("[adminCheck] doc.id: ", doc.id, " => ", doc.data());
            alert("[adminCheck] Administrador: Alta de productos habilitada");
            isAdmin = true;});
            if (isAdmin == true){this.context.setLoggedInAdmin();}}           
            )
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

    }

    handleSubmit = (formLoginUserAdmin) => {
        formLoginUserAdmin.preventDefault();
        const LoginUserAdmin = {
            email : formLoginUserAdmin.target.email.value.toLowerCase(),
            password : formLoginUserAdmin.target.password.value
        }
        firebase.auth().signInWithEmailAndPassword(LoginUserAdmin.email, LoginUserAdmin.password)
        .then(()=>{
            alert("Usuario verificado, bienvenido!"  
            );
            let user = firebase.auth().currentUser;
            let userName;
            console.log("[handleSubmit] this.context.isLogging", this.context.isLogging);
            if (user != null) {
                userName = user.displayName.split("+");
                this.context.user = userName[0] + userName[1];
                this.context.setLoggedIn();
                console.log("[handleSubmit] this.context.isLogging", this.context.isLogging);
                this.adminCheck(LoginUserAdmin.email);
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
                <h3>Alta de productos solo habilitada para el administrador. email: admin@zeus.com contraseña: 12345678</h3>
            </section>      
            </Fragment>
        )
    }
}
export default Login;