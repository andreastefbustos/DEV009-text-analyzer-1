# PROYECTO 1 - TEXT ANALYZER

Pasos de la realición del proyecto 

1. Realización del PROTOTIPO BAJA FIDELIDAD 

![PROTOTIPO BAJA FIDELIDAD](/prototipo-bf-p1.png)

2. Implementación de la etiqueta `<header>` y `<h1>`. La etiqueta `<header>` en HTML se utiliza para marcar la sección de encabezado o cabecera de un documento HTML o una sección de contenido específica. Representa información introductoria o de navegación que generalmente se encuentra en la parte superior de la página. Por otra parte la etiqueta `<h1>` se utiliza para definir los títulos.

3. La etiqueta `<ul>` en HTML se utiliza para crear una lista desordenada. Una lista desordenada es un conjunto de elementos de lista que no tienen un orden específico y se presentan con viñetas o puntos. Es importante destacar que cada elemento de lista debe estar contenido dentro de un `<li>` y que la etiqueta `<ul>` solo debe contener elementos `<li>` como hijos directos.

4. Luego se utilizó la etiqueta `<textarea>` que se utiliza en HTML para crear un área de texto editable en la que los usuarios pueden ingresar y editar texto de varias líneas.

5. Implementación del uso de la etiqueta `<button>` para permitirle al usuario, mediante un clic, limpiar el contenido de la caja. 

6. Implementación de la etiqueta `<footer>` que representa el pie de página de un documento o una sección de contenido.

7. Implementación de las funcionalidades.

- **Recuento de palabras:** la aplicación cuenta el número de palabras en el texto de entrada y muestra este recuento al usuario. Trabajando así de la siguiente manera. 

```js
getWordCount: (text) => {
//La función recibe un parámetro 'text' que es de tipo string y representa el texto de entrada.

// Se utiliza el método 'split(" ")' para dividir el texto en palabras. El separador utilizado es un espacio en blanco.
// Esto devuelve un array de palabras.
    const words = text.split(" ");

// Se obtiene la longitud del array de palabras, que corresponde al número de palabras en el texto.
    const wordCount = words.length;

// Se devuelve el valor de 'wordCount', que representa el recuento de palabras en el texto.
    return wordCount;
}
```

- **Recuento de caracteres:** la aplicación cuenta el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación, y muestra este recuento al usuario.

```js
getCharacterCount: (text) => {
// La función recibe un parámetro 'text' que es de tipo string y representa el texto de entrada.

// Se utiliza la propiedad 'length' para obtener la longitud del texto, que corresponde al número de caracteres.
    const charaterCount = text.length;

// Se devuelve el valor de 'characterCount', que representa el recuento de caracteres en el texto.
    return charaterCount;
}
```

- **Recuento de caracteres excluyendo espacios y signos de puntuación:** la aplicación debe cuenta el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación, y muestra este recuento al usuario.

```js
getCharacterCountExcludingSpaces: (text) => {
    
    let characterCountExcludingSpaces = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().length;
    return characterCountExcludingSpaces;
}
```

- **Recuento de números:** la aplicación cuenta cúantos números hay en el texto de entrada y muestra este recuento al usuario.

```js
getNumberCount: (text) => {
// La función recibe un parámetro 'text' que es de tipo string y representa el texto de entrada.

// Se inicializa la variable 'numberCount' con el valor 0. Esta variable se utilizará para contar los números encontrados.   
    
    let numberCount = 0;

// Se itera sobre cada carácter del texto utilizando un bucle 'for'.  
    for(let i = 0; i <= text.length; i++){
      let char = text[i];

// Se verifica si el carácter actual es un número utilizando la función 'isNaN' (is Not a Number) junto con 'parseInt'.
// 'parseInt' convierte el carácter a un número entero. Si el resultado de 'parseInt' no es un número válido, significa que el carácter no es un dígito numérico.
// Si el carácter es un dígito numérico, se incrementa el contador 'numberCount'.
    if (!isNaN(parseInt(char))) {
      numberCount++; 
    }

// Se devuelve el valor de 'numberCount', que representa el recuento de dígitos numéricos en el texto.
    return numberCount;
}
```

