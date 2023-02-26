function triRapide(liste){
    if (liste <= 1){
        return liste;
    }

    let pivot = liste[0];
    let plusPetits = [];
    let plusGrands = [];

    for (let i=0; i < liste.length; i++){
        if (liste[i] < pivot){
            plusPetits.push(liste[i]);
        }
        if (liste[i] > pivot){
            plusGrands.push(liste[i])
        }
    }

    return triRapide(plusPetits).concat(pivot, triRapide(plusGrands));
}