import React, { Component } from "react";
// import { MDCTextField } from '@material/textfield';

class Textfield extends Component {
    // componentDidMount() {
    //     const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    //         return new MDCTextField(el);
    //     });   
    // }

    render() {
        const { label, type, id } = this.props;
        return (
        <React.Fragment>
            <div className="mdc-text-field" style={{width: '400px', marginBottom: '20px'}}>
                <input type={type} id={id} className="mdc-text-field__input" />
                <label className="mdc-floating-label" for={id}>{label}</label>
                <div className="mdc-line-ripple"></div>
            </div>
        </React.Fragment>
        );
    }
}
export default Textfield;