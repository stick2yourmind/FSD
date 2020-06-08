import React, {Component} from 'react';
import "./Button.css"


class Button extends Component{
    constructor(props) {
        super(props);
        this.state = {buttonClicked: this.props.button_pushed.button_messageButton}
    }
    clickedButton = () => {
        let aux = this.props.button_pushed.button_clickedMessage;
        this.setState({
            buttonClicked: aux
        });
        this.props.clickedButtonTask(this.props.button_pushed);
};
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("[shouldComponentUpdate Button method] ");
        return true;
    }

    render(){
        return(
            <form className="buy_form" action="">
                <input className="buy_input" type="button" value={this.props.button_pushed.button_value} id="buy_button"
                       onClick={this.clickedButton}/>
                <span className="buy_span" id="message">{this.state.buttonClicked} </span>
            </form>
        )
    }
}
export default Button;