const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    const wordCount = words.length;
    return wordCount;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const charaterCount = text.length;
    return charaterCount;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    
    // 1. Forma de realizarlo con expresiones regulares
    // let characterCountExcludingSpaces = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().length;
    // return characterCountExcludingSpaces;

    // 2. Otra forma de realizarlo, declarando una variable con todos los signos de puntación, y realizando un for

    //Definir los signos de puntación que se desean excluir.
    const punctuation = [",", ".", "!", "?", ";", ":", "-", "'", '"', "{", "}", "+", "=", "<", ">", "$", "#", "@", "%", "^", "*", "(", ")", "_", "|", "~", "`", "&", "[", "]", "/"];

    //funcion para  verificar si un carácter es un signo de puntación 
    function isPunctuation(char) {
      for(let i = 0; i < punctuation.length; i++) {
        if (char === punctuation[i]) {
          return true;
        }
      }
      
      return false;
    }

    //Eliminar espacios y signos de puntación 
    let cleanedText = " ";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (char !== " " && !isPunctuation(char)) {
        cleanedText += char;
      }
    }

    //Eliminar espacios en blanco al principio y al final
    const characterCountExcludingSpaces = cleanedText.trim().length;

    //Retormar la cantidad de caracteres en el texto resultante
    return characterCountExcludingSpaces;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }

    const averageWordLength = sum / words.length;
    const averageWordLengthRounded = averageWordLength.toFixed(2);

    return parseFloat(averageWordLengthRounded);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    // console.log(words)
    let numberCount = 0;
    
    for(let i = 0; i < words.length; i++){
      const char = words[i];

      if(Number(char)){
        // console.log(char)
        numberCount++;
      } 
    }

    return numberCount;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    // console.log(words);
    let numberSum = 0;
    
    for(let i = 0; i < words.length; i++){
      const char = words[i];

      if(Number(char)){
        // console.log(char)
        numberSum += parseFloat(char);
      }
    }
    
    return numberSum;
  },
};

// console.log(analyzer.getWordCount("Conteo de palabras, caracteres y números June 2, 2023."));
// console.log(analyzer.getCharacterCount("Conteo de palabras, caracteres y números June 2, 2023."));
// console.log(analyzer.getCharacterCountExcludingSpaces("Conteo de palabras, caracteres y números June 2, 2023."));
// console.log(analyzer.getAverageWordLength("Conteo de palabras, caracteres y números June 2, 2023."));
// console.log(analyzer.getNumberCount("Esto no es un numero 090jjuu"));
// console.log(analyzer.getNumberSum("Conteo de palabras, caracteres y números June 2, 2023."));

export default analyzer;
