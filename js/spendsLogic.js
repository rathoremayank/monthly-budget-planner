
// setting monthly income logic----------------------------------------------------------------------------------------------------------------------------------------

let monthlyIncome = 0; 


const saveIncome = (ev)=>{
    ev.preventDefault();

    monthlyIncome = document.getElementById('monthlyIncome').value;

    //document.forms[0].reset();

    //displaying monthlyIncome on browser
    console.warn('monthly income logged', {monthlyIncome});
    
    let h = document.querySelector('#incomeData h1');
    h.textContent = monthlyIncome; 

    let f = document.querySelector('#funds h1');
    f.textContent = monthlyIncome;



    document.getElementById('saveIncomeBtn').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('saveIncomeBtn').addEventListener('click', saveIncome);
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// spends handling logic---------------------------------------------------------------------------------------------------------------------------------------------

let spends = [];

const addSpend = (ev)=>{
    ev.preventDefault();

    let spend = {
        id: Date.now(), 
        spendName: document.getElementById('spendName').value,
        spendAmt: document.getElementById('spendAmt').value
    }
    
    spends.push(spend);
    document.forms[1].reset();

    console.warn('added' , {spends} );

    //displaying JSON on browser
    // let pre = document.querySelector('#spendData pre');
    // pre.textContent = '\n' + JSON.stringify(spends, '\t', 2); 

    //saving to localStorage
    //localStorage.setItem('MySpendList', JSON.stringify(spends) ); 

    calculateFunds(spend.spendAmt);
    refreshTable(spend);

}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('addSpendBtn').addEventListener('click', addSpend);
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

const calculateFunds = (spendAmt)=>{
    let funds = parseInt(document.getElementById('fundsLeft').innerHTML);
    funds = funds - spendAmt;
    console.warn('remaining funds: ', funds);
    let f = document.querySelector('#funds h1');
    f.textContent = funds;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

const refreshTable = (spend)=>{
    var table = document.getElementById('spendsTable');
    var tr = table.insertRow(-1);
    tr.insertCell(-1).innerHTML = spend.id;
    tr.insertCell(-1).innerHTML = spend.spendName;
    tr.insertCell(-1).innerHTML = spend.spendAmt;

}