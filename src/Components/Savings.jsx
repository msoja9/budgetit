import React from 'react';
import { useState } from 'react';

function Savings({setSavings, savingsArray}) {

    const [savingsCounter, newSavingsLine] = useState(0);
    var savings = 0;

    function clearSavingsInput(e) {
        if (e.target.value === 'Enter Savings Amount') {
            e.target.value = ""
        };
    };

    function clearItemInput(e) {
        if (e.target.value === 'Enter Savings Account') {
            e.target.value = ""
        };
    };

    const handleClick = () => {
        newSavingsLine(savingsCounter + 1);
        console.log(newSavingsLine)
    };

    function handleMinusClick(d){
        // newExpenseLine(expenseCounter - 1);
        var key = parseFloat(d.target.id, 10) + 1;
        console.log(key);
        savingsArray[key] = 0;
        totalSavings(savingsArray);
        // console.log(incomeArray);
        var minusLi = document.getElementById(d.target.id);
        minusLi.remove();
    };

    function totalSavings() {
        savings = 0;
        for (let counter = 0; counter < savingsArray.length; counter++) {
            savings = savings + parseFloat(savingsArray[counter], 10);
        };
        setSavings(savings);
    };

    function handleChange(b) {
        if (b.target.value === "" || isNaN(b.target.value)) {
            savingsArray[0] = 0;
        } else {
            savingsArray[0] = b.target.value;
        };
        totalSavings(savingsArray);
        setSavings(savings);
        console.log("FIRST SAVING", savingsArray);
    };

    function addSavings(c) {
        let currentKey = parseFloat(c.target.id, 10) + 1;
        console.log("VAL", c.target.value, "ARRAY ELE", savingsArray[currentKey]);
        if (savingsArray[currentKey] === undefined && c.target.value !== "" && !isNaN(c.target.value)) {
            console.log("UNDEFINED", currentKey);
            savingsArray.push(c.target.value);
            // console.log("ARRAY2", incomeArray);
            totalSavings(savingsArray);
        } else if (c.target.value === "" || isNaN(c.target.value)) {
            savingsArray[currentKey] = 0;
            totalSavings(savingsArray);
        } else {
            // console.log("ELSE");
            savingsArray[currentKey] = c.target.value;
            totalSavings(savingsArray);
        };
        console.log("OTHER EXPENSE", savingsArray);
    };


    return (
        <div className='Income-body'>
            <span className='Savings-box'>Savings</span>
            <li className='ulList' key="first">
                <button className='Income-button' onClick={handleClick}>+</button>
                <input type="text" className='Savings-item' defaultValue="Enter Savings Account" onFocus={(e) => clearItemInput(e)} />
                <span> $</span>
                <input type="text" id = "-1" className='Savings-amount' defaultValue="Enter Savings Amount" onFocus={(e) => clearSavingsInput(e)} onChange={(b) => handleChange(b)}/>
            </li>
            {Array.from(Array(savingsCounter)).map((c, index) => {
                    return (
                        <form className='Income-formMinus' id={index}>
                            <li className='ulListkey' key={index}>
                                <button type="button" id={index} className='Income-buttonMinus' onClick={handleMinusClick}> - </button>
                                <input type="text" id={index} className='Savings-item' defaultValue="Enter Savings Account" onFocus={(e) => clearItemInput(e)} />
                                <span> $</span>
                                <input type="text" id={index} className='Savings-amount' defaultValue="Enter Savings Amount" onFocus={(e) => clearSavingsInput(e)} onChange={(c) => addSavings(c)}/>
                            </li>
                        </form>
                    )
                } 
            )}


        </div>

    );

};

export { Savings };