"use strict";

// Variablen

console.log(meineVariable);  // Hoisting

// globaler Scope
var leereVariable;
var meineVariable = 42;
meineVariable = "Jessica";

console.log(leereVariable);
console.log(meineVariable);

function meineFunction() {
    // Funktions-Scope
    var coTeacher = "Jessy";
    console.log(coTeacher);
    // kann Variablen im globalen Scope erreichen
    console.log(meineVariable);
}

meineFunction();
// kann nicht von außen in den Funktions-Scope greifen
// console.log(coTeacher);  
// ReferenceError: coTeacher is not defined


// seit ES6 werden Variablen über Schlüsselwort let erzeugt

// console.log(myLetVariable); // kein Hoisting
// ReferenceError: can't access lexical declaration `myLetVariable' before initialization
let myLetVariable = 21;
console.log(myLetVariable); 

{
    // Blockscope
    let myBlockVariable = "Thor";
    console.log(myBlockVariable);
    myLetVariable = 42;
    console.log(myLetVariable); 
}

// console.log(myBlockVariable);
// ReferenceError: myBlockVariable is not defined
console.log(myLetVariable); 


let myCat, myCar, myDog, myHome, myHero, myNumber = 42;
myCat = "lucy";

{
/*     let name = prompt("Dein Name bitte:");
    console.log(name); */
}

{
    // Konstanten
    /*
        benötigen sofortige Zuweisung
        sind unveränderlich (konstant)
        haben gleichen Scope wie Variablen, die mit let erzeugt wurden
        zur Vermeidung von Magic Numbers
        machen schnelle und zentrale Änderung von Werten möglich
    */
    const TAX_RATE = 1.19; 
    // TAX_RATE = 1.49; // TypeError

    let nettoPrice = 100;
    let total = nettoPrice * TAX_RATE;
    console.log(total);
}

{
    // JS Datentypen
    // dynamische Typisierung

    // Zahlen (number)
    console.log(Number.MIN_VALUE);
    console.log(Number.MAX_VALUE);

    console.log(1 / 0);     // Infinity (number)
    console.log(-1 / 0);    // -Infinity (number)
    console.log(0 / 0);     // NaN (number)

    // NaN (Not a Number) = Ergebnis einer fehlgeschlagenen mathematischen Operation oder fehlgeschlagenen Typkonvertierung


    // Zeichenkette (string)
    // gekennzeichnet durch "" oder ''
    // besteht aus 0+ Zeichen

    let myText = '<p class="texte">Mein Text</p>';
    myText = "<p class='texte'>Mein Text</p>";
    myText = "<p class=\"texte\">Mein Text</p>";
    myText = "Mein Text mit \nZeilenumbruch.";
    myText = "C:\\neuer Ordner";
    
    console.log(myText);


    // Wahrheitswerte (boolean)
    // true / false

    // Funktionen (function)

    // Objekte (object)
    // Arrays = vordefinierte Objekte

    // undefined    => nicht zugewiesene Variable
    // null         => leerer Objektzeiger / nicht zugewiesenes Objekt

}

{
    // Datentyp ermitteln über typeof-Operator
    // Syntax typeof Operand
    // Rückgabe = Datentyp des Operanden als string

    console.log(typeof 42);
    console.log(typeof typeof 42);
    console.log(typeof "42");
    console.log(typeof true);
    console.log(typeof NaN);
    console.log(typeof null);
    console.log(typeof undefined);

    let myVar;
    console.log(typeof myVar);
    myVar = "Jessica";
    console.log(typeof myVar);
    myVar = 42;
    console.log(typeof myVar);
}

{
    /*
        Datentyp Number

        numerische Operatoren
        +   Adition
        -   Subtraktion
        *   Multiplikation
        /   Division
        %   Modulo (Rest einer ganzzahligen Division)
        **  Potenz (seit ECMA 2016)    
    */

   console.log(42 / 4);     // 10.5
   console.log(42 % 4);     // 2 ( da 42 / 4 = 10  +  Rest 2)
   console.log(40 % 4);     // 0 ( da 40 / 4 = 10  +  Rest 0)
   console.log(5 % 2);      // 1 
   console.log(4 % 2);      // 0 

   // gilt Punkt- vor Strich-Rechnung
   console.log(2 * 40 - 5 / 4);
   // Priorisierung durch Klammerung möglich
   console.log(2 * (40 - 5) / 4);


   let mySum, a = 2, b = 3;

   // a = a + b;
    a += b;     // Krzschreibweise
   console.log(a);

    // a = a * b;
    a *= b;     // Krzschreibweise
    console.log(a);

    // Mehrfachzuweisungen
    mySum = a = b = 42;
}

{
    /* 
    
    Inkrement- / Dekrement-Operator
    schrittweise vergrößern / verkleinern

    Ooerator    Beispiel    Interpretation
    ++          a = b++;    a = b; b = b + 1;
    ++          a = ++b;    b = b + 1; a = b;
    --          a = b--;    a = b; b = b - 1;
    --          a = --b;    b = b - 1; a = b; 
    */

    let a = 1;
    console.log(a++);   // 1
    console.log(a);     // 2
    /*
    console.log(a);  
    a += 1;
    */

    a = 1;
    console.log(++a);   // 2
    console.log(a);     // 2
    /*
    a += 1;
    console.log(a);  
    */
}

{
    // Verkettungsoperator +
    // bei numerischen Operationen - Addition
    // bei string - Verkettung

    let hero = "Jessy";
    console.log("hey " + hero + ". Wellcome Home! ");

    let a = "1";            // string
    let b = 2, c = 3;       // number

    console.log(b + c);     // 5 (number)
    console.log(a + c);           // 13 (string)
    console.log(a + (b + c));     // 15 (string)
}

