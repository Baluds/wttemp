// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// var cats = [ 'men' , 'women' , 'computers' ];
// var grammar = '#JSGF V1.0; grammar cats; public <color> = ' + cats.join(' | ') + ' ;'

// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// // var diagnostic = document.querySelector('.output');
// // var bg = document.querySelector('html');
// // var hints = document.querySelector('.hints');
// var sear = document.querySelector('tryl');
// // var colorHTML= '';
// // cats.forEach(function(v, i, a){
// //   console.log(v, i);
// //   colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
// // });
// // hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

//  function searg () {
//   recognition.start();
//   console.log('Ready to receive a color command.');
// }

// recognition.onresult = function(event) {
//   // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
//   // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
//   // It has a getter so it can be accessed like an array
//   // The first [0] returns the SpeechRecognitionResult at the last position.
//   // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
//   // These also have getters so they can be accessed like arrays.
//   // The second [0] returns the SpeechRecognitionAlternative at position 0.
//   // We then return the transcript property of the SpeechRecognitionAlternative object
//   var cat = event.results[0][0].transcript;
//   //diagnostic.textContent = 'Result received: ' + cat + '.';
//   location.href= cat + '.html';
//   //bg.style.backgroundColor = color;
//   console.log('Confidence: ' + event.results[0][0].confidence);
// }
// //<a href="computers.html">Computers</a>


// recognition.onspeechend = function() {
//   recognition.stop();
// }

// recognition.onnomatch = function(event) {
//  // diagnostic.textContent = "I didn't recognise that color.";
// }

// recognition.onerror = function(event) {
//  // diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
// }
