var fruits = ["pomme", "banane", "raisin", "mangue"];

function filtreTexte(arr, requete) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
  });
}

document.write(`</br></br>Filtre les mots dans un tableau ["pomme", "banane", "raisin", "mangue"] exemples :${filtreTexte(fruits, "an")} "an" </br> ${filtreTexte(fruits, "m")} "m"`)
