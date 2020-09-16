import React, { Component } from 'react';

class MortgageDisplay extends Component {
   constructor() {
      super();
      this.handleSave = this.handleSave.bind(this);
   }

   handleSave(event) {
      event.preventDefault();
      this.props.handleMortgageSave(true);
   }

   render() {
      if (this.props.availableMortgage)
         return (

            <form onSubmit={this.handleSave}>
               <h5>We can offer you a mortgage of £{this.props.availableMortgage}</h5>
               <input className="button" type="submit" value="Save" />
            </form>
         )
      return null;
   }
}


export default MortgageDisplay;