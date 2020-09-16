import React, { Component } from 'react';
import MortgageForm from '../components/MortgageForm';
import MortgageDisplay from '../components/MortgageDisplay';

class MortgageContainer extends Component {

    render() {
        return (
            <>
                <h3>Mortgage Calculator</h3>
                <MortgageForm/>
                <MortgageDisplay/>
            </>
        )
    }
}

export default MortgageContainer;