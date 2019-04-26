function startDictation() {
    var recognition = new webkitSpeechRecognition();
  
    recognition.continuous = false;
    recognition.interimResults = false;
  
    recognition.lang = "en-US";
    recognition.start();
    console.log("started");
  
    recognition.onresult = function(e) {
      console.log(e);
      document.getElementById("searchbox").value = e.results[0][0].transcript;
      recognition.stop();
    };
  
    recognition.onerror = function(e) {
      console.log(e);
      recognition.stop();
    };
  }
  
  document
    .getElementById("voice-button")
    .addEventListener("click", startDictation);