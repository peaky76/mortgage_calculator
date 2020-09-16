import React, { Component } from 'react';
import MortgageForm from '../components/MortgageForm';
import MortgageDisplay from '../components/MortgageDisplay';

class MortgageContainer extends Component {

   constructor() {
      super()
      this.state = {
         availableMortgage: ''
      }
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
   }

   handleSubmitForm(submittedForm) {
      const basicMortgage = (submittedForm.personalSalary + submittedForm.partnerSalary) * 3;
      const adjustedMortgage = (basicMortgage + submittedForm.deposit) - submittedForm.monthlyOutgoings;
      this.setState({
         availableMortgage: adjustedMortgage
      })
   }

    render() {
        return (
            <>
                <h3>Mortgage Calculator</h3>
                <MortgageForm handleSubmitForm={this.handleSubmitForm}/>
                <MortgageDisplay availableMortgage={this.state.availableMortgage}/>
            </>
        )
    }
}

export default MortgageContainer;