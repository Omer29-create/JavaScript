"use strict";

{
    let product_1 = {
        name:       "Shivas Regal",
        price:      39.99,
        category:   "Whisky"
    };

    let product_2 = {};
    product_2.name = "Single Malt";
    product_2.price = 29.99;
    product_2.category = "Office Drinks";

    let product_3 = {};
    product_3["name"] = "Talisker";
    product_3["price"] = 35.99;
    product_3["category"] = ["Whisky","Office Drinks"];

    let cart = [product_2, product_3];
    cart.push(product_1);

    let customer = {
        name:       "Jessica Jones",
        age:        35,
        address:    "Dragonroad 69, 666 Hells Kitchen 3"
    };

    function buyNow(cart, customer) {
        console.log(cart);
        console.log(customer);
    }

    buyNow(cart, customer);
}


{
    // Date Object

    // aktuelles Datum erzeugen
    let heute = new Date();
    console.log(heute);

    // UNIX-Zeitstempel erzeugen (Millisekunden seit dem 01.01.1970)
    console.log(Date.now());


    console.log(heute.getDate());   // aktueller Tag im Monat (1-31)
    console.log(heute.getMonth());  // aktueller Monat (0-11)
    console.log(heute.getDay());    // aktueller Wochentag (0-Sonntag bis 6- Samstag)
    console.log(heute.getFullYear()); // aktuelles Jahr
    console.log(heute.getHours());      // aktuelle Stunden
    console.log(heute.getMinutes());    // aktuelle Minuten
    console.log(heute.getSeconds());    // aktuelle Sekunden
    console.log(heute.getMilliseconds());    // aktuelle Millisekunden

    console.log(heute.getTime());       // UNIX-Zeitstempel


    // Bestandteile eines Datums ändern
    let day = new Date();
    day.setFullYear(2222);
    day.setMonth(11);
    day.setDate(24);
    day.setHours(20);
    day.setMinutes(30);
    day.setSeconds(0);
    day.setMilliseconds(0);
    console.log(day);

    // mit Datum rechnen
    day.setDate(day.getDate() - 1);
    console.log(day);

    day.setDate(day.getDate() + 42);
    console.log(day);

    // bestimmtes Datum erzeugen
    console.log(new Date("Feb 03 2223 20:30:00 GMT+0100"));

    // new Date(jahr, monat-index[, tag[, stunde[, minute[, sekunde[, millisekunde]]]]])
    console.log(new Date(2222,2));

    let eventDate = new Date(2222,2,24,12,45,0);
    console.log(eventDate);

    // UTC - Weltzeit
    let utcDate = new Date();
    utcDate.setUTCFullYear(2022);
    utcDate.setUTCMonth(11);
    utcDate.setUTCDate(24);
    utcDate.setUTCHours(20);
    console.log(utcDate);

    console.log(utcDate.getUTCDate());
    console.log(utcDate.getUTCMonth());
    console.log(utcDate.getUTCHours());

    let dateUnix = new Date();
    dateUnix.setTime(1511652686347);
    console.log(dateUnix);
    console.log(new Date(1511652686347));


    console.log(heute);
    console.log(heute.toLocaleString());
    console.log(heute.toLocaleString("de-DE"));
    console.log(heute.toLocaleString("en-US"));
    console.log(heute.toLocaleString("ko-KR"));

    console.log(heute.toLocaleString("de-DE", {weekday: "long"}));
    console.log(heute.toLocaleString("de-DE", {month: "long"}));

    const OPTIONS = {
        weekday:    "long",
        month:      "long",
        day:        "numeric",
        year:       "numeric",
        hour:       "2-digit",
        minute:     "2-digit",
        second:     "2-digit"
    };
    console.log(heute.toLocaleString("de-DE", OPTIONS));
    console.log(heute.toLocaleString("de-DE", {
        month:      "long",
        weekday:    "long",
        day:        "numeric",
        year:       "numeric"
    }));
    console.log(heute.toLocaleString("de-DE", {hour: "2-digit"}));

    console.log(heute.toLocaleDateString());
    console.log(heute.toLocaleDateString("de-DE", {day: "numeric", month: "long"}));
    
    console.log(heute.toLocaleTimeString());
    console.log(heute.toLocaleTimeString("de-DE", {hour: "2-digit"}));
}


{
    /*
        JSON - JavaScript Object Notation
        JS-Daten in JSON-Strings umwandeln, um sie mit anderen Programmiersprachen auszutauschen oder in DB zu speichern
        Support in allen modernen Programmiersprachen verfügbar
        kann plattformübergreifend genutzt werden

        nur doppelte Anführungszeichen erlaubt
        Objekt-keys müssen im JSON-String zwingend in Anführungszeichen stehen
    */

    let product = {
        name:       "Single Malt",
        category:   ["Office Drinks","Whisky"],
        inStock:    25,
        price:      29.99
    };

    let productArray = [
        {
            name:       "Single Malt",
            category:   ["Office Drinks","Whisky"],
            inStock:    25,
            price:      29.99
        },
        {
            name:       "Shivas Regal",
            category:   ["Office Drinks","Whisky"],
            inStock:    42,
            price:      49.99
        },
        {
            name:       "Talisker",
            category:   ["Office Drinks","Whisky"],
            inStock:    39,
            price:      34.99
        }
    ];

    // Daten serialisieren
    let jsonString = JSON.stringify(product);
    console.log(jsonString);

    // Daten parsen
    console.log(JSON.parse('{"name":"Single Malt","category":["Office Drinks","Whisky"],"inStock":25,"price":29.99}'));
    
    let jsonParsed = JSON.parse(jsonString);
    console.log(jsonParsed);

    console.log(JSON.stringify(productArray));
    console.log(JSON.stringify(42));
    console.log(JSON.stringify("Jessica Jones"));
    console.log(JSON.stringify(true));
    
}


{
    // Cookies
    document.cookie = "user=Jessica";
    document.cookie = "user=Jessica Jones; path=/admin";
    document.cookie = "acceptance=1;max-age=86400;SameSite=None; Secure";

    
    console.log(document.cookie);

    /*
    sameSite-Attribut
    sameSite=Strict / sameSite=Lax / SameSite=None; Secure
    beschreibt, wann ein Cooie gesendet werden soll
    - nur innerhalb der Seite oder auch bei Zugriff über TOP-Level-Navigation oder im gesamten Kontext (aber nur über https-Verbindungen => secure)
    Achtung Secure-Attribut kann nur über https-Verbindungen gesetzt werden
   */

    function createCookie(name,value,days) {
        let expires = '';
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
   }
  createCookie("hero","thor",31);
  
  function readCookie(name) {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  console.log(readCookie("hero"));
  console.log(readCookie("marvel"));
  
  
  function deleteCookie(name) {
    createCookie(name, '', -1);
  }
  deleteCookie("hero");
  console.log(readCookie("hero"));

}