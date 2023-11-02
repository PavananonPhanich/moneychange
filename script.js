const currency_one = document.getElementById('currency-one'); //สกุลเงิน
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one'); //จำนวนเงิน
const amount_two = document.getElementById('amount-two');

const rateText = document.getElementById('rate'); //อัตราแลกเปลี่น
const swap = document.getElementById('btn')

currency_one.addEventListener('change',calculatemoney);
currency_two.addEventListener('change',calculatemoney);

amount_one.addEventListener('input',calculatemoney);
amount_two.addEventListener('input',calculatemoney);

function calculatemoney() {
    const one = currency_one.value;
    const two = currency_two.value;
    fetch(`https://v6.exchangerate-api.com/v6/6a196b1a2af4b75c621287a0/latest/${one}`)
    .then(res=>res.json())
    .then(data=>{
        const rate = data.conversion_rates[two]
        console.log(rate)
        rateText.innerHTML = `1 ${one} = ${rate} ${two}`
        amount_two.value = (amount_one.value * rate)
    })
}
swap.addEventListener('click',()=>{
    const mon_1 = currency_one.value
    currency_one.value = currency_two.value
    currency_two.value = mon_1  
})
