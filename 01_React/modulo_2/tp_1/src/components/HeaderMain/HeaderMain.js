import React, {Component, Fragment} from 'react';
import "./HeaderMain.css"
class HeaderMain extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Fragment>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap"/>
            <header className="main_header">
                <h1 className="main_h1">#QuantBlackDay!</h1>
            </header>
            </Fragment>
        )
    }
}
export default HeaderMain;