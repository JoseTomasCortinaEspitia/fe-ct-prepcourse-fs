/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var resultado = [];
   for (var i in objeto) {
      resultado.push([i,objeto[i]]);
   }
   return resultado;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arrayText = string.split("");
   arrayText.sort();
   var letterCounter = 0;
   var resultado = {};
   i = 0;
   while (i<arrayText.length){
      if (arrayText[0] === arrayText[i]) {
         letterCounter++;
      }
   i++;
   if (i === arrayText.length) {
      resultado[arrayText[0]]=letterCounter;
      arrayText.splice(0, letterCounter);
      letterCounter=0;
      i=0;
   }
   if (arrayText.length === 0) {
      break
   }
   }
   return resultado
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayText = string.split("");
   var minusculas = [];
   var mayusculas = [];
   var resultado = "";
   for ( i = 0; i < arrayText.length; i++) {
      if (arrayText[i] === arrayText[i].toLowerCase()) {
         minusculas.push(arrayText[i])
      } else {
         mayusculas.push(arrayText[i])
      }
   }
   resultado = mayusculas.join("") + minusculas.join("")
   return resultado
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   //var textArray = frase.split(" ");
   //var textArray1 = [];
   //var resultado = "";
   //for (i = 0; i < textArray.length; i++){
   //   textArray1.push(textArray[i].reverse())
   //}
   //return resultado = textArray1.join(" ")
   var invertida = frase.split(" ").reduce(function(frase, palabras) {
      return frase = frase + " " + palabras.split("").reverse().join("");
    },"")
    return invertida.slice(1);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numero = numero.toString();
   if(numero === numero.split('').reverse().join('')){
      return 'Es capicua';
    } else {
      return 'No es capicua';
    }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var string1 = string.replace("a","")
   var string2 = string1.replace("b","")
   var string3 = string2.replace("c","")
   return string3
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   //var num = 0;
   //var resultado = []; 
   //for (var i = 0; i < arrayOfStrings.length; i++) {
   //   if (arrayOfStrings[i] >= num) {
   //      resultado.push(arrayOfStrings[i]);
   //      num = arrayOfStrings[i].length;
   //   }
   //}
   //return resultado;
   return arrayOfStrings.sort((p1, p2) => p1.length - p2.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = [];
   for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++){
         if (array1[i] === array2[j]) {
            resultado.push(array1[i])
         }   
      }
   }
   return resultado
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
