import React, { Component, Fragment } from 'react';
import firebase from '../../config/firebase';


class StoreProductDetailed extends Component {
    constructor(props) {
        super(props);
        this.state = { buttonMSG: "",
                    storeProduct: []
            }
    }
    componentDidMount(){
        /* Fetching product from database */
        firebase.firestore().collection("StoreProduct").doc(this.props.match.params.id).get()
        .then((doc) => { this.setState({...this.state,
            storeProduct:{ 
                item_img:doc.data().item_img,
                item_mark:doc.data().item_mark,
                item_model:doc.data().item_model,
                item_price:doc.data().item_price,
                item_sku:doc.data().item_sku,
                item_available:doc.data().item_available
                }
            })
            console.log("state",this.state);
        })
        .catch((error) => { });
    }
    handleClick = (generator) => {
        if (generator === "BUTTON_BUY"){
            console.log( "Gracias por la compra!!" );
            this.setState({
                buttonMSG:"Gracias por la compra!!"
            });
        }
        else {
            console.log( "Boton de detalle ha sido presionado" );
            this.setState({
                buttonMSG:"Boton de detalle ha sido presionado"
            });
        }
    }
    render() {
        return (
            <Fragment>
            <section id="cont">
                <div id="contTitle">
                    <h2>{this.state.storeProduct.item_model}</h2>
                </div>  
                <div className="storeGallery">
                    <div className="storeProduct">
                        <div className="storeProductIMG">
                            <img src={this.state.storeProduct.item_img} alt={this.state.storeProduct.item_model} />
                        </div>
                        <div className="storeProductINFO">
                        <ul>
                            <li className="storeProductMark">Marca: {this.state.storeProduct.item_mark}</li>
                            <li className="storeProductModel">Descripción: modelo {this.state.storeProduct.item_model}</li>
                            <li className="storeProductPrice">Precio: {this.state.storeProduct.item_price}</li>
                            <li className="storeProductSKU">SKU: {this.state.storeProduct.item_sku}</li>
                            <li className="storeProductAvailable">Cantidad disponible: {this.state.storeProduct.item_available}</li>
                        </ul>
                        </div>
                        <div className="buttonAndMSG">                    
                            <button type="buttonBuy" onClick={ ()=>this.handleClick("BUTTON_BUY")} >Comprar</button>
                            <p>{this.state.buttonMSG}</p>
                        </div>
                    </div>   
                </div>       
                </section>      
            </Fragment>
        )
    }
}
export default StoreProductDetailed;