**Explicación sobre esta línea de código**
```js
let char = text[i];
```

Se está creando una variable llamada `char` y se le asigna el valor del carácter en la posición `i` del texto.

i. `text` es el parámetro de entrada que representa el texto que se está procesando.

ii. `text[i]` accede al carácter en la posición `i` del texto. La notación de corchetes ([]) se utiliza para acceder a un carácter específico en una cadena (texto). El índice `i` representa la posición del carácter en el texto, comenzando desde 0.

iii. `let char = text[i]` crea una nueva variable llamada `char` y se le asigna el valor del carácter en la posición `i` del texto.

Por ejemplo, si tenemos el texto `"Hola"`, en la primera iteración del bucle (cuando `i` es igual a 0), la línea `let char = text[i]`; se traduce en `let char = "H"`. En la segunda iteración (cuando `i` es igual a 1), se traduce en `let char = "o"`, y así sucesivamente.

La variable `char` se utiliza posteriormente en el código para realizar ciertas operaciones o comprobaciones con el carácter actual del texto.

- **Suma total de números:** la aplicación cuenta todos los números que hay en el texto de entrada y muestra el resultado al usuario.

```js
getNumberSum: (text) => {
    
    let numberSum = 0;
    
    for(let i = 0; i <= text.length; i++){
      let char = text[i];

      if(!isNaN(parseInt(char))){
        numberSum += parseInt(char)
      } 
    }

    return numberSum;
  }
```

i. La función `getNumberSum` recibe un parámetro `text`, que es una cadena de texto en la que queremos buscar números y calcular su suma.

ii. La variable `numberSum` se inicializa como 0 y se utilizará para almacenar la suma total de los números encontrados.

iii. Luego, se itera a través de cada carácter del texto utilizando un bucle `for`, comenzando desde `i = 0 hasta` `i <= text.length`.

iv. En cada iteración, se extrae el carácter actual del texto utilizando `text[i]` y se almacena en la variable `char`.

v. La condición `!isNaN(parseInt(char))` verifica si el carácter es un número. `parseInt(char)` intenta convertir el carácter en un número entero. Si el carácter no puede ser convertido en un número válido, parseInt devuelve `NaN` (Not a Number). Por lo tanto, `!isNaN(parseInt(char))` devuelve true si el carácter es un número y false si no lo es.

vi. Si el carácter es un número, se suma su valor a la variable `numberSum` utilizando `numberSum += parseInt(char)`.

vii. Después de iterar a través de todos los caracteres del texto, la función devuelve el valor final de `numberSum`, que representa la suma de todos los números encontrados en el texto.

- **Longitud media de las palabras:** la aplicación calcula la longitud media de las palabras en el texto de entrada y se la muestra al usurio al usuario.

```js
getAverageWordLength: (text) => {    
    
    const words = text.split(" ");
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }

    const averageWordLength = sum / words.length;
    const averageWordLengthRounded = Math.round(averageWordLength);

    return averageWordLengthRounded;
}
```

i. La función getAverageWordLength recibe un parámetro `text`, que es una cadena de texto.

ii. Utiliza el método `split(" ")` para dividir el texto en palabras. Esto crea un arreglo llamado `words` donde cada elemento es una palabra del texto.

iii. Se inicializa la variable `sum` en 0 para almacenar la suma de las longitudes de las palabras.

iv. Se itera sobre cada palabra en el arreglo `words` utilizando un bucle `for`. En cada iteración, se agrega la longitud de la palabra actual al valor de sum mediante `words[i].length`.

v. Después de completar el bucle, se calcula la longitud promedio dividiendo la suma (`sum`) entre la cantidad de palabras (`words.length`).

vi. Para redondear la longitud promedio al número entero más cercano, se utiliza `Math.round(averageWordLength)`.

vii. Finalmente, se retorna la longitud promedio redondeada

De esta manera, la función obtiene y devuelve la longitud promedio de las palabras en el texto, redondeada al número entero más cercano.




 

