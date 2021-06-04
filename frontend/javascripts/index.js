document.addEventListener("DOMContentLoaded", () => {
    MeditationApi.grabMeditations()
    // Meditation.appendAllToPage()
    getUserMedia()
    // submitTextButton().addEventListener("click", onMeditationSubmitClick)
    StartRecordingButton().addEventListener("click", starty)
    stopRecordingButton().addEventListener("click", stoppy)
  })
  
  const onMeditationSubmitClick = (event) => {
    if(textBox().value) {
      
      MeditationApi.postMeditation()
    }
  }
  
  const starty = () => {
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
    let chunks = [];
    
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
    mediaRecorder.onstop = function(e) {
      console.log("recorder stopped");
      
      const clipName = prompt('Enter a name for your sound clip');
      
      const clipContainer = document.createElement('article');
      const clipLabel = document.createElement('p');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');
      
      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.innerHTML = "Delete";
      clipLabel.innerHTML = clipName;
      
      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      debugger
      MeditationApi.persistAudio(blob)
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      
      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      soundClips().appendChild(clipContainer);
      
      
      deleteButton.onclick = function(e) {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
    }
  }
  
  
  
  
  const stoppy = (event) => {
    mediaRecorder.stop()
    
  }
  
  const getUserMedia = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log('getUserMedia supported.');
      navigator.mediaDevices.getUserMedia (
        // constraints - only audio needed for this app
        {
          audio: true
        })
        
        // Success callback
        .then(function(stream) {
          console.log("congrats")
          return mediaRecorder = new MediaRecorder(stream)
          
        })
        
        // Error callback
       .catch(function(err) {
          console.log('The following getUserMedia error occurred: ' + err);
       }
    );
 } else {
    console.log('getUserMedia not supported on your browser!');
 }
}
