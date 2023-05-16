import './App.css';
import { useState } from 'react';
import { MonthlyButton } from './Components/MonthlyButton';
import { AddIncomeButton } from './Components/AddIncomeButton';
import { AddExpenseButton } from './Components/AddExpenseButton';
import { Totals } from './Components/Totals';
import { Savings } from './Components/Savings';
import Image from './Blogo.png'
import React from 'react';



function clearAccountInput(e) {
  if (e.target.value === 'Amount') {
      e.target.value = ""
  };
};

function App() {
  const [monthly, setMonthly] = useState("Monthly Budget");
  var [income, setIncome] = useState(0);
  var [expenses, setExpenses] = useState(0);
  var [savings, setSavings] = useState(0);
  var [incomeArray, setIncomeArray] = useState([0]);
  var [expenseArray, setExpenseArray] = useState([0]);
  var [savingsArray, setSavingsArray] = useState([0]);
  const [incomeCounter, newIncomeLine] = useState(0);
  var [bankAccount, setBankAccount] = useState(0);




  function handleChange(b) {
    let bank = 0;
    if (b.target.value !== "" || !isNaN(b.target.value)) {
      bank = b.target.value;
      bank = parseFloat(bank, 10);
      setBankAccount(bank);
    };
    console.log(bankAccount);
};
  

  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=League Gothic' rel='stylesheet'></link> 
      <div className="App-header">
        <div className='App-body'>
          <img src={Image} className='logo'/>
          <div className='Header-text'>udget<span className='Header-text-dash'>-</span><span className='Header-text-half'>It</span></div>
        </div>
        <div className='App-calc'>
          
          <div className='Month-year'>
            {monthly}
          </div>
          <div className='headRow'>
          <div className='Current-account'>
            Current bank account total: $
            <input type="text" className='Account-amount' defaultValue="Amount" onFocus={(e) => clearAccountInput(e)} onChange={(b) => handleChange(b)} />
          </div>
          <MonthlyButton monthly={monthly} set={setMonthly} incomeArray={incomeArray} savingsArray={savingsArray} expenseArray={expenseArray} setIncome= {setIncome} setExpenses={setExpenses} setSavings={setSavings}></MonthlyButton>
          </div>
          <div>
            <AddIncomeButton text="" setIncome={setIncome} incomeArray={incomeArray} incomeCounter={incomeCounter} newIncomeLine={newIncomeLine}/>
          </div>
          <div >
            <AddExpenseButton text="" setExpenses={setExpenses} expenseArray={expenseArray}/>
          </div>
          <div>
            <Savings text="" setSavings={setSavings} savingsArray={savingsArray}/>
          </div>
          <div>
            <Totals text="" Income={income} Expenses={expenses} Savings={savings} Bank={bankAccount}/>
          </div>
        </div>
      </div>
    </div>
  );
};




export default App;
