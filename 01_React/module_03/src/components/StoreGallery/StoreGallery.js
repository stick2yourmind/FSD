import React, { Component, Fragment } from 'react';
import StoreProduct from "../StoreProduct/StoreProduct"
import firebase from '../../config/firebase';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeGallery: []
        }

    }
    componentDidMount(){
        let aux = [];
        let index = 0;
        function ArrayElements(element) {
            aux[index] = {
                id: element.id,
                item_img:element.data().item_img,
                item_mark:element.data().item_mark,
                item_model:element.data().item_model,
                item_price:element.data().item_price,
                item_sku:element.data().item_sku,
                item_available:element.data().item_available
            }
            index = index + 1;
        }

        firebase.firestore().collection("StoreProduct").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => ArrayElements(doc));
        }).then(() => {
            this.setState({
            storeGallery:aux
            });
            console.log("state", this.state);
            index = 0;
            })
    }

    render() {
        return (
            <Fragment>
                <section id="cont">
                    <div id="contTitle">
                        <h2>Productos</h2>
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

/* 
https://html5-css3-js-2020.000webhostapp.com/react/0/image.jpg 
https://html5-css3-js-2020.000webhostapp.com/react/1/image.jpg
https://html5-css3-js-2020.000webhostapp.com/react/2/image.jpg
https://html5-css3-js-2020.000webhostapp.com/react/3/image.jpg
https://html5-css3-js-2020.000webhostapp.com/react/4/image.jpg
https://html5-css3-js-2020.000webhostapp.com/react/5/image.jpg
*/