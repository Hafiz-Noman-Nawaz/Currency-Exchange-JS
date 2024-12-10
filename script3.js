let currencyOne = document.getElementById('currency-one');
let currencyTwo = document.getElementById('currency-two');
let rateEl = document.getElementById('rate');
let ammountOne = document.getElementById('amount-one');
let ammountTwo = document.getElementById('amount-two');

function getdata(){
    let currencyElOne = currencyOne.value;
    let currencyElTwo = currencyTwo.value;

    fetch('https://open.exchangerate-api.com/v6/latest').then(res => res.json()).then(data => {
        console.log(data.rates);
        let rate = data.rates[currencyElTwo] / data.rates[currencyElOne];
        console.log(rate);
        rateEl.innerText = `1 ${currencyElTwo} = ${rate} ${currencyElOne}`;
        ammountTwo.value = (ammountOne.value * rate).toFixed(2);
    })

}

currencyOne.addEventListener('change', getdata);
currencyTwo.addEventListener('change', getdata);
ammountOne.addEventListener('input', getdata);
ammountTwo.addEventListener('input', getdata);
getdata()