import React from 'react';

const MortgageDisplay = ({availableMortgage}) => {
   if (availableMortgage) {
   return ( 
      <>
         <h5>We can offer you a mortgage of £{availableMortgage}</h5>
      </>
    );
   }
   return null;
}
 
export default MortgageDisplay;