{
    // implizite Typkonvertierung
    let a = "2";            // string
    let b = 4, c = 3;       // number
    console.log(a * b);     // 8 (number)
    console.log(a / b);     // 0.5 (number)
    console.log(a - b * c);     // -10 (number)
    console.log("15" - "6");    // 9 (number)
    console.log("Jessy" * 3);   // NaN (NaN * 3 = NaN)


    // explizite Typkonvertierung
    console.log(a + b);         // 24 (string)
    console.log((a * 1) + b);   // 6 (number)
    console.log(Number(a) + b); // 6 (number)

    console.log(Number("-10.259875"));  // -10.259875 (number)
    console.log(Number("Jessy"));       // NaN (number)
    console.log(Number(true));          // 1 (number)
    console.log(Number(false));         // 0 (number)
    console.log(Number(null));          // 0 (number)
    console.log(Number(" 10"));         // 10 (number)
    console.log(Number(" 10 20"));      // NaN (number)
    console.log(Number(" 10 Jessys"));  // NaN (number)

    /* 
    let price_1 = Number(prompt("Preis Artikel 1:"));
    let price_2 = prompt("Preis Artikel 2:");
    console.log(price_1 + Number(price_2));
    */

    console.log(5 + null);  // 5, null wird in 0 konvertiert
    console.log(5 + true);  // 6, true wird in 1 konvertiert
    console.log(5 + false);  // 5, false wird in 0 konvertiert
    console.log(5 + undefined);  // NaN
    console.log("5" + null);  // 5null

    console.log(5 + "");     // 5 (string)

    // parseInt() versucht übergebenen Ausdruck in Ganzzahl zu überführen
    console.log(parseInt("42"));            // 42 (number)
    console.log(parseInt("-33.56987"));     // -33 (number)
    console.log(parseInt("Jessy"));         // NaN (number)
    console.log(parseInt("42 * Jessy"));    // 42 (number)
    console.log(parseInt("36px"));          // 36 (number)
    console.log(parseInt(" 42 20 105"));    // 42 (number)
    console.log(parseInt("font-size: 36px"));  // NaN (number)
    console.log(parseInt(true));            // NaN (number)
    console.log(parseInt(false));           // NaN (number)
    console.log(parseInt(null));            // NaN (number)

    // parseFloat() versucht übergebenen Ausdruck in Dezimalzahl zu überführen
    console.log(parseFloat("42"));            // 42 (number)
    console.log(parseFloat("-33.56987"));     // -33.56987 (number)
    console.log(parseFloat("Jessy"));         // NaN (number)
    console.log(parseFloat("4.2 * Jessy"));   // 4.2 (number)
    console.log(parseFloat("36.5px"));        // 36.5 (number)
    console.log(parseFloat(" 42 20 105"));    // 42 (number)
    console.log(parseFloat("font-size: 36px"));  // NaN (number)
    console.log(parseFloat(true));            // NaN (number)
    console.log(parseFloat(false));           // NaN (number)
    console.log(parseFloat(null));            // NaN (number) 
}

{
    // Test auf NaN

    // isNaN() liefert false, wenn Konvertierung in Numberformat erfolgreich
    // isNaN() liefert true, wenn Konvertierung in Numberformat fehlgeschlagen

    console.log(isNaN(42));     // false
    console.log(isNaN("42"));   // false
    console.log(isNaN("42 Jessys")); // true
    console.log(isNaN("Jessica"));   // true

    // Vergleiche auf NaN funktionieren nicht, da NaN nichts gleicht, nicht einmal sich selbst
    // daher benötigen wir testfunktion isNaN()
}

{
    // Math-Object
    // Sammlung von mathemat. Methoden und Konstanten
    console.log(Math);

    // Konstante PI
    console.log(Math.PI);

    // Wurzel ziehen
    console.log(Math.sqrt(9));

    // Potenz
    // erwartet 2 Argumente (zahl, potenz)
    console.log(Math.pow(2,3)); //8
    console.log(Math.pow(2,5)); //32
    console.log(Math.pow(5,2)); //25

    // prüfen, ob Zahl positiv, negativ oder 0
    console.log(Math.sign(42));   // 1 (positive Zahl)
    console.log(Math.sign(-42));  // -1 (negative Zahl)
    console.log(Math.sign(0));    // 0 

    // absolute Zahl
    console.log(Math.abs(-42.356)); // 42.356

    // größten oder kleinsten Wert aus übergebenen Argumenten ermitteln
    console.log(Math.max(11,42,33,2,99,86));
    console.log(Math.min(11,42,33,2,99,86));
    
    // Runden
    // generelles Aufrunden
    console.log(Math.ceil(2.00001)); //3
    // generelles Abrunden
    console.log(Math.floor(2.999999)); //2
    // kaufmännisches Runden
    console.log(Math.round(2.49));  // 2
    console.log(Math.round(2.5));   // 3
    console.log(Math.round(2.99));  // 3

    // Zufallszahl
    // random() erzeugt Zahl zwischen 0 und 1, wobei 1 nie erreicht wird
    console.log(Math.random());

    // Runden auf Nachkommastellen
    // Anzahl der Nachkommastellen wird als Argument an Methode übergeben
    // Rückgabe = String!
    console.log((4.45689).toFixed());  // 4
    console.log((4.45689).toFixed(2));  // 4.46
    console.log((4.45689).toFixed(5));  // 4.45689

}
