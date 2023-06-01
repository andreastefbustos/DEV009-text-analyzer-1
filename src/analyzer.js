const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let wordCount = text.split(" ").length;
    return wordCount;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let charaterCount = text.length;
    return charaterCount;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let characterCountExcludingSpaces = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().length;
    return characterCountExcludingSpaces;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let averageWordLength = (text.split(" ").length)/2;
    return averageWordLength;
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

console.log(analyzer.getWordCount("Hola, como estas no quiero"));
console.log(analyzer.getCharacterCount("Hola, como estas no quiero"));
console.log(analyzer.getCharacterCountExcludingSpaces("Hola, como estás no quiero"));
console.log(analyzer.getAverageWordLength("Hola, como estas no quiero"));
console.log(analyzer.getNumberCount("Hola, como 1011 estás no quiero 12349099 y 333"));
console.log(analyzer.getNumberSum("Hola, como 1011 estás no quiero 12349099 y 333"));

export default analyzer;
