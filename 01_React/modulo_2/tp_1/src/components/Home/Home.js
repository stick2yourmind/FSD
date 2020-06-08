import React, {Component, Fragment} from 'react';
import "./Home.css"
import Item from "../Item/Item"


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item_bought :[],
            sale_item: []
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
        console.log("[printBuyMessage Home method] Iniciado:Viejo estado de Home", this.state);
        console.log("Usted ha comprado el item: ");
        console.log(item_bought.item_id);
        let newSaleItemState = [];
        for (let i=0; i<this.state.sale_item.length; i++){
            newSaleItemState = newSaleItemState.concat(this.state.sale_item[i]);
        }
        newSaleItemState[item_bought.item_id] = item_bought;
        this.setState({
            sale_item :newSaleItemState
        });
        console.log("[printBuyMessage Home method] Finalizado:Nuevo estado de Home", this.state);
    };


    componentDidMount(){
        fetch(`https://my-json-server.typicode.com/stick2yourmind/demo/sale_item`)
            .then(response => response.json())
            .then(data =>{
                console.log("Data",data)
                this.setState({
                    sale_item:data
                });
                console.log("state",this.state)
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidUpdate(prevProps, prevState){
        console.log("[componentDidUpdate Home method] Iniciado+Finalizado");
    }
    handleClick = ()=>{
        this.setState({
            opcionesMenu:['Logout','Home']
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