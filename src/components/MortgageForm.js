import React, { Component } from 'react';

class MortgageForm extends Component {

    constructor() {
        super();
        this.state = {
            personalSalary: '',
            partnerSalary: '',
            deposit: '',
            monthlyOutgoings: ''
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
        const personalSalary = Number(this.state.personalSalary);
        const partnerSalary = Number(this.state.partnerSalary);
        const deposit = Number(this.state.deposit);
        const monthlyOutgoings = Number(this.state.monthlyOutgoings);
        if (!personalSalary) {
            return;
        }
        this.props.handleSubmitForm({
            personalSalary,
            partnerSalary,
            deposit,
            monthlyOutgoings
        }
        );
        // this.setState({
        //     personalSalary: '',
        //     partnerSalary: ''
        // })
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input type="number" placeholder="Your annual salary" name="personalSalary" value={this.state.personalSalary} onChange={this.handleChange} />
                <input type="number" placeholder="Your partner's salary" name="partnerSalary" value={this.state.partnerSalary} onChange={this.handleChange} />
                <input type="number" placeholder="Your deposit (optional)" name="deposit" value={this.state.deposit} onChange={this.handleChange} />
                <input type="number" placeholder="Your monthly outgoings (optional)" name="monthlyOutgoings" value={this.state.monthlyOutgoings} onChange={this.handleChange} />
                <input type="submit" value="Calculate" />
            </form>

        );
    }

}

export default MortgageForm;
