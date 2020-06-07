import React, {Component, Fragment} from 'react';
import "./Home.css"
import Item from "../Item/Item"


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            buyMessage: "Presione el boton comprar para finalizar el pedido",
            sale_item: [{
                id:0,
                item_img:"./img/0/image.jpg",
                item_mark:"AMD",
                item_model:"Ryzen 7 3600X",
                item_price:"$ 219.99",
                item_sku:"9SIA24G9N33349",
                item_available:"33"
            },{
                id:1,
                item_img:"./img/1/image.jpg",
                item_mark:"ASUS",
                item_model:"ROG STRIX B450-F GAMING",
                item_price:"$ 129.99",
                item_sku:"N82E16813119140",
                item_available:"5"
            },{
                id:2,
                item_img:"./img/2/image.jpg",
                item_mark:"Crucial",
                item_model:"CT1000P1SSD8",
                item_price:"$ 119.99",
                item_sku:"N82E16820156199",
                item_available:"5"
            }
            ]
        }

    }

    printBuyMessage = () => {
        this.setState({
            buyMessage: "Muchas gracias por su compra !!"
        })
    }
    render(){
        return(
            <Fragment>
            <div className="sale_items">
                <h2>PC - Component's</h2>
                <Item buy_cmd={this.printBuyMessage} buy_message= {this.state.buyMessage} sale_item={this.state.sale_item[0]}/>
                <Item buy_cmd={this.printBuyMessage} buy_message= {this.state.buyMessage} sale_item={this.state.sale_item[1]}/>
                <Item buy_cmd={this.printBuyMessage} buy_message= {this.state.buyMessage} sale_item={this.state.sale_item[2]}/>
                {/* Componente Item */}
            </div>
            </Fragment>
        )
    }
}
export default Home;