function bewertePunktzahl(punktzahl) {
    if (punkte > 90) {
        console.log("sehr gut");
    } else if (punkte >= 80 && punkte <= 90) {
    console.log("gut");
    } else if (punkte >= 70 && punkte < 80) {
        console.log("befriedigend");
    } else if (punkte >= 60 && punkte < 70) {
        console.log("ausreichend")
    } else {
        console.log("nicht bestanden");
    }
}