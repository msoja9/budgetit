import React from 'react';
import { useState } from 'react';

function AddExpenseButton({setExpenses, expenseArray }) {

    const [expenseCounter, newExpenseLine] = useState(0);
    var expenses = 0;

    function clearExpenseInput(a) {
        if (a.target.value === 'Enter Expense') {
            a.target.value = ""
        };
    };

    function clearItemInput(a) {
        if (a.target.value === 'Enter Expense Name') {
            a.target.value = ""
        };
    };

    const handleClick = () => {
        newExpenseLine(expenseCounter + 1);
        console.log(newExpenseLine)
    };

    function handleMinusClick(d){
        // newExpenseLine(expenseCounter - 1);
        var key = parseFloat(d.target.id, 10) + 1;
        console.log(key);
        expenseArray[key] = 0;
        totalExpense(expenseArray);
        // console.log(incomeArray);
        var minusLi = document.getElementById(d.target.id);
        minusLi.remove();
    };

    function totalExpense() {
        expenses = 0;
        for (let counter = 0; counter < expenseArray.length; counter++) {
            expenses = expenses + parseFloat(expenseArray[counter], 10);
        };
        setExpenses(expenses);
    };

    function handleChange(b) {
        if (b.target.value === "" || isNaN(b.target.value)) {
            expenseArray[0] = 0;
        } else {
            expenseArray[0] = b.target.value;
        };
        totalExpense(expenseArray);
        setExpenses(expenses);
        console.log("FIRST EXPENSE", expenseArray);
    };


    function addExpense(c) {
        let currentKey = parseFloat(c.target.id, 10) + 1;
        console.log("VAL", c.target.value, "ARRAY ELE", expenseArray[currentKey]);
        if (expenseArray[currentKey] === undefined && c.target.value !== "" && !isNaN(c.target.value)) {
            console.log("UNDEFINED", currentKey);
            expenseArray.push(c.target.value);
            // console.log("ARRAY2", incomeArray);
            totalExpense(expenseArray);
        } else if (c.target.value === "" || isNaN(c.target.value)) {
            expenseArray[currentKey] = 0;
            totalExpense(expenseArray);
        } else {
            // console.log("ELSE");
            expenseArray[currentKey] = c.target.value;
            totalExpense(expenseArray);
        };
        console.log("OTHER EXPENSE", expenseArray);
    };


    return (
        <div className='Income-body'>
            <span className='Expense-box'>Expenses</span>
            <li className='ulList' key="first">
                <button className='Income-button' onClick={handleClick}>+</button>
                <input type="text" className='Expense-item' defaultValue="Enter Expense Name" onFocus={(e) => clearItemInput(e)} />
                <span> $</span>
                <input type="text" id = "-1" className='Expense-amount' defaultValue="Enter Expense" onFocus={(e) => clearExpenseInput(e)} onChange={(b) => handleChange(b)}/>
            </li>
            {Array.from(Array(expenseCounter)).map((c, index) => {
                    return (
                        <form className='Income-formMinus' id={index}>
                            <li className='ulListkey' key={index}>
                                <button type="button" id={index} className='Income-buttonMinus' onClick={handleMinusClick}> - </button>
                                <input type="text" id={index} className='Expense-item' defaultValue="Enter Expense Name" onFocus={(e) => clearItemInput(e)} />
                                <span> $</span>
                                <input type="text" id={index} className='Expense-amount' defaultValue="Enter Expense" onFocus={(e) => clearExpenseInput(e)} onChange={(c) => addExpense(c)}/>
                            </li>
                        </form>
                    )
                } 

            )}

        </div>

    );

};

export { AddExpenseButton };