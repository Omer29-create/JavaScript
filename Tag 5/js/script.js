"use strict";

    // Arrays
{
    /* 
    kein eigener Datentyp - gehören zu vordefinierten Objekten
    Sammlung von Werten, die mit einer einzigen Variablen referenziert werden

    [a,b,c,d] 

    Index   Element
    0       a
    1       b
    2       c
    3       d

    */

    // Array-Erzeugung in Literal-Schreibweise
    let myArray = [];   // leeres Array
    console.log(myArray);

    let myWerteArray = [1,2,3,4,5,6];
    console.log(myWerteArray);

    // Array-Erzeugung mit Konstruktorfunktion
    let myNewArray = new Array(5);   // leeres Array mit Platz für 5 Elemente
    console.log(myNewArray);

    let myNewWerteArray = new Array(2,"gut",3,5,"los",6,5,8)
    console.log(myNewWerteArray);
}

{
    let heroes = ["Jessica","Luke","Daredevil"];
    console.log(heroes);
    console.log(heroes.length);
    console.log(heroes[0]);
    console.log(heroes[2]);
}

{
    let leer = [];                      // leeres Array
    let leereElemente = new Array(6);   // leeres Array mit Platz für 6 Elemente
    let primZahlen = [2,3,5,7];         // ZahlenArray
    let band = ["Marry","Paul","John"]; // String-Array
    let mixedArray = [42,"Jessy",true,{}];  // gemischtes Array
    let sparseArray = [1,,3];           // 2. Element = undefined
    let allTogether = [leer,leereElemente,primZahlen,band,mixedArray,sparseArray]; // Arrays im Array
    
    for(let i = 0; i < allTogether.length; i++) {
        console.log(i);
        console.log(allTogether[i]);
        console.log("Array mit " + allTogether[i].length + " Elementen");

        for(let j = 0; j < allTogether[i].length; j++) {
            console.log("Element " + j + ": " + allTogether[i][j]);
        }
    }
}

{
    // Arrays manipulieren
    let heldenOnline = ["Thor","Jessica","Odin","Nebula","Luke","Daredevil"];
    // hinzufügen von 1+ Elementen am Ende des Arrays
    // Rückgabe = neue Länge des Arrays nach hinzufügen
    let newLength = heldenOnline.push("Heimdall");
    console.log(newLength);
    console.log(heldenOnline.push("Elektra","Hulk"))
    console.log(heldenOnline);

    // letztes Element eines Arrays entfernen
    // Rückgabe = entfrntes Element des Arrays
    heldenOnline.pop();
    console.log(heldenOnline);
    let einHeld = heldenOnline.pop();
    console.log(einHeld);
    console.log(heldenOnline);
    console.log(heldenOnline.pop())
    console.log(heldenOnline);

    // hinzufügen von 1+ Elementen am Anfang des Arrays
    // Rückgabe = neue Länge des Arrays nach hinzufügen
    newLength = heldenOnline.unshift("Heimdall");
    console.log(newLength);
    console.log(heldenOnline.unshift("Elektra","Hulk"))
    console.log(heldenOnline);

    // erstes Element eines Arrays entfernen
    // Rückgabe = entferntes Element
    let firstHero = heldenOnline.shift();
    console.log(firstHero);
    heldenOnline.shift();
    console.log(heldenOnline.shift());
    console.log(heldenOnline);

    // splice(index,Anzahl der Elemente, die entfernt werden sollen,1+ neue Elemente)
    // Rückgabe = array mit entfernten Elementen
    // wenn nur Index übergeben wird, werden alle Elemente ab Index-Position aus Array entfernt
    console.log(heldenOnline.splice(1,2,"Elektra","Hulk"))
    console.log(heldenOnline);
    console.log(heldenOnline.splice(2,0,"Odin","Jessica"))
    console.log(heldenOnline);
    console.log(heldenOnline.splice(0,2));
    console.log(heldenOnline.splice(2));
    console.log(heldenOnline);
}

{
    // mit Array-Elementen arbeiten
    let heldenOnline = ["Thor","Heimdall","Nebula","Daredevil","Luke"];

    // vollständige Kopie eines Arrays erstellen
    // es erfolgt keine Manipulation des Ursprungsarrays
    console.log(heldenOnline.slice());

    // Kopie von Startposition bis Ende des Arrays
    console.log(heldenOnline.slice(2));

    // Kopie ab Startposition bis exclusive der Endposition
    console.log(heldenOnline.slice(2,4));

    // bei negativen Werten erfolgt Zählung von rechts
    console.log(heldenOnline.slice(2,-2));

    console.log(heldenOnline);

    // Referenz auf Ursprungsarray erzeugen
    // beide arrays werden synchron gehalten, da sie beide auf das gleiche Array verweisen
    let HeldenOffline = heldenOnline;
    console.log(HeldenOffline);
    console.log(heldenOnline);
    heldenOnline.push("Jessica");
    console.log(HeldenOffline);
    console.log(heldenOnline);

    // bei Arbeit mit slice() wird neues Array erzeugt (Kopie)
    // es erfolt keine nachträgliche Synchronisation
    let myHeroes = heldenOnline.slice();
    heldenOnline.pop();
    console.log(heldenOnline);
    console.log(myHeroes);
}

