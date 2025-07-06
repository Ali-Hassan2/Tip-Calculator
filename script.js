let inputOne = document.getElementById('bill-amt');
let inputTwo = document.getElementById('guests');
let btnn = document.getElementById('btn');
let options = document.getElementById('options');
let cal = document.getElementById('chec');
let tipAmount = document.getElementById('tip-amount');

btnn.addEventListener('click', function(){

    let tip = ((inputOne.value * options.value)/inputTwo.value);
    cal.innerHTML = 'Amount ' + tip + '$';
    cal.style.visibility = this.hidden;
    inputOne.value = '';
    inputTwo.value = ''
    options.value = '';
});