"use strict";

{
    // Array = Sammlung von Werten, die mit einer Variablen referenziert werden können
    // let myArray = [1,2,3,"Hey",true];

    // split(Seperator) überführt String in Array
    let headline = "Wellcome";

    console.log(headline.split());
    console.log(headline.split("")); 
    // Array(8) [ "W", "e", "l", "l", "c", "o", "m", "e" ]

    let name = "Jessica Lena Jones";
    console.log(name.split(" "));
    // Array(3) [ "Jessica", "Lena", "Jones" ]

    let obst = "Apfel, Banane, Tomate";
    console.log(obst.split(", "));
    // Array(3) [ "Apfel", "Banane", "Tomate" ]
}

{
    // includes(Teilzeichenkette) prüft, ob übergebene TZK im String enthalten
    // Rückgabe: Boolean
    // funktioniert nicht im IE
    console.log("Jessica Jones ist eine Heldin im Marvel-Universum".includes("Jessica"));  // true
    console.log("Jessica Jones ist eine Heldin im Marvel-Universum".includes("Luke"));     // false

    // startsWith(TZK) prüft, ob String mit TZK beginnt
    // Rückgabe: Boolean
    // funktioniert nicht im IE
    console.log("Jessica Jones ist eine Heldin im Marvel-Universum".startsWith("Jessica"));  // true 
    console.log("Jessica Jones ist eine Heldin im Marvel-Universum".startsWith("Marvel"));  // false
    
    // endWith(TZK) prüft, ob String mit TZK endet
    // Rückgabe: Boolean
    // funktioniert nicht im IE
    console.log("Jessica Jones ist eine Heldin im Marvel-Universum".endsWith("Jessica"));  // false 
    console.log("Jessica Jones ist eine Heldin im Marvel-Universum".endsWith("Universum"));  // true
}

{
    // repeat(anzahl) um Strings zu wiederholen
    console.log("Geld ".repeat(1000));

    // Strings auffüllen

    // padStart(Länge, Füllzeichen)
    console.log("3568".padStart(10));
    console.log("3568".padStart(10,0));
    console.log("3568".padStart(12,"*"));

    // padEnd(Länge, Füllzeichen)
    console.log("3568".padEnd(10,0));
    console.log("3568".padEnd(10,"*"));

    let iban = "DE12345678912315975456";
    let laenge = iban.length;
    let newIban = iban.substring(laenge-4);
    newIban = newIban.padStart(laenge,"*");

    console.log(newIban);
}

{
    // Werte in Strings überführen
    console.log(String(42));
    console.log(String(42 + 69));
    console.log(String(true));

    console.log(42 + "");

    console.log((42).toString())
    console.log((42 + 69).toString())
    console.log((true).toString())
}

{
    let monat = 6, monatsName;

    if(monat == 1) {
        monatsName = "Januar"
    } else if(monat == 2) {
        monatsName = "Februar"
    }
    
    // Mehrfachverzweigungen mit switch


    /*
    switch() nimmt ausdruck entgegen und prüft ihn mit versch. Werten
    wenn ausdruck === wert wird Fach (case) abgearbeitet
    ansonsten Prüfung nächstes Fach
    Prüfung erfolgt auf genau gleich (auch Datentyp muss gleich sein)
    mit break wird switch beendet
    ohne break werden weitere Statements in anderen Fächern ohne weitere Prüfungen abgearbeitet
    default (optional) wird abgearbeitet, wenn sonst keine Übereinstimung gefunden

    Syntax:
                switch(ausdruck) {
                    case wert:
                        Statements
                        break;
                    case wert: 
                        Statements
                        break;
                    ...
                    default:
                        Statement
                }
    */

    let aktDate = "2021-06-10";

    monat = Number(aktDate.substring(5,7));
    console.log(monat);

    switch(monat) {
        case 1:
            monatsName = "Januar";
            break;
        case 2:
            monatsName = "Februar";
            break;
        case 6:
            monatsName = "Juni";
            break;
        case 12:
            monatsName = "Dezember";
            break;
        default:
            monatsName = "Unmonat";
    }

    console.log(monatsName);
/* 
    let farbe = prompt("Wähle ine Farbe: rot(r) oder gelb(g) oder blau(b)").trim().toLowerCase();

    switch(farbe) {
        case "rot":
        case "r":
            console.log("ROT");
            break;
        case "gelb":
        case "g":
            console.log("GELB");
            break;
        case "blau":
        case "b":
            console.log("BLAU");
            break;
        default:
            console.log("ANDERE FARBE");
    }
     */
}

    // Kontrollstruktur Schleifen
{
    // Zählerschleife mit for(Initialisierung;Bedingung;Befehlsfolge)

    for(let i = 0; i < 11; i++) {
        console.log(i + " zum Kuckuck");
    }

    for(let i = 0; i < 11; i++) {
        console.log("Das Quadrat von " + i + " = " + i*i);
    }

    for(let i = 0, j = "0"; j.length < 16; i++, j += i) {
        console.log(i);
        console.log(j.length);
        console.log(j.length < 16);
        console.log(i + " - " + j);
    }

}

