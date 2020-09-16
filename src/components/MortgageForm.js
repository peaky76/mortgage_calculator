import React, { Component } from 'react';

class MortgageForm extends Component {
    
    render() {
        return ( 
        
            <form>
                <input type="text" placeholder="Your annual salary" name="personalSalary" value={this.state.personalSalary}/>
            </form>
            
         );
    }
    
}
 
export default MortgageForm;
