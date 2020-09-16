import React from 'react';

const RepaymentDisplay = (props) => {
   if (props.monthlyPayment) {
      return (
         <>
            <h2>Your monthly repayments are £{props.monthlyPayment}</h2>
         </>
      );
   }
   return null;
}

export default RepaymentDisplay;