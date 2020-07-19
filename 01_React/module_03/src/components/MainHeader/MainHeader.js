import React, { Component, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../GlobalState/GlobalContext';

class MainHeader extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);
        this.loggedIn = this.loggedIn.bind(this);
        this.state = { 
            isLogging : false
        }
    }
    
    titleAdd = () => {
        console.log("this.context.user", this.context.user);
        let aux = "";
        aux = this.context.user;
        return(
            <p>{aux}</p>
        )

    }

    loggedIn = () => {
        return (
            <Fragment>
            { /* Agrego links comunes a usuarios y admininistrador, pero no salir */
            this.props.linksLoggedIn.map( (internalPage, index)=>
                <li key={index}><Link to={internalPage.path} >{internalPage.name}</Link></li> )
            
            }
            { /* Agrego links habilitados para admininistrador, pero no salir */
            this.context.isAdmin &&
            this.props.linksLoggedInAdmin.map( (internalPage, index)=>
                <li key={index}><Link to={internalPage.path} >{internalPage.name}</Link></li> )
            }
            { /* Agrego link de salir */   }
            <li ><Link to='/' onClick={this.context.setLoggedOut} >Salir</Link></li>
            </Fragment>
        )

    }


    loggedOut = () => {
        return (
            this.props.linksLoggedOut.map( (internalPage, index)=>
                <li key={index}><Link to={internalPage.path} >{internalPage.name}</Link></li> )
        )

    }

    render() {
        return (
            <Fragment>
                <header>
    
                    <div id="headerMarca"><Link to="/" ><h1>{this.props.headerH1}</h1></Link></div>
                    
                    <nav id="headerNav">
                        <ul>
                        {this.context.isLogging ? this.loggedIn() : this.loggedOut()}
                        </ul>
                    </nav>
                </header>
            </Fragment>
        )
    }
}
export default MainHeader;