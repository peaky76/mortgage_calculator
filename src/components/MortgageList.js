import React from 'react';
import ListItem from './ListItem';

const MortgageList = ({ savedMortgages }) => {
   const mortgageNodes = savedMortgages.map((mortgage) => {
      return (
         <ListItem key={mortgage.id} mortgage={mortgage} />
      )
   })

   return (

      <ul>
         {mortgageNodes}
      </ul>


   );
}

export default MortgageList;