
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

/*function ordenar (arr){
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

  function multiplicar(){
     let numero = prompt("Introduzca número");
     let resultado =[]
        let arr = [1,2,3,4,5,6,7,8,9,10];
    for(i=0; i< arr.length; i++){
        let total = numero + "x" + arr[i] + "="+ arr[i] * numero
       resultado.push(total)
    }
    return resultado
   }

   console.log(multiplicar())
