const event = require('events');
const emmitter = new event.EventEmitter();
const tax = require("./tax");
const handler = require("./Handlers");


exports.account=(bal)=>{
var balance=parseInt(bal);

function withdraw(amt)
{
    if(parseInt(amt)>balance)
    {
        emmitter.emit("lowbalance");
    }
    else{
        balance-=parseInt(amt);
        monitor();
    }

}


function deposit(amt){
balance+=parseInt(amt);
monitor();
}

function monitor()
{
    console.log("balance :: "+balance);
    if(balance<6000)
    {
        emmitter.emit("lowbalance");
    }
    else if(balance>250000)
    {
        emmitter.emit("highbalance");
    }
}

return{
    Monitor:monitor,
    Deposit:deposit,
    Withdraw:withdraw
}

}
emmitter.on("lowbalance",function(){
  handler.emailwarning();
  handler.warning();  
});


emmitter.on("highbalance", function(){
tax.paytax();
})