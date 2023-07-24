let= fruits = ["Banana", "Orange", "Apple", "Mango"]; //variable que contiene un array de frutas
console.log(fruits) //Para comprobar qué hay dentro del array
let= length = fruits.length; //Cuenta y guarda la longitud del array, número de elementos, etc.(En este momento)
console.log(length) //Comprueba y muestra el número de los elementos del array
console.log(fruits[3]) //Comprobar la posición 3 en la lista del array(Devuelve el nombre)
fruits.push("Sandía") //Añade el elemento "Sandía" al array
console.log(fruits) // Comprueba si se ha añadido el último elemento
console.log(fruits.length) //Comprueba y muestra el número de los elementos del array ahora
let type = fruits; //Forma de comprobar el tipo de dato que hay en la variable
console.log(fruits) //Comprueba si se ha actualizado el Array

//**Define una función que escribe una lista de elementos desordenada a partir de un Array */
function lista(listaArray) {
  let text = "<ul>";
  for (let i = 0; i < listaArray.length; i++) {
    text += "<li>" + listaArray[i] + "</li>";
  }
  text += "</ul>";
  return text
}
console.log(lista(fruits))
document.write(lista(fruits)) //Escribe en el documento la función con todos los elementos de la lista


// function conUnNombre ()// => (nFruta)
//**Función para agregar un elemento a un Array*/
function frutaMas() { //Función que se encarga de crear la nueva lista de frutas
  let nFruta = document.getElementById("nombre").value // Guarda el valor que se introduzca en el input 
  console.log(nFruta) 


  if (typeof nFruta !== "string" && nFruta != "") {//Comprobar las características de los datos a introducir
    nFruta = nFruta.trim(); //Limpia la variable por delante y por detrás
    fruits.push(nFruta) //Insertar el valor en el array
    document.getElementById("array").innerHTML = lista(fruits) //**Busca el elemento con el Id especificado y lo añade al HTML */
    console.log(fruits) //Ver en la consola si realmente la fruta entró
  } else { 
    return "Insertar Fruta" //Sino devolver el texto "Insertar fruta"
  }
}
 



/**Función que borra el elemento que se seleccione de la lista 
function frutaMenos() {
  let= frutaM = document.getElementById ("fruta").value //Coger el valor del elemento con el Id "fruta"
  fruits.splice(frutaM)
  

  if (typeof frutaM ==="string" && frutaM !="") { //Tipo del string
    frutaM = frutaM.trim(); //Limpiar la palabra
    document.getElementById("array").innerHTML = lista(fruits) //¿¿ES NECESARIO??
    console.log(frutaM)

  } else {
    return "Inserte Fruta"
  }
  
}*/


//CORREGIR ERROR ARRIBA EN LET TYPEOF




console.log(fruits.reverse())


// console.log(frutaMas())
//QUEDÓ PENDIENTE EL ONCLICK DEL HTML

/**
 * @param {string} delFruta Fruta a borrar
 * @param {array} listaArray Array donde se busca la fruta
 * @return {array} Array sin fruta
 */
 function frutaM (delFruta, listaArray){
  //Comprobar que las variables son del tipo que esperamos.
  console.log(typeof delFruta, "tipo array", Array.isArray(cestaArray))
  //Comprobar que las variables son del tipo que esperamos
  console.log("Orange" !='string', "<=tipo string || tipo array", Array.isArray(listaArray))
  if (delFruta !=='string' || !Array.isArray(listaArray)){ //Si no es un string o no es un array...
    return "Una de las variables no es la esperada." // Devuelve ...""
  } else if(delFruta == "" || listaArray.length === 0){  // Si está vacío o es igual a 0
      return "Una de las variables está vacía." //Devuelve...
  } else { //Buscar la fruta que se quiere quitar:
      let posFruta = listaArray.indexOf(delFruta) // Para eliminar la fruta
      return listaArray.slice(posFruta) //Devuelve (return) la lista sin la fruta

  }
 
}
console.log(frutaM("Sandía", listaArray))


//function añadir(fruta);
//let= frutaMas = document.getElementById("nombre")
//return lista + frutaMas
//console.log(lista + frutaMas)



//document.getElementById("ejercicio").innerHTML= "Cesta: " + fruits.join(", ");



//document.getElementById("boton")= "escribir" + fruits

//La última función sería mediante onclick: pulsa botón y añade a la lista el elemento


