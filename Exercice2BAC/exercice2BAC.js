function verifie(tab){
    let verif = true;
    for (let i of tab){
        if (tab[i] > tab[i+1]){
            verif = false;
        }
    }
    return verif
}