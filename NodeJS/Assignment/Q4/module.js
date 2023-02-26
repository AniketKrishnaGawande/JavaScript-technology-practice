exports.numbers=()=>
{
var str="";
for(var i=0;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        str=str+i+"fizzbuzz"+"<br>";
    }
    else if(i%3==0)
    {
        str=str+i+"fizz"+"<br>";
    }
    else if(i%5==0)
    {
        str=str+i+"buzz"+"<br>";
    }
    else{
        str+=i+"<br>";
    }
}

return str;
}