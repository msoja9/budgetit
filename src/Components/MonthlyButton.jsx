import React from 'react';

export function MonthlyButton({ monthly, set, incomeArray, expenseArray, savingsArray, setIncome, setExpenses, setSavings}) {
  
  
  function total(array, setObject) {
    var object = 0;
    for (let counter = 0; counter < array.length; counter++) {
        object = object + parseFloat(array[counter], 10);
    };
    setObject(object);
    console.log(object);
  };
  
  function handleClick() {
    if (monthly === "Monthly Budget") {
      set("Yearly Budget")
      var newIncomeArray = [];
      var newExpenseArray = [];
      var newSavingsArray =[];

      var div = document.getElementsByClassName("Income-amount");
      console.log(div);
      if (div[0].value !== "Enter Income"){
        for (let input = 0; input < div.length; input++){
          var value = parseFloat(div[input].value, 10);
          value = value * 12;
          div[input].value = value;
          newIncomeArray.push(value);
        };
        console.log(newIncomeArray);
        console.log(newIncomeArray.length);
          total(newIncomeArray, setIncome);
      };

      var divE = document.getElementsByClassName("Expense-amount");
      console.log(divE);
      if (divE[0].value !== "Enter Expense"){
        for (let inputE = 0; inputE < divE.length; inputE++){
          var valueE = parseFloat(divE[inputE].value, 10);
          valueE = valueE * 12;
          divE[inputE].value = valueE;
          newExpenseArray.push(valueE);
        };
        console.log(newExpenseArray);
        total(newExpenseArray, setExpenses);
      };

      var divS = document.getElementsByClassName("Savings-amount");
      console.log(divS);
      if (divS[0].value !== "Enter Savings Amount"){
        for (let inputS = 0; inputS < divS.length; inputS++){
          var valueS = parseFloat(divS[inputS].value, 10);
          valueS = valueS * 12;
          divS[inputS].value = valueS;
          newSavingsArray.push(valueS);
        };
        console.log(newSavingsArray);
        total(newSavingsArray, setSavings);
      };

    } else {
      set("Monthly Budget")
      var newIncomeArray = [];
      var newExpenseArray = [];
      var newSavingsArray =[];

      var div = document.getElementsByClassName("Income-amount");
      console.log(div);
      if (div[0].value !== "Enter Income"){
        for (let input = 0; input < div.length; input++){
          var value = parseFloat(div[input].value, 10);
          value = value / 12;
          div[input].value = value;
          newIncomeArray.push(value);
        };
        console.log(newIncomeArray);
          total(newIncomeArray, setIncome);
      };

      var divE = document.getElementsByClassName("Expense-amount");
      console.log(divE);
      if (divE[0].value !== "Enter Expense"){
        for (let inputE = 0; inputE < divE.length; inputE++){
          var valueE = parseFloat(divE[inputE].value, 10);
          valueE = valueE / 12;
          divE[inputE].value = valueE;
          newExpenseArray.push(valueE);
        };
        console.log(newExpenseArray);
        total(newExpenseArray, setExpenses);
      };

      var divS = document.getElementsByClassName("Savings-amount");
      console.log(divS);
      if (divS[0].value !== "Enter Savings Amount"){
        for (let inputS = 0; inputS < divS.length; inputS++){
          var valueS = parseFloat(divS[inputS].value, 10);
          valueS = valueS / 12;
          divS[inputS].value = valueS;
          newSavingsArray.push(valueS);
        };
        console.log(newSavingsArray);
        total(newSavingsArray, setSavings);
      };
    };
  }
  return (
    <button className='Timeframe' onClick={handleClick}> Monthly/Yearly</button>
  )
};