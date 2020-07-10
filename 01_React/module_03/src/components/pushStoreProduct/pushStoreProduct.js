import React, { Component, Fragment } from 'react';
import firebase from '../../config/firebase';


class pushStoreProduct extends Component {
    constructor(props) {
        super(props);

    }
    handleSubmit = (formNewUser) => {
        formNewUser.preventDefault();
        console.log(formNewUser.target.item_img.value);
        console.log(formNewUser.target.item_mark.value);
        console.log(formNewUser.target.item_model.value);
        console.log(formNewUser.target.item_price.value);
        console.log(formNewUser.target.item_sku.value);
        console.log(formNewUser.target.item_available.value);
        /* Creating JSON with user data */ 
        const newStoreProduct = {
            item_img : formNewUser.target.item_img.value,
            item_mark : formNewUser.target.item_mark.value,
            item_model : formNewUser.target.item_model.value,
            item_price : formNewUser.target.item_price.value,
            item_sku : formNewUser.target.item_sku.value,
            item_available : formNewUser.target.item_available.value
        }

        let productSKUExists = false;
        firebase.firestore().collection("StoreProduct").where("item_sku", "==", newStoreProduct.item_sku)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           alert("SKU ya existente, ingrese otro");
           productSKUExists = true;
           });
        }).then( ()=>{
           if(!productSKUExists){ /* Adding to db new product */
               firebase.firestore().collection('StoreProduct').add(newStoreProduct)
           .then(doc=>{console.log(doc)})
           .catch(error=>{console.log(error)})
           alert("Nueva publicación ha sido ingresada");
                }
            })

        
        /* Cleaning form */
        formNewUser.target.item_img.value = ""
        formNewUser.target.item_mark.value = ""
        formNewUser.target.item_model.value = ""
        formNewUser.target.item_price.value = ""
        formNewUser.target.item_sku.value = ""
        formNewUser.target.item_available.value = ""
    }
    render() {
        return (
            <Fragment>
            <section id="cont">
                <h2>Alta de productos</h2>
                <div id="formulario" onSubmit = {this.handleSubmit}>
                  <form >
                    <input className="entradaFormulario" type="text" placeholder="Link de la imagen" name="item_img" required/>
                    <input className="entradaFormulario" type="text" placeholder="Marca" name="item_mark" required />
                    <input className="entradaFormulario" type="text" placeholder="Descripción o modelo" name="item_model" required />
                    <input className="entradaFormulario" type="text" placeholder="Precio" name="item_price" required />
                    <input className="entradaFormulario" type="text" placeholder="SKU" name="item_sku" required />
                    <input className="entradaFormulario" type="text" placeholder="Cantidad disponibles" name="item_available" required />
                    <input className="entradaFormulario" type="submit" value="Enviar"/>
                  </form>
                </div>
            </section>      
            </Fragment>
        )
    }
}
export default pushStoreProduct;