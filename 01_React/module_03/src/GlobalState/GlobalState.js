import React, { Component } from 'react';
import GlobalContext from './GlobalContext';


class GlobalState extends Component {
  state = {
    user: "ddd",
    isLogging:false,  
    isAdmin:false
  };

  setLoggedIn = ()=>{
    this.setState({
      isLogging:true
    })
  }
  setLoggedOut = ()=>{
    this.setState({
      isLogging:false,
      isAdmin:false
    })
  }

  setLoggedInAdmin = ()=>{
    this.setState({
      isAdmin:true
    })
  }


  render() {
    return (
      <GlobalContext.Provider
        value={{
          user:this.state.user,
          isLogging:this.state.isLogging,
          setLoggedIn:this.setLoggedIn,
          setLoggedOut:this.setLoggedOut,
          isAdmin:this.state.isAdmin,
          setLoggedInAdmin:this.setLoggedInAdmin
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
export default GlobalState;
