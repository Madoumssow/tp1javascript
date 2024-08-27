let valeurInitiale = 0;
let somme = [1, 2, 3, 4].reduce(function (
  accumulateur,
  valeurCourante,
) {
  return accumulateur + valeurCourante;
}, valeurInitiale);

document.write(`<br><br>La sommes des nombres du tableau [1, 2, 3, 4] est:${somme}`);
