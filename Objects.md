### Objects

key and value, una posicion en memoria ram

## descructuring - desglozar

const { key } = myObject;

function name(object) {
return {
...object,
value: value + 1
}
}

## hasOwnProperty

Pregunta si le pertenece y regresa un boleano

## Object.getProtortpeOf() === Object.prototype

## Object

es el punto de partida de todo los objetos js

funciones tmabien son objetos.

## Getter and Setter

const object = {
\_name: "alfonso",
\_set cambiarNombre(name) {
\_\_this.name = name;
\__get mostrarNombre() {
\_\_return this.name;
_}
}

object.cambiarNombre = "Hernan";

## Proxy

El proxy sirve para interceptar la lectura de propiedades de un objeto (los get, y set) entre muchas otras funciones. Así, antes de que la llamada llegue al objeto podemos manipularla con una lógica que nosotros definamos.

Interseptar funciones para cambiar sus argumentos y mas.
