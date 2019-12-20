### Class

new Persona() <!-- new: crea un nuevo objeto y se le asigna como prototipo Persona -->

## this

Se crea un objeto this que implicitamente sera retornado de la function.

## prototype

Persona.prototype.method = function () {
console.log()
}

function herencia(protoChild, protoFather) {
var fn = function () {}
fn.prototype = protoFather.prototype
protoChild.prototype = new fn
protoChild.prototype.constructor = protoChild
}<!-- Asignarle un prototipo hijo quien sera su padre -->

herencia(Desarrollador, Persona)

<!-- Herencia prototipal -->

class Persona {
constructor(n) {
this.n = n
}

sayHello() {
console.log()
}
}

class Desarrollador extends Persona {
constructor(n) {
super(n)
}

sayHello() {
console.log()
}
}
