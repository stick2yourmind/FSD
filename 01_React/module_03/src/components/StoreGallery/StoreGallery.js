import React, { Component, Fragment } from 'react';
import StoreProduct from "../StoreProduct/StoreProduct"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeGallery: []
        }

    }
    componentDidMount(){
        fetch(`https://my-json-server.typicode.com/stick2yourmind/demo/sale_items_details`)
            .then(response => response.json())
            .then(data =>{
                console.log("Data",data)
                this.setState({
                    storeGallery:data
                });
                console.log("state",this.state)
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Fragment>
                <section id="cont">
                    <div id="contTitle"><h2>Productos</h2>
                    </div>  
                    <div className="storeGallery">
                        
                        {this.state.storeGallery.map( (storeProduct, index)=>
                            <StoreProduct key={index} storeProduct={storeProduct} />)}

                    </div>
                </section>          
            </Fragment>
        )
    }
}
export default Home;