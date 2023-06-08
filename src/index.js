import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const userInput = document.querySelector('textarea[name = "user-input"]');
userInput.addEventListener('keyup', textAnalyzer);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);

function textAnalyzer(){
  const textArea = document.querySelector('textarea[name = "user-input"]').value;
  const wordCount = analyzer.getWordCount(textArea);
  const charaterCount = analyzer.getCharacterCount(textArea);
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textArea);
  const averageWordLength = analyzer.getAverageWordLength(textArea);
  const numberCount = analyzer.getNumberCount(textArea);
  const numberSum = analyzer.getNumberSum(textArea);
  document.querySelector('#word-count').innerHTML = wordCount;
  document.querySelector('#charater-count').innerHTML = charaterCount;
  document.querySelector('#character-count-excluding-spaces').innerHTML = characterCountExcludingSpaces;
  document.querySelector('#number-count').innerHTML = numberCount;
  document.querySelector('#number-sum').innerHTML = numberSum;
  document.querySelector('#average-word-length').innerHTML = averageWordLength;
}

function reset(){
  document.querySelector('textarea[name = "user-input"]').value = " ";
  document.querySelector('#word-count').innerHTML = "0";
  document.querySelector('#charater-count').innerHTML = "0";
  document.querySelector('#character-count-excluding-spaces').innerHTML = "0";
  document.querySelector('#average-word-length').innerHTML = "0";
  document.querySelector('#number-count').innerHTML = "0";
  document.querySelector('#number-sum').innerHTML = "0";
}


