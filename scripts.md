<script></script>

[defer] = carga el script al final que cargue el html, tambien es async y la ejecucion es al final.

[async] = carga el script en paralelo pero se detiene el html para ejecutar el script una vez es cargado.

[type="module"] = limita el alcance al archivo donde se usan las variables (import from/export default)

---

[scope] : Es el alcance que tienen las variables.

El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

[Global_Scope]
Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página. Aquí hay mucho riesgo de sobreescritura.

<!-- window : es nuestro ambito global. Exp. var message = "hola"; -->

<!-- -->

[Function_Scope]
Variables declaradas dentro de una función sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

<!-- var $ = function(message){ console.log(message)} -->

[Block_Scope]
Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

<!-- let / const -->

[Module_Scope]
Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.

<!-- <script type="module"></script> -->

[Closure]
Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaras fuera de su scope.

Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

es la convinacion del scope de una funcion y la funcion que fue definida.

[IIFE]
expresion funcional que se le invoca inmediatamente

<!-- (function(color) { function print(){console.log(color)}} )(); -->

## this

<code>this</code> se refiere a un objeto. Ese objeto es el que actualmente está ejecutando un pedazo de código.
