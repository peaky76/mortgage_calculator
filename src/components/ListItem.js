import React, { Component } from 'react';

class ListItem extends Component {

   render() {
      let personal = <div>Your salary: £{this.props.mortgage.personalSalary}</div>
      let partner, deposit, monthlyOutgoings = null;

      if (this.props.mortgage.partnerSalary) {
         partner = <div>Your partner's salary: £{this.props.mortgage.partnerSalary}</div>
      }
      if (this.props.mortgage.deposit) {
         deposit = <div>Your deposit: £{this.props.mortgage.deposit}</div>
      }
      if (this.props.mortgage.monthlyOutgoings) {
         monthlyOutgoings = <div>Your outgoings: £{this.props.mortgage.monthlyOutgoings}</div>
      }
      let mortgage = <div>Mortgage offer: £{this.props.mortgage.mortgage} </div>

      return (
         <li className="wrapper">
            {personal}
            {partner}
            {deposit}
            {monthlyOutgoings}
            {mortgage}
         </li>
      )
   }
}

export default ListItem;