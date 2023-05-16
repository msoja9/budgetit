import React from 'react';

function Totals({ Income, Expenses, Savings, Bank }) {

    // console.log(Income);
    // console.log(Expenses);
    // console.log("SAVINGS", Savings);

    var MoneyTotal = Income - Expenses;
    MoneyTotal = MoneyTotal - Savings;

    // console.log(MoneyTotal);
    var SavingsTotal = Savings;
    let moneyColor = 'black';
    let totalColor = 'black';

    var bankAccount = Bank + Income;
    bankAccount = bankAccount - Savings;
    bankAccount = bankAccount - Expenses;

    if (MoneyTotal > 0) {
        moneyColor = "green";
    } else if (MoneyTotal === 0) {
        moneyColor = "black";
    } else {
        moneyColor= "red";
    };

    if (bankAccount > 0) {
        totalColor = "green";
    } else if (bankAccount === 0) {
        totalColor = "black";
    } else {
        totalColor= "red";
    };

    return (
        <div className='Income-body'>
            <span className='Totals-box'>Totals</span>
            <div className='Money-total'>
                Delta: <span style={{color: moneyColor, marginLeft: 4}} id='Delta'>${MoneyTotal}</span>
                <div className='Savings-total'>
                    Savings Total: ${SavingsTotal}
                </div>
                <div className='Savings-total'>
                    Bank Account Total: <span style={{color: totalColor, marginLeft: 4}} id='Delta'>${bankAccount}</span>
                </div>
            </div>

        </div>

    );

};

export { Totals };