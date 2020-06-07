import React, {Component, Fragment} from 'react';
import "./Home.css"
import Item from "../Item/Item"


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item_bought_keyed :"",
            sale_item: [{
                item_id:0,
                item_img:"./img/0/image.jpg",
                item_mark:"AMD",
                item_model:"Ryzen 7 3600X",
                item_price:"$ 219.99",
                item_sku:"9SIA24G9N33349",
                item_available:"33",
                item_buyMessageAux: "Presione el boton comprar para finalizar el pedido"
            },{
                item_id:1,
                item_img:"./img/1/image.jpg",
                item_mark:"ASUS",
                item_model:"ROG STRIX B450-F GAMING",
                item_price:"$ 129.99",
                item_sku:"N82E16813119140",
                item_available:"5",
                item_buyMessageAux: "Presione el boton comprar para finalizar el pedido"
            },{
                item_id:2,
                item_img:"./img/2/image.jpg",
                item_mark:"Crucial",
                item_model:"CT1000P1SSD8",
                item_price:"$ 119.99",
                item_sku:"N82E16820156199",
                item_available:"5",
                item_buyMessageAux: "Presione el boton comprar para finalizar el pedido"
            }
            ]
        }

    }

    /*
    printBuyMessage = (item_bought) => {
        console.log(this.state);
        console.log("Usted ha comprado el item: ");
        console.log(item_bought.item_id);
        let newStateItem = this.state.sale_item[item_bought.item_id];
        newStateItem.item_buyMessageAux = item_bought.item_buyMessageAux;
        this.setState({
            sale_item :newStateItem
        })
        console.log(this.state);
    };

     */
    printBuyMessage = (item_bought) => {
        console.log(this.state);
        console.log("Usted ha comprado el item: ");
        console.log(item_bought.item_id);
        this.setState({
            item_bought_keyed :item_bought
        });
    };
    render(){
        return(
            <Fragment>
            <div className="sale_items">
                <h2>PC - Component's</h2>
                {this.state.sale_item.map( (sale_item, index) =>{
                    return(<Item key={index} buy_cmd={this.printBuyMessage}  sale_item={sale_item}/>)
                }

                )}
            </div>
            </Fragment>
        )
    }
}
export default Home;