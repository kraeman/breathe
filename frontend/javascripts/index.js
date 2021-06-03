document.addEventListener("DOMContentLoaded", () => {
    getUserMedia()
    const mediaRecorder = new MediaRecorder(stream)
    
    submitTextButton().addEventListener("click", onMeditationSubmitClick)
    stopRecordingButton().addEventListener("click", stoppy)
})

const onMeditationSubmitClick = (event) => {
    if(textBox().value) {
      
      MeditationApi.postMeditation()
      mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
    let chunks = [];

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
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
