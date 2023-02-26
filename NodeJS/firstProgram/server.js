function show(){
    console.log("hello");
}
function display(){
    console.log("good morning")
}
// calling api once
//show();
//display();
// how to run 
//1. go to folder of file then in cmd write node filename.js
// 2. here go to run --> select environment as nodejs

 // calling api after some interval
 setInterval(show,1000);
 setInterval(display,1000);