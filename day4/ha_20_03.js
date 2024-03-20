// Aufgabe 1
for (let i = 0; i < 5; i++) {
    console.log("Innerhalb der Schleife:" + i);
}

console.log("Außerhalb der schleife:" + i);


// Aufgabe 2
function testFunction() {
    var localVar = "Lokale Variable";
    console.log("Innerhalb der Funktion:" + localVar);
}

console.log("Außerhalb der Funktion:" + localVar);


// Aufgabe 3
const numConst = 5
console.log("Alter Wert:" + numConst);
numConst = 10;
console.log("Neuer Wert:" + numConst);


// Aufgabe 4
console.log(neueVariable);
let = neueVariable


// Aufgabe 5
for (var i = 0; i < 10; i++) {
    console.log(i);
}


// Aufgabe 6
if (true) {
    let myFunction = function() {
        console.log("Funktion innerhalb des Codeblocks definiert.");
    }
}

myFunction();


// Aufgabe 7
var globalVar = "Variable mit var im globalen Scope."
let globalLet = "Variable mit let im globalen Scope."
const globalConst = "Variable mit const im globalen Scope."

console.log(window.globalVar); // Ausgabe: Variable mit var im globalen Scope.
console.log(window.globalLet); // Ausgabe: undefined
console.log(window.globalConst); // Ausgabe: undefined