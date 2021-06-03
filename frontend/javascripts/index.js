// const mediaRecorder = new MediaRecorder(stream);

// record.onclick = function() {
//     mediaRecorder.start();
//     console.log(mediaRecorder.state);
//     console.log("recorder started");
//     record.style.background = "red";
//     record.style.color = "black";
//   }


// stop.onclick = function() {
//     mediaRecorder.stop();
//     console.log(mediaRecorder.state);
//     console.log("recorder stopped");
//     record.style.background = "";
//     record.style.color = "";
// }

// mediaRecorder.onstop = function(e) {
//     console.log("recorder stopped");
  
//     const clipName = prompt('Enter a name for your sound clip');
  
//     const clipContainer = document.createElement('article');
//     const clipLabel = document.createElement('p');
//     const audio = document.createElement('audio');
//     const deleteButton = document.createElement('button');
  
//     clipContainer.classList.add('clip');
//     audio.setAttribute('controls', '');
//     deleteButton.innerHTML = "Delete";
//     clipLabel.innerHTML = clipName;
  
//     clipContainer.appendChild(audio);
//     clipContainer.appendChild(clipLabel);
//     clipContainer.appendChild(deleteButton);
//     soundClips.appendChild(clipContainer);
  
//     const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
//     chunks = [];
//     const audioURL = window.URL.createObjectURL(blob);
//     audio.src = audioURL;
  
//     deleteButton.onclick = function(e) {
//       let evtTgt = e.target;
//       evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
//     }

//     startButton.addEventListener("click", (e) => Watch.startTimer())
//   }


document.addEventListener("DOMContentLoaded", () => {
    submitTextButton().addEventListener("click", onMeditationSubmitClick)
})

const onMeditationSubmitClick = (event) => {
    const data = {
        text: textBox().value
    }

    fetch("http://localhost:3000/meditations", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(resp => resp.json())
            // debugger
            .then(json => {debugger})
}

    // if(textBox().value) {
    //     const newMeditation = new Meditation(textBox().value)
    //     newMeditation.render()
    // }
// }

// const handleCreateWrittenMeditation = (event) => {
//     let formData = {
//         text: event.target.dataset.text
//       };
      
//       let configObj = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify(formData)
//       };
      
//       fetch(`http://localhost:3000/meditations/${event.target.dataset.id}`, configObj); 
// }