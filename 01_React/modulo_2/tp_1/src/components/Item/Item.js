import React, {Component, Fragment} from 'react';
import "./Item.css"
const IMG = (imgName) => {
    return require(`${imgName}`)
};

class Item extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Fragment>
                <div className="table">
                    <div className="tr">
                        <div className="td"><img src={require( `${ this.props.sale_item.item_img }` )} alt="Microprocessor"/></div>
                    </div>
                    <div className="tr">
                        <div className="td">
                            <ul>
                                <li>Marca: <span id="item_mark">{this.props.sale_item.item_mark}</span></li>
                                <li>Modelo: <span id="item_model">{this.props.sale_item.item_model}</span></li>
                                <li>Precio: <span id="item_price">{this.props.sale_item.item_price}</span></li>
                                <li>SKU: <span id="item_sku">{this.props.sale_item.item_sku}</span></li>
                                <li>Cantidad disponible: <span id="item_available">{this.props.sale_item.item_available}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="tr">
                        <div className="td">
                            <form className="buy_form" action="">
                                <input className="buy_input" type="button" value="Comprar" id="buy_button"
                                       onClick={this.props.buy_cmd}/>
                                    <span className="buy_span" id="message">{this.props.buy_message}</span>
                            </form>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}
export default Item;