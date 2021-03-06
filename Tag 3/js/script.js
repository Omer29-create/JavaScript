"use strict";

{
    /*
        relationale Operatoren
        <   kleiner als
        >   größer als
        <=  kleiner oder gleich
        >=  größer oder gleich
        ==  gleich (Datentyp wird für Vergleich implizit konvertiert)
        === genau gleich (auch im Datentyp)
        !=  ungleich (Datentyp wird für Vergleich implizit konvertiert)
        !== genau ungleich (auch im Datentyp)
    */

   console.log(3 < 42);         // true
   console.log("3" < 42);       // true, da implizite Typkonertierung string zu number

   console.log("42" == 42);      // true, da implizite Typkonertierung 
   console.log("42" === 42);     // false, da keine Typkonertierung 
    
   console.log(300 < 42);        // false
   console.log("300" < 42);      // false

   console.log("300" < "42");        // true
   console.log("Jessy" < "Luke");    // true
   console.log("Jessy" < "Jones");   // true
   
   console.log("3 Autos" < "4");      // true
   console.log("3 Autos" < 4);        // false - da NaN bei impliziter Typkonvertierung

   console.log(NaN == NaN);                   // false 
   console.log(Number("3 Autos") == NaN);     // false 
   console.log(Number("3") == NaN);           // false 
}






{
    // Kontrollstrukturen / Steuerstrukturen 
    // Bedingung

    if(true) {
        console.log("Wahr");
    }

    if(true) console.log("Wahr");

    if(false) {
        console.log("Wahr");
    } else {
        console.log("Andere Wahrheit");
    }

    if(false) console.log("Wahr");
    else console.log("Andere Wahrheit");

    let a = 1, b = 2;

/*     if( a == b) {
        console.log(" a = b ");
    } else {
        if(a < b) {
            console.log(" a < b ");
        } else {
            console.log(" a > b ");
        }
    } */
    if( a == b) {
        console.log(" a = b ");
    } else if(a < b) {
        console.log(" a < b ");
    } else {
        console.log(" a > b ");
    }

    // TIPP: immer vom Speziellen zum Allgemeinen gehen!

    /*
    const CORRECT_ANSWER = 42;
    let userAnswer = prompt("Die Antwort auf alle Fragen...");
    
    if(userAnswer == CORRECT_ANSWER) {
        console.log("TOP!");
    } else {
        console.log("!NOPE");
    } 
    */

    // einfache Prüfungen

    if(null) {
        console.log(true);
    } else {
        console.log(false);
    }

    // if("")   => false
    // if(0)    => false
    // if("0")  => true
    // if(" ")  => true
    // if("text")  => true

    /*     
    let userInput = prompt("Sag was!");

    if(userInput) console.log("Danke!")
    else console.log("!NOPE")
    */
}

{
    // Logische Operatoren

    // ODER-Operator ||
    // Bedingung || Bedingung .....
    // ergibt nur false, wenn alle Bedingungen false, sonst true

    /*
        true || false       => true
        false || true       => true
        true || true        => true
        false || false      => false
    */

    // UND-Operator &&
    // Bedingung && Bedingung ....
    // ergibt nur true, wenn alle Bedingungen true, sonst false

    /*
        true && false       => false
        false && true       => false
        true && true        => true
        false && false      => false
    */

    // NICHT-Operator !
    // ! Bedingung
    // wandelt true in false und false in true

    /*
        ! true      => false
        ! false     => true
    */

    let a = 1, b = 20;

    if(a < 1 || a > 10) {
        console.log(true);
    } else {
        console.log(false);
    }

    if(b > 10 || a > 10) {
        console.log(true);
    } else {
        console.log(false);
    }

    if(a > 0 && a < 11) {
        console.log(true);
    } else {
        console.log(false);
    }

    if(b > 10 && a > 10) {
        console.log(true);
    } else {
        console.log(false);
    }

    if(! false) {
        console.log("geschummelt")
    }

    // let userInput = 42;
    let userInput = "Jessy";

    if(!isNaN(userInput)) {
        console.log(userInput + 66);
    }
}

