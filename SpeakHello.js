// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// STEP 3: Create an object, called 'helloSpeaker' to which you will attach the "speak" method and which you will expose to the global context
// STEP 4: Rewrite the 'speak' function such that it is attached to the helloSpeaker object instead of being a standalone function.
// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it 'helloSpeaker' on the global scope as well.

(function (window){
	var speakWord = "Hello";
	var helloSpeaker = {};
	helloSpeaker.speak = function (name) {
  	console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);
