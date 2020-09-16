import React, { Component } from 'react';

class MortgageForm extends Component {

    constructor() {
        super();
        this.state = {
            personalSalary: '',
            partnerSalary: ''
        }
    }
    
    render() {
        return ( 
        
            <form>
                <input type="text" placeholder="Your annual salary" name="personalSalary" value={this.state.personalSalary}/>
                <input type="text" placeholder="Your partner's salary" name="partnerSalary" value={this.state.partnerSalary} />
            </form>
            
         );
    }
    
}
 
export default MortgageForm;
