import React, { Component } from "react";
// import { MDCRipple } from '@material/ripple';

class SubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkout: false,
        }
    }

    // componentDidMount() {
    //     const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
    // }

    render() {
        const { text, onClick, isBasketEmpty } = this.props;
        return (
            <React.Fragment>
                <button
                    className="mdc-button mdc-button--raised"
                    onClick={onClick}
                    disabled={isBasketEmpty}
                    style={{ width: '110px' }}
                >
                    {text}
                </button>
            </React.Fragment>
        );
    }
}
export default SubmitButton;
