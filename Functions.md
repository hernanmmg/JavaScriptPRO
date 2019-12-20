### Functions

Sirve para reutilizar código.
todas las funciones tienen el atributo prototype.

## Scope global vs scope local into of the function

var nombre = "H";

function name(nombre) {
nombre = nombre + "ola";
console.log(nombre);
}

name(nombre); // Hola
console.log(nombre); // H

## callback

funcion que recibe como parametro otra funcion o retorna una funcion

## high order function

.map() and .filter()

## first order function

no recibe como parametro una funcion o no retorna una funcion como salida.

## first class functions

numbers, strings, or objects, functions can be

Assigned as an identifier (variable) value
Assigned to object property values
Passed as arguments
Returned from functions

## function named > function anon

## Generators (function\*)

Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

- Los generadores regresan una función.
- Empiezan suspendidos y se tiene que llamar next para que ejecuten.
- Regresan un value y un boolean done que define si ya terminaron.

## funciones de un generador

[next()]. Continua la ejecución
.next(value)

keyword
[yield] /ceder/
es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.
