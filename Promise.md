### Promise

Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

Solucion de funciones asincronicas o con callbacks, evitando callback hell.

## async / await

Promise.all([...]).then(responses => console.log('finished')); <!-- Ejecución en serie, recibe un array de respuestas-->

Promise.race([...]).then(response => console.log('finish')); <!-- Ejecución asyncrona, recibe una respuesta una vez van terminando de ejecutar cada item del array pero solo ejecuta el .then 1 vez -->