{
    /*
        fußgesteuerte do...while-Schleife

        do {
            Statements
        } while(Bedingung)
    */

    const SOLUTION = 42;
    let answer;
    /* 
    do {
        answer = prompt("Die Antwort auf alle Fragen...").trim();
    } while(answer != SOLUTION)
    */

    let rand;
    do{
        rand = parseInt(Math.random() * 199);
    } while(rand > 49 || rand == 0)

    console.log(rand);
}

{
    /*
        kopfgesteuerte while-Schleife

        while(Bedingung) {
            Statements
        }
    */

    let name = "Jessica      Lena    Jones";

    while(name.includes("  ")) {
        let name_1 = name.substring(0, name.indexOf("  ") + 1);
        let name_2 = name.substring(name.indexOf("  ")).trim();
        name = name_1 + name_2;
        console.log(name);
    }
}

    // Schleifensteuerung
{
    // beenden mit break

    for(let i = 0; i < 11; i++) {
        let ergebnis = i * i + 42;
        if(ergebnis > 100) break;
        console.log(ergebnis)
    }

    // continue beendet aktuellen Schleifendurchlauf

    for(let i = 0; i < 11; i++) {
        let ergebnis = i * i + 42;
        if(ergebnis % 2 == 0) {
            console.log("Ergebnis ist eine gerade Zahl (" + ergebnis +") - Abbruch!");
            continue;
        }
        console.log(ergebnis + " ist eine ungerade Zahl");
    }

    // in for-Schleife springt Interpreter zur Schlussanweisung
    // in while-Schleife springt Interpreter zur Bedingungsprüfung
}

    // Funktionen
{
    /*
        1. Funktionsdeklaration

        function bezeichner(parameter) {
            Statements
            return Rückgabewert;
        }

        Parameter und return = optional
        kann vor Deklaration aufgerufen werden -> unterliegt Hoisting

        return beendet Funktion und gibt Wert zurück
        Rückagbe ersetzt Funktionsaufruf
    */
    myFunction();

    function myFunction() {
        console.log("Guten Morgen!");
    }
    myFunction();

    // mit Parametern
    function logMessage(message) {
        console.log(message);
    }

    logMessage();           // undefined
    logMessage("Hey");
    logMessage("Jessica Jones");
    logMessage(42);
    logMessage(true);

    function repeater(message, anzahl) {
        console.log(message.repeat(anzahl));
    }
    repeater("Geld ",1000);
    repeater("Kohle ",100);
    // Reihenfolge der Argumente ist wichtig, da Argumente den Parameter an gleicher Position fütternm

    // mit Rückgabewert
    function product(a,b) {
        console.log("a: " + a);
        console.log("b: " + b);
        console.log("a * b = " + (a * b));
        return a * b;
    }

    console.log(product);
    console.log(product(2,3));
    console.log(product(20,36));
    console.log(product(2));        // NaN, da b = undefined

    console.log(product(product(2,3),product(5,6)));
    console.log(product(6,product(5,6)));
    console.log(product(6,36));

}

{
    /*
        2. Funktionsausdrücke

        let bezeichner = function(parameter) {
            Statements
            return Rückgabe;
        }
        bezeichner(argumente);
    */

    // square(3); Referenzerror
    let square = function(a) {
        return a * a;
    };

    console.log(square(3));
    console.log(square(575));
    console.log(square);
    console.log(square());  // NaN

}

{
    // default-Werte setzen als Vorbelegung für Parameter
    // zur Vermeidung von undefined-Werten

    function wellcomeMessage(name="Unbekannter", anrede="") {
        console.log("Hey " + anrede + " " + name);
    }

    wellcomeMessage();
    wellcomeMessage("Jessy");
    wellcomeMessage("Jessy", "Heldin");
    
    function multiply(a=0,b=1,c=1,d=1,e=1) {
        return a * b * c * d * e;
    }

    console.log(multiply());
    console.log(multiply(2));
    console.log(multiply(2,3,4,5,5));
    console.log(multiply(2,3,4,5,5,6,7));
}

{
    // Guards - Wächter für Funktionen
    let divide = function(a,b) {
        if(a == 0 || b == 0) return 0;
        return a / b;
    };

    console.log(divide(4,2));
    console.log(divide(4,0));
    console.log(divide(0,0));
}

{
    // IIFE (sofort ausführbarer Funktionsausdruck)
    // schafft Scope für var-Variablen

    var zahl = 69;
    (function() {
        var inlineVar = 42;
        console.log(inlineVar + zahl);
    })();

    // console.log(inlineVar); ReferenceError

    var result = (function(a,b) {
        var ergebnis = a * b;
        return ergebnis;
    })(2,3);

    console.log(result);        // Wert der Variablen = 6
    console.log(typeof result); // number

    // Kurzschreibweise
    // unterstützt kein return
    !function() {
        console.log("Grüße aus der IIFE")
    }();
}
