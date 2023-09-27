
/*for (let i = 1; i < 1001; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*Este problema fue planteado por Apple. Dada una lista ordenada de números enteros, eleva al cuadrado los elementos y proporciona el resultado en orden.
Por ejemplo, dado [-9, -2, 0, 2, 3], devuelve [0, 4, 4, 9, 81].*/
/*
function ordenar (arr){
  const resultado = []
    for(let i=0; i<arr.length;i++){
      const elemento = arr[i];
      const cuadrado = elemento * elemento;
      resultado.push(cuadrado)
    }
    return resultado.sort((a,b) => a-b);
}
   console.log(ordenar([-9, -2, 0, 2, 3]))

   /*Crea una función que pida un número por teclado y devuelva su tabla de multiplicar en un array.
   Ejemplo --> Tabla del 3 --> ["3x1=3","3x2=6","3x3=9","3x4=12","3x5=15","3x6=18","3x7=21","3x8=24","3x9=27","3x10=30"]*/
/*
  function multiplicar(){
     let numero = prompt("Introduzca número");
     let resultado =[]
    for(let i=1; i< 11; i++){
        let total = numero + "x" + i + "="+ i * numero
       resultado.push(total)
    }
    return resultado
   }

   console.log(multiplicar())


   /*Crea una función que pida números por teclado y mételos en un array. Cuando el usuario meta un 0,dejaremos de insertar. Por último, ordena los números ordenados de menor a mayor y devuelve el array.*/

/*function nueva(){
    let arr = []
2   while(true)
    let numero = prompt("Introduzca número");
    //for(let i = 0; i != 0; i++)
        if(numero !== 0){
            arr.push(numero)
        } else {
            break;
        }
    return arr
    }

console.log(nueva())*/

/*function nueva() {
    const arr = [];
  
    while (true) {
      let numero = parseInt( prompt("Introduzca un número (0 para detenerse):")); 
      if (numero === 0) {
        break; 
      }
      arr.push(numero);
    }
    return arr.sort((a,b) => a-b);
  }
  
  console.log(nueva());*/

 /* Ejercicio: Contar las veces que se repite cierta letra almacenada en un array de palabras. En cada posición del array hay una palabra almacenada

Ejemplo: ["hola","casa","adiós"]. Si buscas "a", te devuelve 4
contarCaracteres(["hola","casa","adiós"],"a")*/


 /*function contarCaracteres(arrayPalabras, caracter){
    let contador = [];
    arrayPalabras = arrayPalabras.toString();
    for(let i = 0; i < arrayPalabras.length; i++) {
      if (arrayPalabras[i].toLowerCase() === caracter) contador.push(i);
    }
      return contador.length;
  }
console.log(contarCaracteres(["hola", "casa", "mapa"], "a"))*/
/*
Ejercicio bisiesto:
Escriba un programa que pida un año y que escriba si es bisiesto o no.
Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.*/


function esBisiesto(año){
  if((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    return true
  } else{
    return false
  }
}
let año = parseInt(prompt("Introduzca año"))
console.log(esBisiesto(año))


