document.addEventListener("DOMContentLoaded", () => {    
    MeditationApi.grabMeditations()
    getUserMedia()
    recordingButton().addEventListener("click", start)
    searchBarButton().addEventListener("click", Meditation.filterByKeyWord)
    
  })
  
  const onMeditationSubmitClick = (event) => {
    if(textBox().value) {
      
      MeditationApi.postMeditation()
    }
  }

  
  
  const start = () => {
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
    let chunks = [];
    
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
    recordingButton().removeEventListener("click", start)
    recordingButton().innerHTML = "Stop"
    recordingButton().addEventListener("click", stop)
    mediaRecorder.onstop = function(e) {
      console.log("recorder stopped");
      recordingButton().removeEventListener("click", stop)

      recordingButton().innerHTML = "Record"
      recordingButton().addEventListener("click", start)
      
      const clipName = prompt('Enter a name for your meditation');
      
      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      MeditationApi.persistAudio(blob, clipName)

    }
  }
  
  
  
  
  const stop = (event) => {
    mediaRecorder.stop()
    
  }
  
  const getUserMedia = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log('getUserMedia supported.');
      navigator.mediaDevices.getUserMedia (
        {
          audio: true
        })
        
        .then(function(stream) {
          console.log("congrats")
          return mediaRecorder = new MediaRecorder(stream)
          
        })
        
       .catch(function(err) {
          console.log('The following getUserMedia error occurred: ' + err);
       }
    );
 } else {
    console.log('getUserMedia not supported on your browser!');
 }
}
