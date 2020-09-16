import React, { Component } from 'react';

class MortgageForm extends Component {

    constructor() {
        super();
        this.state = {
            personalSalary: null,
            partnerSalary: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
       event.preventDefault();
       const personalSalary = Number(this.state.personalSalary);
       const partnerSalary = Number(this.state.partnerSalary);
       this.props.handleSubmitForm({
           personalSalary: personalSalary, 
           partnerSalary: partnerSalary}
        );
    }
    
    render() {
        return ( 
        
            <form onSubmit={this.handleSubmit}>
                <input type="number" placeholder="Your annual salary" name="personalSalary" value={this.state.personalSalary} onChange={this.handleChange}/>
                <input type="number" placeholder="Your partner's salary" name="partnerSalary" value={this.state.partnerSalary} onChange={this.handleChange}/>
                <input type="submit" value="Calculate" />
            </form>
            
         );
    }
    
}
 
export default MortgageForm;
