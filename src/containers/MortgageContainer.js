import React, { Component } from 'react';
import MortgageForm from '../components/MortgageForm';
import MortgageDisplay from '../components/MortgageDisplay';
import MortgageList from '../components/MortgageList';
import RepaymentForm from '../components/RepaymentForm';
import RepaymentDisplay from '../components/RepaymentDisplay';

class MortgageContainer extends Component {

   constructor() {
      super()
      this.state = {
         currentMortgage: {},
         savedMortgages: [],
         monthlyPayment: null
      }
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
      this.handleMortgageSave = this.handleMortgageSave.bind(this);
      this.handleRecalculate = this.handleRecalculate.bind(this);
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

   handleRecalculate(mortgageTerms) {
      const years = mortgageTerms.paymentTerm;
      const rate = (mortgageTerms.interestRate / 100);
      const principal = this.state.currentMortgage.mortgage;
      const monthlyPayment = principal * (rate / 12) * (1 + rate / 12) ^ (12 * years) / (1 + rate / 12) ^ (12 * years) - 1;
      this.setState({
         monthlyPayment: monthlyPayment
      })
   }

   render() {
      return (
         <>
            <h3 className="headline">Mortgage Calculator</h3>
            <MortgageForm handleSubmitForm={this.handleSubmitForm} />
            <RepaymentForm handleRecalculate={this.handleRecalculate} />
            <MortgageDisplay availableMortgage={this.state.currentMortgage.mortgage} handleMortgageSave={this.handleMortgageSave} />
            <RepaymentDisplay monthlyPayment={this.state.monthlyPayment} />
            <MortgageList savedMortgages={this.state.savedMortgages} />
         </>
      )
   }
}

export default MortgageContainer;