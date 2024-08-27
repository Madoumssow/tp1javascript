function nbrPremier(nbr) {
    for(let i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
  
  alert(nbrPremier(prompt("verification d'un nombre premier:")));