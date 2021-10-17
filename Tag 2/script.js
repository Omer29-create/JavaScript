"use strict";
//Variablen
console.log(meineVariable); //Hoisting

//Globaler Scope
var leereVariable;
var meineVariable = 42;
meineVariable = "Jessica";

console.log(leereVariable);
console.log(meineVariable);

function meineFunction(){
    // Funktions-Scope
    var coTeacher = "Jessy";
    console.log(coTeacher);
    // kann Variablen im globalen Scope erreichen
    console.log(meineVariable);
}

meineFunction();
//kann nicht von außen in den Funktions-Scope greifen
//console.log(coTeacher);
// ReferenceError: coTeacher is not defined


//seit ES6 werden Variablen über Schlüsselwort let erzeugt

//console.log(myLetVariable); //kein Hoisting
//ReferenceError: can't access lexical declaration
//myLetVariable' before initialization
let myLetVariable = 21;

//Blockscope
{
    let myBlockVariable = "Thor";
    console.log(myBlockVariable);
    myLetVariable = 42;
    console.log(myLetVariable);
}

//console.log(myBlockVariable);
// ReferenceError: myBlockVariable is not defined
console.log(myLetVariable);


let myCat, myCar, myDog, myHome, myHero, myNumber = 42;
myCat = "Lucy";

{
  /*  let name = prompt("Dein Name bitte:");
    console.log(name);*/
}

{
    //Konstanten

    const TAX_RATE = 1.19;
    // TAX_RATE = 1.49;  //TypeError3q
}

{
    // JS Datentypen
    // dynamische Typisierung

    // Zahlen
    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);

    console.log(1/0);    //Infinity
    console.log(-1/0);   //-Infinity
    console.log(0/0);    // NaN (number)
}
