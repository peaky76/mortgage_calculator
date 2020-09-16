import React, { Component } from 'react';

class RepaymentForm extends Component {

   constructor() {
      super();
      this.state = {
         interestRate: '',
         paymentTerm: '',
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
      const interestRate = Number(this.state.interestRate);
      const paymentTerm = Number(this.state.paymentTerm);
      this.props.handleRecalculate({
         interestRate,
         paymentTerm
      }
      );
      this.setState({
         interestRate: '',
         paymentTerm: ''
      })
   }

   render() {
      return (

         <form onSubmit={this.handleSubmit}>
            <div className="input-boxes">
               <input type="number" placeholder="Interest rate (%)" name="interestRate" value={this.state.interestRate} onChange={this.handleChange} />
               <input type="number" placeholder="Payment term (years)" name="paymentTerm" value={this.state.paymentTerm} onChange={this.handleChange} />
            </div>
            <input className="button" type="submit" value="Recalculate" />
         </form>

      );
   }


}


export default RepaymentForm;