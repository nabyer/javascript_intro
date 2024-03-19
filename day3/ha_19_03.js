// Aufgabe 1
function entferneElement(arr, wert) {
    const index = arr.indexOf(wert);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
  }
  
  console.log(entferneElement([1, 2, 3, 4, 5], 3));
  

// Aufgabe 2
function summeZahlen(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  console.log(summeZahlen([1, 2, 3, 4, 5]));


// Aufgabe 3
function entferneDuplikate(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
}

console.log(entferneDuplikate([1, 2, 2, 3, 4, 4, 5]));


// Aufgabe 4
function bestimmeJahreszeit(monat) {
    if (monat >= 3 && monat <= 5) {
        return "Frühling";
    } else if (monat >= 6 && monat <= 8) {
        return "Sommer";
    } else if (monat >= 9 && monat <= 11) {
        return "Herbst";
    } else {
        return "Winter"
    }
  }
  
console.log(bestimmeJahreszeit(4));


// Aufgabe 5
function istPasswortGueltig(passwort) {
    if (passwort.length < 8) {
        return false;
    }
    if (!/\d/.test(passwort)) {
        return false;
    }
    if (!/[A-Z]/.test(passwort)) {
        return false;

        return true;
    }
  }

console.log(istPasswortGueltig("Test1234"));
  

// Aufgabe 6
function taschenrechner(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        return a / b;
    } else {
        return "Ungültige Operation";
    }
  }
  
console.log(taschenrechner(10, 5, "+"));
console.log(taschenrechner(10, 5, "/"));
console.log(taschenrechner(10, 5, "x"));


// Aufgabe 7
function multiplikationstabelle(n) {
    for (let i = 1; i <= 10; i++) {
        const ergebnis = n * i;
        console.log(`${n} x ${i} = ${ergebnis}`);
    }
  }
  
multiplikationstabelle(5);


// Aufgabe 8
function umkehrenArray(arr) {
    return arr.reverse();
}

console.log(umkehrenArray([1, 2, 3, 4, 5]));


  // Aufgabe 9
function zaehleBuchstaben(str, buchstabe) {
    const kleinerStr = str.toLowerCase();
    const kleinerBuchstabe = buchstabe.toLowerCase();
    let anzahl = 0;
    for (let i = 0; i < kleinerStr.length; i++) {
        if (kleinerStr[i] === kleinerBuchstabe) {
            anzahl++;
        }
    }
    return anzahl;
  }
  

console.log(zaehleBuchstaben("Hallo Welt", "l"));


// Aufgabe 10
function filterGeradeZahlen(arr) {
    let geradeZahlen = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            geradeZahlen.push(arr[i]);
        }
    }

    return geradeZahlen;
  }
  
console.log(filterGeradeZahlen([1, 2, 3, 4, 5, 6]));


// Aufgabe 11
function findeMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min: min, max: max};
  }

console.log(findeMinMax([10, 2, 5, 1, 9]));


// Aufgabe 12
function berechneDurchschnitt(arr) {
    let summe = 0;

    for (let i = 0; i < arr.length; i++) {
        summe += arr[i];
    }

    return summe / arr.length;
  }
  
console.log(berechneDurchschnitt([1, 2, 3, 4, 5]));
  