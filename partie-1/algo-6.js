/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.

Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]

*/

function sumArr(arrayA, arrayB) {
  // Your code here !
  let result = [];
  let max = 0;
  if (arrayA.length > arrayB.length) {
    max = arrayA.length;
  } else {    
    max = arrayB.length;
  }       
  for (let i = 0; i < max; i++) {
    if (arrayA[i] === undefined) {
      arrayA[i] = 0;
    }
    if (arrayB[i] === undefined) {
      arrayB[i] = 0;
    }
    result.push(parseInt(arrayA[i]) + parseInt(arrayB[i]));
    
  }
  return result;

//   for (let i = 0; i < arrayA.length; i++) {
    
//     if (arrayA[i] === undefined) {
//       arrayA[i] = 0;
//     }
//     if (arrayB[i] === undefined) {
//       arrayB[i] = 0;
//     }
//     result.push(parseInt(arrayA[i]) + parseInt(arrayB[i]));
    
//   }
//   return result;
  
// }


}
console.log(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"]));
