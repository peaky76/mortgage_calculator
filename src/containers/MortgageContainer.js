import React, { Component } from 'react';
import MortgageForm from '../components/MortgageForm';
import MortgageDisplay from '../components/MortgageDisplay';

class MortgageContainer extends Component {

   constructor() {
      super()
      this.state = {
         availableMortgage: '',
         currentMortgage: {},
         savedMortgages: []
      }
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
      this.handleMortgageSave = this.handleMortgageSave.bind(this);
   }

   handleSubmitForm(submittedForm) {
      submittedForm.id = Date.now();
      const basicMortgage = (submittedForm.personalSalary + submittedForm.partnerSalary) * 3;
      const adjustedMortgage = (basicMortgage + submittedForm.deposit) - submittedForm.monthlyOutgoings;
      this.setState({
         availableMortgage: adjustedMortgage,
         currentMortgage: submittedForm
      })
   }

   handleMortgageSave(bool) {
      const updatedList = [...this.state.savedMortgages, this.state.currentMortgage];
      this.setState({
         savedMortgages: updatedList
      });
   }

   render() {
      return (
         <>
            <h3>Mortgage Calculator</h3>
            <MortgageForm handleSubmitForm={this.handleSubmitForm} />
            <MortgageDisplay availableMortgage={this.state.availableMortgage} handleMortgageSave={this.handleMortgageSave} />
         </>
      )
   }
}

export default MortgageContainer;