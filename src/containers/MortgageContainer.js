import React, { Component } from 'react';
import MortgageForm from '../components/MortgageForm';
import MortgageDisplay from '../components/MortgageDisplay';
import MortgageList from '../components/MortgageList';

class MortgageContainer extends Component {

   constructor() {
      super()
      this.state = {
         currentMortgage: {},
         savedMortgages: []
      }
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
      this.handleMortgageSave = this.handleMortgageSave.bind(this);
   }

   handleSubmitForm(submittedForm) {
      submittedForm.id = Date.now();
      submittedForm.mortgage = this.calculate(submittedForm);
      this.setState({
         currentMortgage: submittedForm
      })
   }

   calculate(formData) {
      const basicMortgage = (formData.personalSalary + formData.partnerSalary) * 3;
      const adjustedMortgage = (basicMortgage + formData.deposit) - formData.monthlyOutgoings;
      return adjustedMortgage;
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
            <MortgageDisplay availableMortgage={this.state.currentMortgage.mortgage} handleMortgageSave={this.handleMortgageSave} />
            <MortgageList savedMortgages={this.state.savedMortgages} />
         </>
      )
   }
}

export default MortgageContainer;