var einkaufsliste = ["Milch", "Brot", "Äpfel"];
console.log(einkaufsliste);
einkaufsliste.push("Orange");
console.log(einkaufsliste);
var brotIndex = einkaufsliste.indexOf("Brot");
console.log(brotIndex);
einkaufsliste.splice(brotIndex,1);
console.log(einkaufsliste);
einkaufsliste.forEach(artikel => console.log(artikel));