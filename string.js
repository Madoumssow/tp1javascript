// Inverser le texte
function reverse(reversedtexte) { 
    return reversedtexte.split('').reverse().join('');
  }
  let texte = "Hello World" 
  let reversedtexte = reverse(texte)

document.write(`${texte} </br></br>  ${reversedtexte} </br></br>`);
