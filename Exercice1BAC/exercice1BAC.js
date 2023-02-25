function compter(caractere, mot) {
    compt = 0;
    for (let i of mot){
        if (caractere == i){
            compt = compt + 1;
        }
    }
    console.log(compt)
}