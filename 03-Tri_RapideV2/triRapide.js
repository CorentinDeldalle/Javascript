let listeTriee;

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

    let listeTriee = triRapide(plusPetits).concat(pivot, triRapide(plusGrands));
    return listeTriee
}

function doublons(listeTriee){
    for (let i in listeTriee) {
        if (listeTriee[i] === listeTriee[i + 1]) {
          return true;
        }
      }
      return false;
}