function indiceMaxi(tab){
    maxi = 0;
    indices = []

    for (let i of tab){
        if (tab[i] > maxi){
            maxi = tab[i];
        }
    }
    for (let i of tab){
        if (tab[i] == maxi) {
            indices.push(i);
        }
    }

    return indices
}