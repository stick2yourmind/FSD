import React, {Component} from "react";
import './Item.css';
const IMG_PATH = './';


class Item extends Component{
    constructor(props) {
        super(props);
        console.log("props", this.props.item_data)
    }
    render() {
        return (
            <div className="main_div">
                <div className="info_item">
                <span >Item name:{this.props.item_data.items_name}</span>
                <span >Item description:{this.props.item_data.items_description}</span>
                <span >Item price:{this.props.item_data.items_price}</span>
                <span >Item sku:{this.props.item_data.items_sku}</span>
                </div>
                <div className="img_item">
                    <img src={require(`${IMG_PATH}${this.props.item_data.items_img}`)} alt="zero"/>
                </div>
                <div className="chart_checkout">
                    <form action="buy">
                        <input type="number" placeholder="Ingrese cantidad" name="quantity_buy" id="quantity_buy"
                               min="1" max={this.props.item_data.items_available}/>
                        <input type="submit" value="Buy!!" id="button_buy"/>
                    </form>
                </div>
            </div>
        );
    }
}
export default Item;
