//Q1
var x = -9*3; // -27
var y = "value is" + 50; // value is50
var w = 17 % 5;// 2
var s = 5 % 17; //5 
var r = 5/10 ; //0.5


if (4 == 4) {
    //true
 } else {
    // will not see it
 }

 if (4 != 5) {
    // true
 } else {
    // will not see it
 }

 if (7 <= 8) {
    // true 
 } else {
    // will not see it
 }

var c = Math.ceil(2.3) - Math.floor(4.7);// -1

//Q2 
// var num = window.prompt("Enter the number");
// window.alert("The number u entered is " + num);


// Q3
// var num1 = window.prompt("Enter num 1");
// var num2 = window.prompt("Enter num 2");
// if (parseInt(num1)<parseInt(num2)) {
//     window.alert(num1 + " " + num2);
// } else {
//     window.alert(num2 + " " + num1);
// }


//Q4
// var n1 = window.prompt("Enter number 1");
// var n2 = window.prompt("Enter number 2");
// if (n1>n2) {
//     window.alert(n1 + " is larger than "+n2 );
// } else {
//     window.alert(n2 + " is larger than "+n1 );
// }


//Q5 because in the prompt box it takes the value as a string the sum output wan't correct, so i had to convert the numbers to integers so it gives me the right output
// var nm1 = window.prompt("Enter number 1");
// var nm2 = window.prompt("Enter number 2");
// let sum =  parseInt(nm1) + parseInt(nm2);
// window.alert( sum);



// Q6 
// var numm = window.prompt("Enter a number ");
// switch(numm){
//     case "1":
//         window.alert("ONE");
//         break;
//     case "2":
//         window.alert("TWO"); 
//         break;
//     case "3":
//         window.alert("THREE");
//         break;
//     case "4":
//         window.alert("FOUR");
//         break;
//     case "5":
//         window.alert("FIVE");
//         break;
//     case "6":
//         window.alert("SIX");
//         break;
//     case "7":
//         window.alert("SEVEN");
//         break;
//     case "8":
//         window.alert("EIGHT");
//         break;
//     case "9":
//         window.alert("NINE");
//         break;
//     default:
//         window.alert("PLEASE TRY AGAIN");
// }

// Q7
// for (let i =0;i<=5;i++){
//    window.alert(i+" ");
// }

//Q8
// var result="";
// for (let i =0;i<=5;i++){
//    result = result + " "+ i;
// }
// window.alert(result);

//Q9
// var result="";
// for (let i =0;i<=20;i++){
//    if(i%3==0){
//       result = result+ " " + i ;
//    }
// }
// window.alert(result);

//Q10
// var num = window.prompt("Enter a number ");
// for (let i = 0;i<100 ;i++){
//    if(num >100 || n<0) {
//       alert("wrong number ,try again");
//       num = window.prompt("Enter a number");
//    }
// }

//Q11
// var num = window.prompt("Enter a number ");
// for (let i = 0;i<=100 ;i++){
//    if(num >100 || num<0 || isNaN(num)) {
//       alert(" out of range or not a number");
//       num = window.prompt("try again");

//    }
// }

// Q12
// var n = prompt("enter a number");
// var sum = 0 ;
// for(let i=0; i<=n ; i++){
//    sum += i;
// }
// alert(sum);

//Q13
// var n = prompt("enter a number");
// var sum = 0 ;
// var avg;
// for(let i=0; i<=n ; i++){
//    sum += i;
   
// }
// avg = sum/n;
// alert(avg);