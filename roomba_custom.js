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
    .getElementById("mike")
    .addEventListener("click", startDictation);


const search = instantsearch({
    appId: 'XUWG1277VG',
    apiKey: '0bd18526fc43f5dc2ecb530d649657d4',
    indexName: 'restaurants-v2',
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '.s-input-group',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
  })
);

search.start();
