import React from 'react';
import { useState } from 'react';


export function AddIncomeButton({ setIncome, incomeArray, incomeCounter, newIncomeLine}) {

    var income = 0;

    function clearIncomeInput(a) {
        if (a.target.value === 'Enter Income') {
            a.target.value = ""
        };
    };

    function clearItemInput(a) {
        if (a.target.value === 'Enter Item Name') {
            a.target.value = ""
        };
    };

    const handleClick = () => {
        newIncomeLine(incomeCounter + 1);
        console.log(newIncomeLine)
    };

    function handleMinusClick(d) {
        // newIncomeLine(incomeCounter - 1);
        var key = parseFloat(d.target.id, 10) + 1;
        console.log(key);
        incomeArray[key] = 0;
        totalIncome(incomeArray);
        // console.log(incomeArray);
        var minusLi = document.getElementById(d.target.id);
        minusLi.remove();
        // console.log("MINUS INCOME", incomeArray);
    };

    function totalIncome() {
        income = 0;
        for (let counter = 0; counter < incomeArray.length; counter++) {
            income = income + parseFloat(incomeArray[counter], 10);
        };
        setIncome(income);
    };

    function handleChange(b) {
        if (b.target.value === "" || isNaN(b.target.value)) {
            incomeArray[0] = 0;
        } else {
            incomeArray[0] = b.target.value;
        };
        totalIncome(incomeArray);
        setIncome(income);
        console.log("FIRST INCOME", incomeArray);
    };

    function addIncome(c) {
        let currentKey = parseFloat(c.target.id, 10) + 1;
        console.log("VAL", c.target.value, "ARRAY ELE", incomeArray[currentKey]);
        if (incomeArray[currentKey] === undefined && c.target.value !== "" && !isNaN(c.target.value)) {
            console.log("UNDEFINED", currentKey);
            incomeArray.push(c.target.value);
            // console.log("ARRAY2", incomeArray);
            totalIncome(incomeArray);
        } else if (c.target.value === "" || isNaN(c.target.value)) {
            incomeArray[currentKey] = 0;
            totalIncome(incomeArray);
        } else {
            // console.log("ELSE");
            incomeArray[currentKey] = c.target.value;
            totalIncome(incomeArray);
        };
        console.log("OTHER INCOME", incomeArray);
    };


    return (
        <div className='Income-body'>
            <span className='Income-box'>Income</span>
            <li className='ulList' key='first'>
                <button className='Income-button' onClick={handleClick}>+</button>
                <input type="text" className='Income-item' defaultValue="Enter Item Name" onFocus={(e) => clearItemInput(e)} />
                <span> $</span>
                <input type="text" id = "-1-1" className='Income-amount' defaultValue="Enter Income" onFocus={(e) => clearIncomeInput(e)} onChange={(b) => handleChange(b)} />
            </li>
            {Array.from(Array(incomeCounter)).map((c, index) => {
                return (
                    <form className='Income-formMinus' id={index}>
                        <li className='ulListkey' key={index} >
                            <button type="button" id={index}  className='Income-buttonMinus' onClick={(d) => handleMinusClick(d)}> - </button>
                            <input type="text" id={index} className='Income-item' defaultValue="Enter Item Name" onFocus={(e) => clearItemInput(e)} />
                            <span> $</span>
                            <input type="text" id={index} className='Income-amount' defaultValue="Enter Income" onFocus={(e) => clearIncomeInput(e)} onChange={(c) => addIncome(c)} />
                        </li>
                    </form>
                )
            })
            }
        </div>

    );

};

