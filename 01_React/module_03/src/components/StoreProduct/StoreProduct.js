import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom'


class StoreProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { buttonMSG: "",
                    redirect: false
            }
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
            this.setState({...this.state,
                redirect: true
            });
        }
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={"/detalle/" + this.props.storeProduct.id} />
        }
      }
    render() {
        return (
            <Fragment>
                {this.renderRedirect()}
                <div className="storeProduct">
                    <div className="storeProductIMG">
                        <img src={this.props.storeProduct.item_img} alt={this.props.storeProduct.item_model} />
                    </div>
                    <div className="storeProductINFO">
                    <ul>
                        <li className="storeProductMark">Marca: {this.props.storeProduct.item_mark}</li>
                        <li className="storeProductModel">Descripción: modelo {this.props.storeProduct.item_model}</li>
                        <li className="storeProductPrice">Precio: {this.props.storeProduct.item_price}</li>
                        <li className="storeProductSKU">SKU: {this.props.storeProduct.item_sku}</li>
                    </ul>
                    </div>
                    <div className="buttonAndMSG">                    
                        <button type="buttonBuy" onClick={ ()=>this.handleClick("BUTTON_BUY")} >Comprar</button>
                        <button type="buttonDetails" onClick={ ()=>this.handleClick("BUTTON_DETAILS")} > Ver detalle</button>
                        <p>{this.state.buttonMSG}</p>
                    </div>
                </div>      
            </Fragment>
        )
    }
}
export default StoreProduct;