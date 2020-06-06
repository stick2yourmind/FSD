import React, {Component} from "react";
import Item from '../Item/Item'

class Home extends Component{
    items;
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.items = [{items_id:0,
            items_name: "AMD Ryzen 9 3950X 16-Core 3.5 GHz Socket AM4 105W",
            items_description: "\n" +
                "\n" +
                "    7nm 105W\n" +
                "    64MB L3 Cache\n" +
                "    8MB L2 Cache\n" +
                "\n",
            items_price: "709,99",
            items_sku: "N82E16819113616",
            items_available: "3",
            items_img: "0/image.jpg"},
            {items_id:1,
                items_name: "GIGABYTE GeForce RTX 2070 Super",
                items_description: "\n" +
                    "\n" +
                    "    8GB 256-Bit GDDR6\n" +
                    "    1 x HDMI, 3 x DisplayPort\n" +
                    "    PCI Express 3.0 x16\n" +
                    "\n",
                items_price: "549,99",
                items_sku: "N82E16814932212",
                items_available: "5",
                items_img: "1/image.jpg"},
            {items_id:2,
                items_name: "SAMSUNG 960 PRO M.2 1TB NVMe PCI-Express 3.0 x4",
                items_description: "\n" +
                    "\n" +
                    "    M.2 2280\n" +
                    "    1TB\n" +
                    "    PCI-Express 3.0 x4\n" +
                    "\n",
                items_price: "857,99",
                items_sku: "9SIAADF6J64570",
                items_available: "2",
                items_img: "2/image.jpg"}];
    }

    render() {
        return (
            <div> <h2>Aprovecha nuestras ofertas de blue days!!</h2>
                {this.items.map((items,i) => {
                    return <Item item_data={items} key={i}/>;
                })}
            </div>
        );
    }
}
export default Home;
