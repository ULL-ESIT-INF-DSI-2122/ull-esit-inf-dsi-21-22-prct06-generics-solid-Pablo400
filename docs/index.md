# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

## Introducción

En esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también deberán utilizar los principios SOLID de diseño orientado a objetos.

## Tareas Previas

1. Aceptar la asignación de GitHub Classroom asociada a esta práctica.
2. La obtención de un informe acerca del cubrimiento del código fuente será un requisito obligatorio. Para ello, se deben utilizar las herramientas de Instanbul y Coveralls.

## Ejercicios explicados

### Ejercicio 1 - El combate definitivo

#### Enunciado

Partiendo del desarrollo realizado para el Ejercicio 1 de la Práctica 5, supongamos que ahora queremos incluir distintos tipos de contendientes a la pelea. Por ejemplo, podríamos incluir personajes del universo Marvel, DC Comics, Star Wars o Dragon Ball entre otros. Puede incluir otros universos y/o personajes que desee. Para extender el desarrollo anterior se pide:

  - Desarrolle una clase abstracta llamada ``Fighter`` que permita hacer que un contendiente pueda luchar. Esta clase se considerará la superclase del resto de clases a implementar. Para cada universo, desarrolle la clase que lo represente (Pokemon, Marvel, DC, Star Wars, Dragon Ball, etc).
  - Cada contendiente debe ser descendiente de su clase universo. Además, para cada contendiente se debe poder acceder a la información requerida para la clase ``Pokemon`` de la práctica anterior (nombre, altura, peso, etc). Puede incluir información extra que considere oportuna según el universo.
  - La clase ``Combat`` ahora permitará que los combates se disputen entre contendientes de distintos universos. Todas las combinaciones deben ser posibles, incluso contendientes del mismo universo. Asimismo, la simulación de los combates debe ser similar a la realizada en la práctica anterior. Sin embargo, ahora con cada ataque los contendientes deberán mostrar alguna catching phrase representativa de su personaje.
  - Actualice los valores de efectividad de los movimientos de los nuevos contendientes de la forma que considere oportuna. Contendientes de un universo son más fuertes que los de otro, personajes concretos son más fuertes que otros sin importar el universo o una mezcla de ambas. Puede basarse en un criterio similar al empleado en las prácticas anteriores sobre los tipos de Pokemon.
  - La clase ``Pokedex`` deberá actualizarse para incluir también el resto de contendientes. Esto es, deberá ser capaz de almacenar personajes de todos los universos considerados dentro de una misma estructura de datos. Además, deberá ofrecer todas las funcionalidades previamente requeridas para los nuevos contendientes.
  - Por último, desarrolle este ejercicio empleando los principios **SOLID Single Responsability** y **Open-Closed**.

#### Explicación

### Ejercicio 2 - DSIflix

#### Enunciado

Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

  - Defina una interfaz genérica ``Streamable`` que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
  - Defina una clase abstracta genérica ``BasicStreamableCollection`` que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz ```Streamable``, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
  - Tendrá que extender dicha clase abstracta para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
  - Trate de aplicar los principios **SOLID**. Preste especial atención al diseño de la interfaz ``Streamable``. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio **SOLID Interface segregation**.

#### Explicación

### Ejercicio 3 - El cifrado indescifrable

#### Enunciado

Cree una clase ``Cifrado`` que implemente las operaciones de codificación y decodificación ante un alfabeto y palabra clave arbitrarios, esto es, definidos por el usuario y que, además, pueden ser variables. Trate de aplicar los principios **SOLID** en su diseño.

#### Explicación




