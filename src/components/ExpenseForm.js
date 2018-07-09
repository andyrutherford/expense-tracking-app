import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            category: props.expense ? props.expense.category : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onCategoryChange = (e) => {
        console.log('category is changing!');
        const category = e.target.value;
        this.setState(() => ({ category }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        //Enforce number is of format XXX.XX
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=> ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        //Don't allow user to clear date for date picker
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        //Prevent page refresh on submit
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide a description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                category: this.state.category,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit} >
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    text="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <select
                    className="select"
                    value={this.state.category}
                    onChange={this.onCategoryChange}
                >
                    <option 
                        value="none">Category</option>
                    <option 
                        value="personal">Personal</option>
                    <option 
                        value="family">Family</option>
                    <option 
                        value="business">Business</option>
                </select>
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false }
                />
                <textarea
                    placeholder="Add a note for your expense"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        );
    }
}