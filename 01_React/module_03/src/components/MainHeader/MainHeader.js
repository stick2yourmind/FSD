import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
class MainHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <header>
                    <div id="headerMarca"><a href="/"><h1>{this.props.headerH1}</h1></a></div>
                    <nav id="headerNav">
                        <ul>
                        {this.props.internalPage.map( (internalPage, index)=>
                            <li key={index}><Link to={internalPage.path} >{internalPage.name}</Link></li> )}
                        </ul>
                    </nav>
                </header>
            </Fragment>
        )
    }
}
export default MainHeader;