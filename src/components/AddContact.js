import React from "react";
import '../AddContact.css'
import {list} from '../static-data';

export default class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
           

        }
    }

    handleChange = args => (event) => {
        this.setState({
            [args]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`${this.state.firstName} ${this.state.lastName}`)
    }
    render () {
        
        return (
            <div className="wrapper">
                <h3>Contact Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="innerWrapper">
                    <label>
                       First Name:
                        <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange('firstName')} />
                    </label>
                    <label>
                       Last Name:
                        <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange('lastName')} />
                    </label>
                    <label>
                       Email:
                        <input type='text' name='email' value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <label>
                       Address:
                        <input type='text' name='address' value={this.state.address} onChange={this.handleChange('address')} />
                    </label>
                    <label>
                       City:
                        <input type='text' name='city' value={this.state.city} onChange={this.handleChange('city')} />
                    </label>
                    <label>
                       State:
                        <input type='text' name='state' value={this.state.state} onChange={this.handleChange('state')} />
                    </label>
                    <label>
                       Zip Code:
                        <input type='text' name='zipCode' value={this.state.zipCode} onChange={this.handleChange('zipCode')} />
                    </label>
                    <div className="buttonWrapper">
                    <input type='submit' value='submit' className="submitButton" /></div>
                    </div>
                </form>
                <br />
                <div className="listWrapper">
                {this.state.firstName} {this.state.lastName}<br />
                {this.state.email}<br />  {this.state.address}<br />
                {this.state.city}<br />  {this.state.state}<br />
                {this.state.zipCode}  
                </div>
                
            </div>
        );
    }
}

