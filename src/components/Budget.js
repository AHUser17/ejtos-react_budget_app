import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    var { budget, currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
       
    const setBudget = (value) => {
        console.log('Value: '+value)
        console.log('Budget: '+budget)

        let oldBudget = budget
        budget=value

        if (budget>20000) {
            alert("The value cannot exceed 20000 £");
            budget=oldBudget;
            return;
        }

        if(budget<totalExpenses){
            alert("The value cannot be lower than the Spent so far")
            budget=oldBudget
            return;
        }

        let action = {
            type: 'SET_BUDGET',
            payload: budget
        }

        dispatch(action);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '1rem' , height: '1.5em', size: 10}}
                        onChange={(event) => setBudget(event.target.value)}
                        step='10'
                >
                </input></span>
        </div>
    );

};
export default Budget;
