// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript?fbclid=IwAR1RABAPjHjlbu0N6QL2YWNJ10f-aF0sYZvk0sK1gsi9-T-WKwkZ8z771qU

function DNAtoRNA(dna) {
  let rNa = [];
  for (let i = 0; i < dna.length; i++) {
    rNa += (dna[i] === "T") ? 'U' : dna[i];    
    } 
    return rNa;
  // create a function which returns an RNA sequence from the given DNA sequence
}

