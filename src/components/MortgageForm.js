import React, { Component } from 'react';

class MortgageForm extends Component {

    constructor() {
        super();
        this.state = {
            personalSalary: '',
            partnerSalary: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return ( 
        
            <form>
                <input type="number" placeholder="Your annual salary" name="personalSalary" value={this.state.personalSalary} onChange={this.handleChange}/>
                <input type="number" placeholder="Your partner's salary" name="partnerSalary" value={this.state.partnerSalary} onChange={this.handleChange}/>
            </form>
            
         );
    }
    
}
 
export default MortgageForm;
