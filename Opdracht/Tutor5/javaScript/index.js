console.log("hello")
console.log("Alles ok?")

document.write("<h2>Hoe gaat het met jou?</h2>")

document.getElementById("titel").innerHTML= "Hello friend"
document.querySelector("#tekst").innerHTML = "dit was wat veel tekst"

var x = 5;
var x = 10;
x = 12;

let y = 5;
let a = 12;
a = 15;

const b = 5;
// const c = 10;

//nummers
 let d = 6;
// let result = d + c;

// let tekst = "hello";
// let lijst = [{naam: "An", plaats:"Beerzel"},{naam: "An", plaats:"Beerzel"}]
// let arr = [ 1,2,3,4];
// let g;
// g = "5";
// result= d*c
// result = c/d
// result = c-d
// result = g + c
// result = c + g
// result = tekst +" "+ c;

// result = 1 === "1";
// result = 10 < "b" ;
// result = 1 !== 2; 
// result = 10;
// if(b > result ){ 
//     console.log("dit is het resultaat:", result);
// }else if (b < result){
//     console.log("het resultaat is bijna 20");
// }
//ternary operator
let result;
result < 5 ? console.log("hiephiep") : console.log("hop hop");
result = 6;
result = result > 5 ? result > 10 ? "result is groter dan 10" : "result is kleiner dan 10": "result is kleiner dan 5";
result = 10
if(result== 10 || result == 5){
    console.log("result is kleiner dan 5 en groter dan 10");
}else{
    console.log(result)
}

//oefening
let leeftijd = 12;
if(leeftijd < 16){
    console.log("je mag geen alcohol drinken")
}else{
    console.log("je mag alcohol drinken")
}
