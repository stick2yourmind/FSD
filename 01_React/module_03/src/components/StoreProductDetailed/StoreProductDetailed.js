import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'


class StoreProductDetailed extends Component {
    constructor(props) {
        super(props);
        this.state = { buttonMSG: "",
                    storeProduct: []
            }
    }
    componentDidMount(){
        fetch(`https://my-json-server.typicode.com/stick2yourmind/demo/sale_items_details/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data =>{  
                console.log("Data",data);
                this.setState({
                    storeProduct:data
                });
                console.log("state",this.state)
            })
            .catch(error => {
                console.log(error);
            });
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
            </Fragment>
        )
    }
}
export default StoreProductDetailed;