{
    // sort() zum sortieren eines Arrays
    // Ursprungsarray wird verändert in Reihenfolge der Elemente
    // sort() arbeitet mit lexiographischem Vergleich anhand der ASCII-Tabelle
    let heldenOnline = ["Thor","Heimdall","Nebula","Daredevil","Luke"];
    console.log(heldenOnline);

    heldenOnline.sort();
    console.log(heldenOnline)
}

{
    // Reihenfolge der Elemente im Array umkehren
    // Ursprungsarray wird verändert
    let heldenOnline = ["Thor","Heimdall","Nebula","Daredevil","Luke"];
    // heldenOnline.sort();
    heldenOnline.reverse();
    console.log(heldenOnline);
}

{
    // join(Seperator) wandelt Array in String
    // Seperator = Trenner zwischen Elementen im String
    // ohne übergebenen Seperator wird Komma als fester Seperator genutzt
    let heldenOnline = ["Thor","Heimdall","Nebula","Daredevil","Luke"];
    console.log(heldenOnline.join());
    console.log(heldenOnline.join(""));
    console.log(heldenOnline.join(" "));
    console.log(heldenOnline.join(" - "));
    console.log(heldenOnline.join("\n"));

    // toString() liefert Array als String
    // erwartet keine Argumente
    // Komma wird als fester Seperator genutzt
    console.log(heldenOnline.toString());
    console.log(heldenOnline);
}

{
    let heldenOnline = ["Thor","Heimdall","Nebula","Daredevil","Luke"];

    // indexOf(element) und lastIndexOf(element)
    // Rückgabe Indexposition oder -1, wenn kein Fund
    console.log(heldenOnline.indexOf("Jessica")); // -1
    console.log(heldenOnline.indexOf("Thor")); // 0
    console.log(heldenOnline.indexOf("Th")); // -1
    // 2. Argument = Startposition für Suche
    console.log(heldenOnline.indexOf("Thor",2)); // -1
    console.log(heldenOnline.lastIndexOf("Thor",2)); // 0
}

{
    let heldenOnline = ["Thor","Heimdall","Nebula","Daredevil","Luke"];

    // includes(element) prüft, ob Element im Array vorhanden
    // Rückgabe = Boolean
    // funxt nicht im IE
    console.log(heldenOnline.includes("Jessica")); // false
    console.log(heldenOnline.includes("Thor")); // true
    console.log(heldenOnline.includes("Thor",2)); // false
}

{
    // concat() verbindet Array mit anderen Arrays und/oder Werten
    // engl. concatination (Aneinanderreihung)
    let array_1 = [1,2,3,4], array_2 = [6,7,8];

    let array_3 = array_1.concat(array_2);
    console.log(array_3);
    
    let array_4 = array_1.concat(5,array_2,9,"Jessica",array_3);
    console.log(array_4);
}

    // Objekte
{

    // Erzeugung über Literal-Schreibweise
    let myObject = {}; // leeres Objekt
    console.log(myObject);

    // Erzeugung über Konstruktor-Funktion
    let myNewObject = new Object(); // leeres Objekt
    console.log(myNewObject);

    let book = {
        mainTitle:       "JavaScript",
        subTitle:        "Kurz & gut",
        targetGroup:     "Anfänger und Fortgeschrittene",
        price:           29.99,
        "Händler Preis": 19.99,
        showTitle:       function() {
                            console.log(this.mainTitle + " - " + this.subTitle);
                         }
    }

    console.log(book);

    // Eigenschaften auslesen
    console.log(book.mainTitle);
    console.log(book.price);
    // wenn Eigenschaft als String vorliegt oder als String beschriebem wurde -> Zugriff über Property Access
    console.log(book["price"]);
    console.log(book["Händler Preis"]);

    console.log(book[2]);   // undefined

    // Eigenschaften ändern
    book.mainTitle = "Python";
    console.log(book.mainTitle);

    // Eigenschaft hinzufügen
    book.inStock = 499;
    console.log(book.inStock);

    // Eigenschaft löschen
    delete book.inStock;
    console.log(book.inStock);  // undefined

    // Methoden aufrufen
    book.showTitle();
}
