### Paradigmas

## Recursividad

Es la capacidad que tiene un funcion de llamarse asi misma dentro de su codigo

<<capa del stack>>

<!-- en funciones async el this puede cambiar -->

function factorial(num) {
if(!this.cache){
this.cache = {}
}
if (this.cache[num]){
return this.cache[num];
}
if (num == 0) {
return 1
}
this.cache[num] = num \* factorial(num - 1)
return this.cache[num]
}

## Closure

es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.

## call, apply and bind

Son parte del protipo de function, vienen empaquetadas para ser usadas en las funciones.

.bind <!-- Retorna una nueva funcion con el contexto cambiado -->
const bind = function.bind(contexto, args1, args2)
const bind = function.bind(contexto)
bind(args1)
.call(contexto, args1, args2, args3) <!-- Ejecuta la funcion y cambia el contexto-->
.apply(contexto, [args1, args2, args3]) <!-- Ejecuta la funcion y cambia el contexto ademas de recibir un array de parametros -->

const buttons = document.getElementByClassName("button");

Array.prototype.forEach.call(buttons, buttons => {
\_\_button.onclick = () => alert("Soy un botón");
})
