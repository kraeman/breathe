document.addEventListener("DOMContentLoaded", () => {
    // MeditationApi.grabMeditations()
    
    // CommentApi.grabComments()
    MeditationApi.grabMeditations()
    getUserMedia()
    // submitTextButton().addEventListener("click", onMeditationSubmitClick)
    recordingButton().addEventListener("click", starty)
    
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
    recordingButton().removeEventListener("click", starty)
    recordingButton().innerHTML = "Stop"
    recordingButton().addEventListener("click", stoppy)
    mediaRecorder.onstop = async function(e) {
      console.log("recorder stopped");
      recordingButton().removeEventListener("click", stoppy)

      recordingButton().innerHTML = "Record"
      recordingButton().addEventListener("click", starty)
      const clipName = prompt('Enter a name for your sound clip');
      
      const clipContainer = document.createElement('article');
      const clipLabel = document.createElement('p');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');
      const commentDiv = document.createElement('div')
      const ul = document.createElement('ul')
      const commentBox = document.createElement("textarea")
      const br = document.createElement('br')
      const submitCommentButton = document.createElement(['button'])

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.innerHTML = "Delete Meditation";
      submitCommentButton.innerHTML = "Submit Comment"

      clipLabel.innerHTML = clipName;
      
      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      await MeditationApi.persistAudio(blob, clipName)
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      
      
      commentDiv.appendChild(ul)
// debugger
    
      clipContainer.id = Meditation.all[Meditation.all.length - 1].id

      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(audio);
      clipContainer.appendChild(commentDiv)
      clipContainer.appendChild(commentBox)
      clipContainer.appendChild(submitCommentButton)

      clipContainer.appendChild(br)
      clipContainer.appendChild(deleteButton);
      soundClips().appendChild(clipContainer);

      
      
      deleteButton.onclick = function(e) {
        
        let evtTgt = e.target;
        let thing = evtTgt.parentNode.querySelector("audio").getAttribute('src')
        MeditationApi.deleteMeditation(thing)
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }



      submitCommentButton.onclick = function(e) {
        let commentText = e.target.parentNode.querySelector("textArea").value
        let li = document.createElement('li')
        li.innerHTML = commentText
        ul.appendChild(li)
        // debugger
        CommentApi.handleSubmit(commentText, e.target.parentNode.id)
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
