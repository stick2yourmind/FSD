import React, {Component, Fragment} from 'react';
import "./Item.css"
import Button from "../Button/Button"

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            button_pushed :[{
                button_id :"0",
                button_value: "Comprar",
                button_messageButton: "Presione el boton comprar para finalizar el pedido",
                button_clickedMessage: "Muchas gracias por su compra !!!"
            },{
                button_id :"1",
                button_value: "Ver detalle",
                button_messageButton: "",
                button_clickedMessage: "Ver detalle presionado"
            }
            ]
        }
    }
    clickedButtonTask = (aux) =>{
        console.log("[clickedButtonTask Item method] Button pressed value: ", aux.button_value);
        if(aux.button_id==="0"){
            this.props.sale_item.item_buyMessageAux = "Muchas gracias por su compra !!!";
            let newSaleItemState = [];
            for (let i=0; i<this.state.button_pushed.length; i++){
                newSaleItemState = newSaleItemState.concat(this.state.button_pushed[i]);
            }
            newSaleItemState[aux.button_id] = aux;
            this.setState({
                button_pushed :newSaleItemState
            });
            console.log("Nuevo estado de item", this.state);
            this.props.buy_cmd(this.props.sale_item);
        }
};
    render(){
        const item_id = this.props.sale_item.item_id;
        const item_img = this.props.sale_item.item_img;
        const item_mark = this.props.sale_item.item_mark;
        const item_model = this.props.sale_item.item_model;
        const item_price = this.props.sale_item.item_price;
        const item_sku = this.props.sale_item.item_sku;
        const item_available = this.props.sale_item.item_available;
        const item_buyMessageAux = this.props.sale_item.item_buyMessageAux;
        return(
            <Fragment>
                <div className="table">
                    <div className="tr">
                        <div className="td"><img src={require( `${ item_img }` )} alt="Microprocessor"/></div>
                    </div>
                    <div className="tr">
                        <div className="td">
                            <ul>
                                <li>Marca:  <span id="item_mark">{item_mark}</span></li>
                                <li>Modelo: <span id="item_model">{item_model}</span></li>
                                <li>Precio: <span id="item_price">{item_price}</span></li>
                                <li>SKU: <span id="item_sku">{item_sku}</span></li>
                                <li>Cantidad disponible: <span id="item_available">{item_available}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="tr">
                        <div className="td">

                            {this.state.button_pushed.map( (button_pushed, index) =>{
                                    return(<Button key={index} clickedButtonTask={this.clickedButtonTask} button_pushed={button_pushed} />)
                                }

                            )}

                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}
export default Item;