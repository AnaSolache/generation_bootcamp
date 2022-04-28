/* for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        console.log("*")
    }
}
   */

/* ----------------Ejercicio 1---------------- */
//Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
//El ciclo se mantendrá mientras que el valor de xValue sea positivo.

const ejercicio1 = (xValue) => {
    if (xValue < 0) {
      return console.log('Ingresa un número positivo')
    } else {
      while (xValue > 0) {
        xValue  -= 0.5;
        console.log(xValue);
      }
    }
  }
  
// ejercicio1(4)
  



/*--------------- Ejercicio 2 ----------------*/
//Imprime todos los números impares entre 1 y 100

const ejercicio2 = () => {
    for (let i = 1; i <= 100; i++) {
      if (i%2 === 1) {
        console.log(i);
      }
    }
}

//ejercicio2()





/*--------------- Ejercicio 3 ----------------
//Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6]*/

const ejercicio3 = (n) => {
    let i = 1;
    let str = [];
    while (i <= n) {
      str += `[${i}] `
      i++;
    }
    console.log(str);
  }
   
  //ejercicio3(10)
  

/*--------------- Ejercicio 4 ----------------*/
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n
//ejemplo: n = 5 sum = 15     
//por que (1 + 2 + 3 + 4 +5 )

const ejercicio4 = (n) => {
    let res = 0;
   for(let i = 1; i<=n; i++){
        res += i;
   }
   console.log(res);
}
//ejercicio4(5)