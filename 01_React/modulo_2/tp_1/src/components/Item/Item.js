import React, {Component, Fragment} from 'react';
import "./Item.css"

class Item extends Component{
    constructor(props) {
        super(props);
    }
    boughtItem = () =>{
        this.props.sale_item.item_buyMessageAux = "Muchas gracias por su compra !!";
        this.props.buy_cmd(this.props.sale_item);
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
        console.log("Renderizando item id: ");
        console.log(item_id);
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
                            <form className="buy_form" action="">
                                <input className="buy_input" type="button" value="Comprar" id="buy_button"
                                       onClick={this.boughtItem}/>
                                    <span className="buy_span" id="message">{item_buyMessageAux} </span>
                            </form>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}
export default Item;