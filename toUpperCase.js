// majuscule
function letterCase(str){
    let mots = str.toLowerCase().split(' ')
    let tableau = []

    mots.forEach(mot => {
        let firstLetter = mot.charAt(0).toUpperCase()

        let replace = mot.replace(mot.charAt(0), firstLetter)

        tableau.push(replace)
    });

    document.write(tableau.join(' '))
}

letterCase("tous les mots la prémière lettre doit être en majuscule")