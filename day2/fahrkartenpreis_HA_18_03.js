function fahrkartenPreis(alter) {
    if (alter < 6) {
        return "Fahrt ist Kostenlos.";
    } else if (alter >= 6 && alter <= 17) {
        return "Fahrt zum Kinderpreis";
    } else if (alter >= 18 && alter <= 66) {
        return "Fahrt zum Vollpreis.";
    } else {
        return "Fahrt zum Seniorenpreis."
    }
}    