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
    let characterCountExcludingSpaces = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().length;
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
    const averageWordLengthRounded = Math.round(averageWordLength);

    return averageWordLengthRounded;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    
    let numberCount = 0;
    
    for(let i = 0; i <= text.length; i++){
      let char = text[i];

      if(!isNaN(parseInt(char))){
        numberCount++;
      } 
    }

    return numberCount;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
    let numberSum = 0;
    
    for(let i = 0; i <= text.length; i++){
      let char = text[i];

      if(!isNaN(parseInt(char))){
        numberSum += parseInt(char)
      } 
    }

    return numberSum;
  },
};

console.log(analyzer.getWordCount("Conteo de palabras, caracteres y números June 2, 2023."));
console.log(analyzer.getCharacterCount("Conteo de palabras, caracteres y números June 2, 2023."));
console.log(analyzer.getCharacterCountExcludingSpaces("Conteo de palabras, caracteres y números June 2, 2023."));
console.log(analyzer.getAverageWordLength("Conteo de palabras, caracteres y números June 2, 2023."));
console.log(analyzer.getNumberCount("Conteo de palabras, caracteres y números June 2, 2023."));
console.log(analyzer.getNumberSum("Conteo de palabras, caracteres y números June 2, 2023."));

export default analyzer;