{
    // Strings

    // Eigenschaft length ermittelt Anzahl der Zeichen von Zeichenkette
    console.log("Jessica Jones".length);
    console.log("Luke Cage".length);

    // indexOf()
    // nimmt teilzeichenkette entgegen und durchsucht String von links nach echts 
    // gibt Index-Position des ersten Fundes zurück
    // ohne Fund -> Rückgabe -1
    let name = "Jessica Lena Jones";

    console.log(name.indexOf(" ")); // 7
    console.log(name.indexOf("Lena")); // 8
    console.log(name.indexOf("lena")); // -1 (case-sensitive)

    // lastIndexOf()
    // arbeitet wie indexOf() - aber von rechts nach links
    console.log(name.lastIndexOf(" ")); // 12

    // optional kann Start-Index als 2.Argument übgeben werden
    // Suche beginnt dann bei Start-Index
    console.log(name.indexOf(" ",8));       // 12
    console.log(name.lastIndexOf(" ",11));  // 7

    console.log(name.search("Lena"));   // 8
    console.log(name.search("lena"));   // -1 (case-sensitive)
    
}

{
    // Umwandlung in Groß- / Kleinschreibung

    let name = "Jessica Lena Jones";

    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
    console.log(name);

    console.log(name.toLowerCase().indexOf("lena")); // 8

    let searchString = "Lena".toLowerCase();
    console.log(name.toLowerCase().indexOf(searchString)); // 8

    let lowwrName = name.toLowerCase();
    console.log(lowwrName);

}

{
    // slice(indexStart,indexEnd) liefert Teilzeichenkette
    // indexEnd ist in Rückgabe NICHT enthalten

    let obst = "Apfel, Banane, Tomate";

    console.log(obst.slice());  // Apfel, Banane, Tomate
    console.log(obst.slice(7));  // Banane, Tomate
    console.log(obst.slice(7,13));  // Banane
    console.log(obst.slice(7,1300));  // Banane, Tomate

    console.log(obst.slice(-14,-8));  // Banane
    console.log(obst.slice(-6));  // Tomate

    
    // substring(indexStart,indexEnd) liefert Teilzeichenkette
    // indexEnd ist in Rückgabe NICHT enthalten

    let browser = "Mozilla";
    console.log(browser.substring(0,3));    // Moz
    console.log(browser.substring(3,0));    // Moz
    console.log(browser.slice(3,0));        // ""

    let bildSource = "bild.png";
    console.log(bildSource.substring(bildSource.length-3)); // png

    let name = "Jessica Jones";
    let spacePosition = name.indexOf(" ");
    let firstName = name.substring(0,spacePosition);
    let lastName = name.substring(spacePosition + 1);

    console.log(firstName);
    console.log(lastName);
}

{
    // trim() entfernt Leerzeichen am Anfang und Ende eines Strings
    let name = "  jEssica JOnes  ";
   // let name = "  jEssica JOnes  ".trim();

   console.log(name);
   console.log(name.trim());
   console.log(name.trim().toLowerCase());

   name = name.trim();
   name = name.toLowerCase();
   console.log(name);

   let spacePosition = name.indexOf(" ");
   let firstName = name.substring(0,spacePosition);
   let lastName = name.substring(spacePosition + 1);
   console.log(firstName);
   console.log(lastName);

   // charAt(index) liefert Zeichen an übergebener Index-Position
   let fistLetterFirstName = firstName.charAt(0).toUpperCase();
   let restFirstName = firstName.substring(1);
   console.log(fistLetterFirstName);
   console.log(restFirstName);

   firstName = fistLetterFirstName + restFirstName;
   console.log(firstName);

   lastName = lastName.charAt(0).toUpperCase() + lastName.substring(1);
   console.log(lastName)
}

