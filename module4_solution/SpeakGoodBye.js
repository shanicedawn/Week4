// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// My Solution
(function (window) {
  var speakWord = "Goodbye ";
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
}) (window);