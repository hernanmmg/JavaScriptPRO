### Arquitectura

## Arquitectura de la aplicación Monolith: desarrollo complejo, operaciones simples

Las aplicaciones de Monolith son las más antiguas. La mayoría de las soluciones heredadas de la empresa se construyen con una arquitectura monolítica

# Javascript Engine / Motores de javascript

[V8] = chrome
[SpiderMonkey] = mozila
[JavascriptCore] = safari
[Chakra] = edge

## Event Loop

Esta entre medio del Stack y la cola de tareas, preguntando si hay tareas.. y pregunta si esta vacio el stack para verificar el [Task_Queue]

# Estructuras de datos

[Stack]. Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.

**push**. Agregar datos
**pop**. Sacar datos

[Memory_Heap]. De forma desorganizada se guarda información de las variables y del scope.

[Queue]. Primero que entra es lo primero que sale, encolamos tareas

[Schedule_Tasks]. Aquí se agregan a la cola, las tareas programadas para su ejecución. (1)
[Task_Queue]. Aquí se agregan las tares que ya están listas para pasar al stack y ser. (2)

ejecutadas. El stack debe estar vacío para que esto suceda.
[MicroTask_Queue]. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.(0) (Promises)
