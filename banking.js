document.getElementById('deposit-button').addEventListener('click',function(){
    // get amount deposited 
const depositInput=document.getElementById('deposit-amount');
// it is clicker 
const addeddeposit=depositInput.value ;
// you should convert it in parsefloat tahale eta sonkhai ropanter hbe 
const addeddepositfloat=parseFloat(addeddeposit);
// it is form hategora 
const depositTotal=document.getElementById('deposit-total');

const previousdeposit=depositTotal.innerText;
// you should convert it in parsefloat tahale eta sonkhai ropanter hbe 
const previousdepositfloat=parseFloat(previousdeposit);

const newdeposit= previousdepositfloat+ addeddepositfloat;

depositTotal.innerText = newdeposit;



// update account balace 

const balancetotal=document.getElementById('balance-court');
const balanceTotalText=balancetotal.innerText;

const previousbalance=parseFloat(balanceTotalText);
const mainbalance=addeddepositfloat + previousbalance;
balancetotal.innerText=mainbalance;
// clear the iunput field 
depositInput.value='';

});

// handle withdraw 
document.getElementById('withdraw-button').addEventListener('click',function(){
const withdrawinput=document.getElementById('withdraw-amount');
// console.log(withdrawinput);

 const withdrawAmounttext=withdrawinput.value;

const newwithdrawAmounttext= parseFloat(withdrawAmounttext);



// set withdraw balanceTotalText
const withdrawTotal=document.getElementById('withdraw-total');

const previouswithdrawtext=withdrawTotal.innerText;

const previouswithdrawAmounttext= parseFloat(previouswithdrawtext);

const newwithdrawtotal=previouswithdrawAmounttext+newwithdrawAmounttext;

withdrawTotal.innerText=newwithdrawtotal;
//update balance
const balancetotal=document.getElementById('balance-court');
const balanceTotalText=balancetotal.innerText;

const previousbalance=parseFloat(balanceTotalText);
const mainbalance= previousbalance-newwithdrawAmounttext;
balancetotal.innerText=mainbalance;



withdrawinput.value='';


})

