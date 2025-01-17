# PROYECTO 1 - TEXT ANALYZER

El Text Analyzer es una aplicación web que te permite analizar y obtener métricas de un texto ingresado por ti.

## Funcionalidades

La aplicación cuenta con las siguientes funcionalidades:

- **Recuento de palabras**: Muestra el número total de palabras en el texto que ingreses.
- **Recuento de caracteres**: Te indica la cantidad de caracteres presentes en el texto, incluyendo espacios y signos de puntuación.
- **Recuento de caracteres sin espacios y signos de puntuación**: Muestra el número de caracteres en el texto, excluyendo los espacios y signos de puntuación.
- **Longitud promedio de palabras**: Calcula y te muestra la longitud promedio de las palabras en el texto.
- **Recuento de números**: Cuenta y te informa cuántos números hay en el texto ingresado.
- **Suma total de números**: Si hay números en el texto, realiza la suma de todos ellos y muestra el resultado.

## Cómo usar la aplicación 

1. Accede a la aplicación [aquí](https://andreastefbustos.github.io/DEV009-text-analyzer-1/)
2. En el cuadro de texto, escribe el texto que deseas analizar.
3. A medida que vayas escribiendo, verás cómo se actualizan las métricas en tiempo real.
4. Puedes experimentar con diferentes textos y observar los resultados obtenidos.
5. Si deseas borrar el contenido del cuadro de texto, simplemente haz clic en el botón "Limpiar métricas".

## Información adicional

* Este proyecto se ha desarrollado utilizando tecnologías como: 
- HTML
- CSS
- JavaScript

## Realización del PROTOTIPO 

BAJA FIDELIDAD

![PROTOTIPO BAJA FIDELIDAD](/prototipo-bf-p1.png)

PALETA DE COLORES

![PROTOTIPO PALETA DE COLORES](/prototipo-paletaDeColores.png)

FINAL PROYECTO TEXT ANALYZER

![TEXT ANALYZER](/proyectoTextAnalyzer.png)

## Paletas de Colores

- **Fondo**: Se ha utilizado el color "seashell" como color de fondo del cuerpo para crear un ambiente tranquilo y agradable, lo que ayuda a los usuarios a concentrarse en el contenido del texto que están analizando.

- **Elementos resaltados**: Los elementos de la clase "characters" se muestran en un tono de gris claro (#eaeaea), lo que les permite destacar de manera sutil y brinda una sensación de elegancia al diseño general.

- **Destacar información clave**: Se utilizado el color "coral" para resaltar ciertas partes del texto que son especialmente relevantes o importantes. Esto ayuda a los usuarios a identificar rápidamente la información clave en los resultados del análisis.

La combinación de estos colores en esta paleta busca lograr una estética visual coherente y agradable, mejorando así la experiencia de los usuarios al interactuar con el Text Analyzer.

Se que esta elección de colores contribuya a crear una experiencia de usuario agradable y eficiente, donde los usuarios puedan realizar análisis de texto de manera intuitiva y sin distracciones visuales.

## Organización del Proyecto

### Estructura del proyecto

Se crea una carpeta `src` donde se le asignaron los archivos `index.html`, `styles.css`, `analyzer.js`, `index.js` y proyecto1.md.

- `index.html`: Archivo principal que contiene la estructura HTML de la página.
- `styles.css`: Archivo CSS que define los estilos visuales del proyecto.
- `analyzer.js`: Archivo JavaScript que contiene la lógica y funcionalidad del Text Analyzer.
- `index.js`: Archivo JavaScript donde se escucha los eventos del DOM, invocaciones de los métodos del objeto analyzer y actualizaciones del resultado en la UI (interfaz de usuario).
- `proyecto1.md`: Documento actual que proporciona información sobre el proyecto.

## Flujo de trabajo

1. Realicé una planificación inicial para definir los requisitos y funcionalidades del Text Analyzer.
2. Diseñé la interfaz gráfica utilizando HTML y CSS, siguiendo los principios de diseño responsivo.
3. Implementé la funcionalidad del Text Analyzer utilizando JavaScript, dividiendo el código en módulos para facilitar el mantenimiento.
4. Realicé pruebas exhaustivas para asegurarme de que el Text Analyzer funcione correctamente y cumpla con los requisitos establecidos.
5. Realicé mejoras adicionales en el diseño y la funcionalidad según las retroalimentaciones recibidas.

## Control de versiones

He utilizado Git como sistema de control de versiones para mantener un registro detallado de los cambios realizados en el proyecto.

# Pasos de la realición del proyecto explicando sus funcionalidades. 

1. ## HTML 

* **Uso de HTML semántico**
- Implementación de la etiqueta `<header>` y `<h1>`. La etiqueta `<header>` en HTML se utiliza para marcar la sección de encabezado o cabecera de un documento HTML o una sección de contenido específica. Representa información introductoria o de navegación que generalmente se encuentra en la parte superior de la página. Por otra parte la etiqueta `<h1>` se utiliza para definir los títulos.
- La etiqueta `<ul>` en HTML se utiliza para crear una lista desordenada. Una lista desordenada es un conjunto de elementos de lista que no tienen un orden específico y se presentan con viñetas o puntos. Es importante destacar que cada elemento de lista debe estar contenido dentro de un `<li>` y que la etiqueta `<ul>` solo debe contener elementos `<li>` como hijos directos.
- Luego se utilizó la etiqueta `<textarea>` que se utiliza en HTML para crear un área de texto editable en la que los usuarios pueden ingresar y editar texto de varias líneas.
- Implementación del uso de la etiqueta `<button>` para permitirle al usuario, mediante un clic, limpiar el contenido de la caja.
- Implementación de la etiqueta `<footer>` que representa el pie de página de un documento o una sección de contenido.

2. ## CSS

Creación de la hoja de estilos CSS, utilizando los diferentes tipos de selectores.

* Uso de selectores de CSS
* Modelo de caja (box model): El modelo de caja (box model) es un concepto fundamental en CSS que define cómo se representa visualmente un elemento en una página web. Consiste en  componentes como: padding, border y margin. Cada componente tiene un propósito específico y se utiliza para controlar la apariencia y el diseño del elemento.

Un resumen de cada componente:

- `Padding`: Es un espacio adicional que se coloca entre el contenido y el borde. Se utiliza para proporcionar espacio interno al elemento y separarlo del borde. Se define mediante las propiedades de padding-top, padding-right, padding-bottom y padding-left.
- `Border`: Es una línea que rodea el contenido y el relleno del elemento. Puede tener diferentes estilos, grosores y colores. Se define mediante las propiedades de border-width, border-style y border-color.
- `Margin`: Es el espacio que se encuentra fuera del borde, entre el elemento y los elementos adyacentes. Se utiliza para controlar el espaciado entre elementos y crear márgenes visuales entre ellos. Se define mediante las propiedades de margin-top, margin-right, margin-bottom y margin-left.

En resumen, el modelo de caja y sus componentes (`padding`, `border` y `margin`) se utilizan para controlar la apariencia, el espaciado y el diseño de los elementos en una página web. Al ajustar estos componentes con propiedades CSS, se puede lograr el aspecto deseado y controlar cómo los elementos se posicionan y se relacionan entre sí en la página.

3. ## Web APIs

* **Uso de selectores del DOM**

- querySelector: Es un método utilizado en JavaScript para seleccionar elementos HTML en función de un selector CSS. Permite obtener una referencia a un elemento específico o a un conjunto de elementos en el DOM (Documento de Objetos del Modelo).

La sintaxis básica del método querySelector es la siguiente:

```js
document.querySelector(selector)
```

Donde:
* `document` se refiere al objeto global del DOM.
* `querySelector` es el método que se utiliza para seleccionar elementos.
* `selector` es una cadena de texto que representa el selector CSS utilizado para identificar los elementos deseados.

El método `querySelector` devuelve el primer elemento que coincide con el selector especificado. Si no se encuentra ningún elemento, devuelve null.

- getElementById: Es un método utilizado en JavaScript para obtener una referencia a un elemento HTML específico en el DOM (Documento de Objetos del Modelo) utilizando su ID.

La sintaxis del método getElementById es la siguiente:

```js
document.getElementById(id)
```

Donde: 

* `document` se refiere al objeto global del DOM.
* `getElementById` es el método utilizado para buscar un elemento por su ID.
* `id` es una cadena de texto que representa el ID del elemento que deseas obtener.

El método getElementById devuelve el elemento HTML que tiene el ID especificado. Si no se encuentra ningún elemento con ese ID, devuelve null.

El método getElementById es útil cuando se necesita acceder a un elemento específico del DOM y se conoce su ID. Es una forma rápida y sencilla de obtener una referencia directa a ese elemento en JavaScript.

* **Manejo de eventos del DOM (listeners, propagación, delegación)**

Un event listener (escuchador de eventos) es una función que se utiliza en JavaScript para "escuchar" o "observar" eventos que ocurren en un elemento HTML o en el documento en general. Permite ejecutar código en respuesta a un evento específico, como un clic del mouse, una pulsación de tecla, el cambio de valor de un campo de entrada, entre otros.

Los event listeners se agregan a los elementos HTML para que puedan responder a interacciones del usuario o a cambios en el estado de la página. Cuando ocurre el evento especificado, se ejecuta la función de event listener asociada.

La sintaxis básica para agregar un event listener a un elemento HTML es la siguiente:

```js
elemento.addEventListener(evento, función)
```

Donde:

* `elemento` es el elemento HTML al que deseas agregar el event listener.
* `evento` es una cadena de texto que representa el tipo de evento que deseas escuchar, como "click", "keydown", "change", etc. En este proyecto se utilizo "click" y "keyup"
* `función` es la función que se ejecutará cuando ocurra el evento. Puede ser una función existente o una función anónima.

`función anónima`: No tiene un nombre específico asociado. En lugar de ser definida con un nombre identificador, se declara directamente como una expresión de función. Aunque no tiene un nombre, puede ser asignada a una variable o utilizada como argumento de otra función.

`función existente` : Definida previamente con un nombre específico y se puede invocar utilizando ese nombre.

* **Manipulación dinámica del DOM**

- `textContent` y `innerHTML`: Son propiedades que se utilizan en JavaScript para acceder al contenido textual de un elemento HTML y para establecer o modificar dicho contenido.

Algunas de sus diferencias son: 

1. Contenido manipulado:
- `textContent` obtiene o establece el contenido textual de un elemento, sin procesar las etiquetas HTML presentes en él.
- `innerHTML` obtiene o establece el contenido HTML interno de un elemento, incluyendo las etiquetas HTML y el texto que pueda haber dentro de él.

2. Tratamiento de etiquetas HTML:
- `textContent` considera las etiquetas HTML como texto plano y las muestra tal como están, sin interpretarlas como elementos HTML.
- `innerHTML` interpreta y renderiza las etiquetas HTML presentes en el contenido y las trata como elementos HTML

3. Seguridad:
- `textContent` es más seguro en términos de seguridad, ya que garantiza que cualquier contenido ingresado se trate como texto y no como código ejecutable. Esto ayuda a prevenir ataques de scripts maliciosos (XSS).
- `innerHTML` puede ser menos seguro, ya que si se establece contenido HTML sin una sanitización y validación adecuadas, se corre el riesgo de permitir la ejecución de código malicioso.

4. Estructura del DOM:
- `textContent` no afecta la estructura del DOM, ya que solo trata el contenido como texto sin interpretar las etiquetas HTML.
- `innerHTML` puede afectar la estructura del DOM, ya que puede agregar, modificar o eliminar elementos HTML dentro del elemento objetivo.

5. Rendimiento:
- `textContent` generalmente tiene un rendimiento mejor que `innerHTML`, ya que no implica el procesamiento y renderizado de las etiquetas HTML presentes en el contenido.

En resumen, `textContent` es más adecuado cuando se necesita acceder o establecer el contenido textual simple de un elemento, mientras que `innerHTML` es más adecuado cuando se desea manipular el contenido HTML, incluyendo etiquetas y texto dentro del elemento. Sin embargo, se debe tener cuidado al utilizar `innerHTML` para evitar problemas de seguridad.

4. ## JavaScript

Implementación de las funcionalidades.

## **Recuento de palabras:** 

La aplicación cuenta el número de palabras en el texto de entrada y muestra este recuento al usuario. Trabajando así de la siguiente manera. 

```js
getWordCount: (text) => {
  const words = text.split(" ");
  const wordCount = words.length;
  return wordCount;
}
```
*Explicación paso a paso del código:*

1. La función recibe un parámetro `text` que es de tipo string y representa el texto de entrada.
2. `const words = text.split(" ")`; se utiliza el método `split(" ")` para dividir el texto en palabras. El separador utilizado es un espacio en blanco.
3. Esto devuelve un array de palabras.
4. `const wordCount = words.length`; se obtiene la longitud del array de palabras, que corresponde al número de palabras en el texto.
5. Se devuelve el valor de `wordCount`, que representa el recuento de palabras en el texto

## **Recuento de caracteres:** 

La aplicación cuenta el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación, y muestra este recuento al usuario.

```js
getCharacterCount: (text) => {
  const charaterCount = text.length;
  return charaterCount;
}
```

*Explicación paso a paso del código:*

1. La función recibe un parámetro 'text' que es de tipo string y representa el texto de entrada.
2. `const charaterCount = text.length`; se utiliza la propiedad 'length' para obtener la longitud del texto, que corresponde al número de caracteres.
3. Se devuelve el valor de `characterCount`, que representa el recuento de caracteres en el texto.

## **Recuento de caracteres excluyendo espacios y signos de puntuación:** 

La aplicación cuenta el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación, y muestra este recuento al usuario.

```js
getCharacterCountExcludingSpaces: (text) => {
    
    let characterCountExcludingSpaces = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().length;
    return characterCountExcludingSpaces;
}
```

*Explicación paso a paso del código:*

A. `text.replace(/[^\w\s]|_/g, "")`: Esta línea utiliza el método replace en el texto `text` para reemplazar ciertos caracteres. La expresión regular `/[^\w\s]|_/g` busca caracteres que no son alfanuméricos (`[^\w\s]`) o el guion bajo (`_`). La `g` al final indica que se deben buscar todas las ocurrencias. Estos caracteres encontrados son reemplazados por una cadena vacía, es decir, se eliminan del texto.

***Explicación paso a paso de la expresión regular `/[^\w\s]|_/g`***

1. `/`: Las expresiones regulares en JavaScript se delimitan por barras diagonales /. Esta barra diagonal indica el inicio de la expresión regular.
2. `[^\w\s]`: Los corchetes [] se utilizan para definir una clase de caracteres. En este caso, `^\w\s` es la clase de caracteres.
  - `^\w`: El acento ^ dentro de una clase de caracteres negada indica que se deben excluir los caracteres que coincidan con esta clase.
  - `\w`: El caracter `\w` representa cualquier carácter alfanumérico, es decir, letras del alfabeto (mayúsculas y minúsculas) y dígitos del 0 al 9.
  - `\s`: El caracter `\s` representa cualquier espacio en blanco, incluyendo espacios, tabulaciones y saltos de línea.

Entonces, `[^\w\s]` representa cualquier carácter que no sea alfanumérico ni un espacio en blanco.

3. `|`: El símbolo de barra vertical `|` se utiliza para indicar una alternativa. En este caso, la alternativa es `_`, que es el guion bajo.
4. `_/g`: Después del símbolo de barra vertical viene `_`, que representa el guion bajo. Esta alternativa se utiliza para incluir el guion bajo como parte de la expresión regular.
5. `/`: La barra diagonal indica el final de la expresión regular.
6. `g`: La `g` al final de la expresión regular indica que la búsqueda debe realizarse de forma global, es decir, encontrar todas las ocurrencias en lugar de detenerse después de encontrar la primera coincidencia.

En resumen, la expresión regular `/[^\w\s]|_/g` busca cualquier carácter que no sea alfanumérico ni un espacio en blanco, o el guion bajo, y se utiliza para realizar reemplazos en el texto en la función `getCharacterCountExcludingSpaces`.

B. `.replace(/\s+/g, "")`: Después de haber realizado el reemplazo anterior, esta línea se encarga de eliminar los espacios en blanco adicionales que puedan haber quedado en el texto. La expresión regular `/\s+/g` busca una o más ocurrencias de espacios en blanco consecutivos y los reemplaza por una cadena vacía.

***Explicación paso a paso de la expresión regular `/\s+/g`***

1. `/`: Al igual que en el caso anterior, la barra diagonal indica el inicio de la expresión regular.
2. `\s+`: Aquí tenemos el caracter `\s` seguido del símbolo `+`.
  - `\s`: El caracter `\s` representa cualquier espacio en blanco, incluyendo espacios, tabulaciones y saltos de línea.
  - `+`: El símbolo `+` indica que el espacio en blanco puede aparecer una o más veces de forma consecutiva.

En resumen, `\s+` representa una o más repeticiones de espacios en blanco consecutivos.

3. `/`: La barra diagonal indica el final de la expresión regular.
4. `g`: Al igual que antes, la `g` al final indica que la búsqueda debe realizarse de forma global para encontrar todas las ocurrencias en lugar de detenerse después de encontrar la primera coincidencia.

En resumen, la expresión regular `/\s+/g` busca cualquier secuencia de espacios en blanco consecutivos en el texto y se utiliza para realizar reemplazos en la función `getCharacterCountExcludingSpaces`.

C. `.trim().length`: Finalmente, se aplica el método `trim` al texto para eliminar cualquier espacio en blanco al inicio o al final. Luego, se obtiene la propiedad `length` del texto resultante, que representa la cantidad de caracteres en el texto después de haber realizado los reemplazos anteriores.

En resumen, esta función `getCharacterCountExcludingSpaces` retorna la cantidad de caracteres en el texto `text`, excluyendo los espacios en blanco y los caracteres no alfanuméricos.

Otra manera de realizar el código:

```js
getCharacterCountExcludingSpaces: (text) => {
  const punctuation = [",", ".", "!", "?", ";", ":", "-", "'", '"', "{", "}", "+", "=", "<", ">", "$", "#", "@", "%", "^", "*", "(", ")", "_", "|", "~", "`", "&", "[", "]", "/"];
  
  function isPunctuation(char) {
    for(let i = 0; i < punctuation.length; i++) {
      if (char === punctuation[i]) {
        return true;
      }
    }
    
    return false;
  }

  let cleanedText = " ";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char !== " " && !isPunctuation(char)) {
      cleanedText += char;
    }
  }

  let characterCountExcludingSpaces = cleanedText.trim().length;

  return characterCountExcludingSpaces;
}
```

*Explicación paso a paso del código:* 

1. Se define un array `punctuation` que contiene los signos de puntuación que queremos excluir.
2. Se declara una función `isPunctuation` que recibe un carácter `char` y verifica si es un signo de puntuación. La función itera sobre el array `punctuation` y compara cada elemento con el carácter. Si encuentra una coincidencia, devuelve `true`. Si no encuentra ninguna coincidencia al final del bucle, devuelve `false`.
3. Se inicializa la variable `cleanedText` como una cadena vacía.
4. Se itera sobre cada carácter del texto de entrada utilizando un bucle `for`. En cada iteración, se comprueba si el carácter no es un espacio en blanco y no es un signo de puntuación utilizando la función `isPunctuation`. Si cumple esta condición, se agrega el carácter a la variable `cleanedText`.
5. Después de completar el bucle, se elimina cualquier espacio en blanco adicional al principio o al final de la cadena `cleanedText` utilizando el método `trim()`.
6. Se obtiene la longitud de la cadena `cleanedText` y se asigna a la variable `characterCountExcludingSpaces`.
7. Se retorna el valor de `characterCountExcludingSpaces`.

En resumen, esta función recorre el texto de entrada carácter por carácter, excluyendo los espacios en blanco y los signos de puntuación, y cuenta la cantidad de caracteres resultante.

## **Recuento de números:** 

La aplicación cuenta cúantos números hay en el texto de entrada y muestra este recuento al usuario.

```js
getNumberCount: (text) => {
  const words = text.split(" ");
  let numberCount = 0;
  
  for(let i = 0; i < words.length; i++){
    const char = words[i];
    
    if(Number(char)){
      numberCount++;
    } 
  }
  
  return numberCount;
}
```

*Explicación paso a paso del código:*

1. La función recibe un parámetro `text` que es de tipo string y representa el texto de entrada.
2. Se divide el texto en palabras individuales utilizando el método `split` con el espacio como separador y se almacenan en el array `words`.
3. Se inicializa la variable `numberCount` con el valor 0. Esta variable se utilizará para contar los números encontrados.
4. Se inicia un bucle `for` que recorre cada elemento en el array `words`. En cada iteración, se asigna el elemento actual a la variable `char`.
5. Dentro del bucle, se verifica si `char` se puede convertir a un número válido utilizando la función `Number` que se utiliza para convertir un valor en su representación numérica, puede ser utilizada con diferentes tipos de datos, como cadenas de texto (strings), booleanos y otros valores. Si la conversión es exitosa, lo cual significa que `char` es un número válido, se incrementa `numberCount` en `1`. Esto significa que hemos encontrado un número en el texto.
6. Finalmente, fuera del bucle, se devuelve el valor de `numberCount`, que representa la cantidad total de números encontrados en el texto.

En resumen, la función `getNumberCount` divide el texto en palabras y luego itera sobre cada palabra para verificar si se puede convertir a un número. Si es así, se incrementa el contador de números `numberCount`. Al final, se devuelve el resultado de `numberCount`, que representa la cantidad total de números encontrados en el texto

## **Suma total de números:** 

La aplicación cuenta todos los números que hay en el texto de entrada y muestra el resultado al usuario.

```js
getNumberSum: (text) => {
  const words = text.split(" ");
  let numberSum = 0;
    
  for(let i = 0; i < words.length; i++){
    const char = words[i];

    if(Number(char)){
      numberSum += parseFloat(char);
    }
  }
  
  return numberSum;
}
```

*Explicación paso a paso del código:*

1. La función `getNumberSum` recibe un parámetro `text`, que es una cadena de texto en la que queremos buscar números y calcular su suma.
2. En esta línea, se declara una variable llamada `words` que almacena un array de palabras obtenidas al dividir el texto en base a los espacios. La función `split(" ")` divide el texto en palabras separadas por espacios y crea un array con esas palabras.
3. La variable `numberSum` se inicializa como 0 y se utilizará para almacenar la suma total de los números encontrados.
4. Comienza un bucle `for` que recorre cada elemento en el array `words`. En cada iteración, se asigna la palabra actual a la variable `char`.
5. Se verifica si `char` se puede convertir a un número válido utilizando la función `Number()`. Si la conversión es exitosa y `char` representa un número, se ejecuta el bloque de código dentro de este `if`.
6. Dentro del `if`, se utiliza `parseFloat` para convertir `char` en un número decimal (punto flotante) y se suma ese valor a la variable `numberSum`. Esto permite acumular la suma de los números encontrados en el texto.
7. Finalmente, se retorna el valor de `numberSum`, que representa la suma de todos los números encontrados en el texto.

En resumen, esta función divide el texto en palabras y luego itera sobre cada palabra. Si una palabra puede ser convertida a un número válido, se suma ese número a la variable `numberSum`. Al final, se devuelve la suma total de los números encontrados en el texto.
## **Longitud media de las palabras:** 

La aplicación calcula la longitud media de las palabras en el texto de entrada y se la muestra al usurio al usuario.

```js
getAverageWordLength: (text) => {    
  const words = text.split(" ");
  let sum = 0;

  for (let i = 0; i < words.length; i++) {
    sum += words[i].length;
  }

  const averageWordLength = sum / words.length;
  const averageWordLengthRounded = averageWordLength.toFixed(2);

  return parseFloat(averageWordLengthRounded);
}
```

*Explicación paso a paso del código:*

1. Se define una función `getAverageWordLength` que toma un parámetro `text`, que se espera que sea una cadena de texto.
2. Se divide el texto en palabras utilizando el método `split(" ")`. Esto crea un array llamado words que contiene cada palabra del texto como un elemento separado.
3. Se declara una variable `sum` e inicializa con el valor `0`. Esta variable se utilizará para sumar la longitud de todas las palabras.
4. Se inicia un bucle `for` que recorre cada palabra en el array `words`. La variable de control del bucle `i` se inicializa en `0`, y el bucle se ejecutará mientras `i` sea menor que la longitud de `words`.
5. Dentro del bucle, se accede a cada palabra utilizando `words[i]` y se obtiene su longitud utilizando la propiedad `length`. Luego, se suma la longitud de la palabra actual a la variable `sum`.
6. Después de completar el bucle, se calcula la longitud promedio dividiendo la suma total (`sum`) entre la cantidad de palabras en el texto (`words.length`). El resultado se almacena en la variable `averageWordLength`.
7. Se utiliza el método `toFixed(2)` en averageWordLength para redondear el resultado a dos decimales. La función `toFixed()` se utiliza para redondear un número decimal a una cantidad específica de decimales y devuelve una cadena de texto que representa el número redondeado. Se usa de la siguiente manera: `numero.toFixed(decimales)`. Donde `numero` es el número al que se le aplicará el redondeo y `decimales` es la cantidad de decimales a los que se desea redondear.
8. El valor redondeado de `averageWordLength` se convierte en un número utilizando `parseFloat()` que se utiliza para convertir una cadena de texto que representa un número en un valor de tipo `float` (número de coma flotante). Convierte la cadena en un número decimal y lo devuelve.  

En resumen, la función `getAverageWordLength` divide el texto en palabras, calcula la suma de las longitudes de las palabras y luego divide esa suma entre la cantidad de palabras para obtener la longitud promedio. El resultado se redondea a dos decimales y se devuelve como número.

5. ## Funcionalidades opcionales.

Se realizó algunas funciones opciones, como: 

* El recuento de palabras y caracteres sea 0 para una entrada de texto vacía.
* El recuento de palabras y caracteres sea 0 para una entrada de texto con solo espacios.
* El recuento de palabras y caracteres sea 0 para una entrada de texto con solo caracteres de puntuación.
* El recuento de promedio longitud sea 0 para una entrada de texto con solo caracteres de puntuación.

Por lo tanto se hicieron algunas modificaciones en las funciones: 

- `getWordCount(text)`
- `getCharacterCount(text)`
- `getAverageWordLength(text)`

## **Recuento de caracteres:**

```js
getWordCount: (text) => {
  
  if (text.trim() === "" || /^[,.:;«»[\]{}()¿?¡!\-"']+$/g.test(text)) {
    return 0;
  }
        
  const words = text.split(" ");
  const wordCount = words.length;
    
  return wordCount;
}
```

*Explicación paso a paso del código:*

1. `getWordCount: (text) => {`: Esta línea define una función llamada getWordCount que toma un parámetro text. La función calculará el número de palabras en el texto.

2. `if (text.trim() === "" || /^[,.:;«»[\]{}()¿?¡!\-"']+$/g.test(text)) {`: Esta línea verifica si el texto está vacío o si contiene solo caracteres de puntuación. Utiliza una expresión regular `(/^[,.:;«»[\]{}()¿?¡!\-"']+$/g)` para realizar la prueba. Si el texto cumple alguna de estas condiciones, la función devuelve 0, lo que indica que no hay palabras en el texto.

3. `const words = text.split(" ");`: Esta línea divide el texto en palabras individuales utilizando el método `split(" ")`, que divide el texto en cada espacio en blanco y devuelve un arreglo de palabras.

4. `const wordCount = words.length;`: Esta línea asigna la longitud del arreglo words a la variable wordCount. Esto representa el número total de palabras en el texto.

5. `return wordCount;`: Finalmente, la función devuelve el valor de `wordCount`, que es el número de palabras en el texto.

En resumen, esta función `getWordCount` calcula el número de palabras en un texto dado. Comienza verificando si el texto está vacío o contiene solo caracteres de puntuación. Si es así, devuelve 0. De lo contrario, divide el texto en palabras y devuelve la cantidad total de palabras.

## **Recuento de caracteres:**

```js
getCharacterCount: (text) => {
  
  if (text === "") {
    return 0;
  }
  
  const charaterCount = text.length;
  return charaterCount;
}
```

*Explicación paso a paso del código:*

1. `getCharacterCount: (text) => {`: Esta línea define una función llamada `getCharacterCount` que toma un parámetro `text`. La función calculará el número de caracteres en el texto.

2. `if (text === "") {`: Esta línea verifica si el texto está vacío. Si es así, significa que no hay caracteres en el texto y la función devuelve 0.

3. `return 0;`: Si el texto está vacío, la función termina aquí y devuelve 0, indicando que no hay caracteres en el texto.

4. `const charaterCount = text.length;`: Si el texto no está vacío, esta línea asigna la longitud del texto a la variable `charaterCount`. Esto representa el número total de caracteres en el texto, incluyendo espacios en blanco y caracteres especiales.

5. `return charaterCount;`: Finalmente, la función devuelve el valor de `charaterCount`, que es el número de caracteres en el texto.

En resumen, esta función `getCharacterCount` calcula el número de caracteres en un texto dado. Verifica si el texto está vacío y devuelve 0 en ese caso. Si el texto no está vacío, simplemente devuelve la longitud del texto, que representa el número total de caracteres.

## **Longitud media de las palabras:**

```js
getAverageWordLength: (text) => {    
  const punctuation = /^[,.:;«»[\]{}()¿?¡!\-"']+$/g;
    
  if (punctuation.test(text)) {
    return 0;
  }
    
  const words = text.split(" ");
  let sum = 0;

  for (let i = 0; i < words.length; i++) {
    sum += words[i].length;
  }

  const averageWordLength = sum / words.length;
  const averageWordLengthRounded = averageWordLength.toFixed(2);

  return parseFloat(averageWordLengthRounded);
}
```

1. `getAverageWordLength: (text) => {`: Se define una función llamada `getAverageWordLength` que toma un parámetro text. La función calculará la longitud promedio de las palabras en el texto.

2. `const punctuation = /^[,.:;«»[\]{}()¿?¡!\-"']+$/g;`: Se crea una expresión regular llamada punctuation que busca caracteres de puntuación en el texto. Esta expresión regular se utilizará más adelante para verificar si el texto contiene solo caracteres de puntuación.

3. `if (punctuation.test(text)) {`: Se utiliza el método `test()` de la expresión regular para verificar si el texto contiene solo caracteres de puntuación. Si es así, la función devuelve 0, ya que no hay palabras para calcular una longitud promedio.

4. `const words = text.split(" ");`: Se divide el texto en palabras individuales utilizando el método `split(" ")`, que divide el texto en cada espacio en blanco y devuelve un arreglo de palabras.

5. `let sum = 0;`: Se inicializa una variable sum que se utilizará para almacenar la suma de las longitudes de todas las palabras.

6. `for (let i = 0; i < words.length; i++) {`: Este bucle for itera a través de todas las palabras en el arreglo words.

7. `sum += words[i].length;`: Dentro del bucle, se agrega la longitud de cada palabra al valor de `sum`.

8. `const averageWordLength = sum / words.length;`: Después de completar el bucle, se calcula la longitud promedio dividiendo la suma de las longitudes de las palabras entre la cantidad de palabras.

9. `const averageWordLengthRounded = averageWordLength.toFixed(2);`: Esta línea redondea la longitud promedio a 2 decimales utilizando el método `toFixed(2)` y la asigna a la variable `averageWordLengthRounded`.

10. `return parseFloat(averageWordLengthRounded);`: Finalmente, la función devuelve el valor de `averageWordLengthRounded` como un número de punto `flotante (float)`.

En resumen, esta función `getAverageWordLength` calcula la longitud promedio de las palabras en un texto dado. Verifica si el texto contiene solo caracteres de puntuación y devuelve 0 si es así. Luego, divide el texto en palabras, suma sus longitudes y calcula la longitud promedio. El resultado se redondea a 2 decimales y se devuelve como un número de punto flotante.






















 

