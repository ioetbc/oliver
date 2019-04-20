import React, { Component } from 'react';

import TextField from './Utils/TextField';
import Button from './Utils/Button';
import ButtonClose from './Utils/ButtonClose'

 class Contact extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        document.body.style.overflowY = 'hidden';
    }
    
    componentWillUnmount() {
        document.body.style.overflowY = '';
    }

    render() {
        const { handleContactScreen } = this.props;
        return (
            <React.Fragment>
                <div
                    className="hide-bg"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                <div className="button-close" onClick={handleContactScreen}></div>

                    <form
                        style={{ display: 'flex', flexDirection: 'column' }}
                        action="https://formspree.io/ioetbc@gmail.com"
                        method='POST'
                    >
                        <TextField
                            label={'Name'}
                            type={'text'}
                            id={'name'}
                        />
                        <TextField
                            label={'Email address'}
                            type={'email'}
                            id={'email'}
                        />
                        <TextField
                            label={'Phone'}
                            type={'number'}
                            id={'phone'}
                        />
                        <Button 
                            text={'submit'}
                            type={'submit'}
                        />
                    </form>
                </div>
            </React.Fragment>
        )
    }
 }
 export default Contact;
 