Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  
  let p = [35,2,65,7,8,9,12,121,33,99];
  
 document.write(`<br><br>p = [35,2,65,7,8,9,12,121,33,99] <br> Max value is: ${p.max()}` +
    `<br> Min value is: ${p.min()}`);

