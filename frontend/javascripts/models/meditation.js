class Meditation {
   static all = []

   constructor({id, audio}) {
      //   this.text = text
      this.id = id
        this.audio = audio
        Meditation.all.push(this)
    }

   render() {
         const li = document.createElement("li")
         li.innerHTML = this.text
         listOfMeditations().appendChild(li)
   }

   

   static findOrCreateBy(meditationObj) {
      return this.findByName(meditationObj.name) || new Meditation(meditationObj)
  }

  static appendAllToPage(audi) {
    debugger
    for (const key in audi) {
          let medi = new this({
                id: key,
                audio: audi[key]
              })
          debugger
          const clipContainer = document.createElement('article');
          const clipLabel = document.createElement('p');
          const audio = document.createElement('audio');
          const deleteButton = document.createElement('button');
          debugger
          
          // clipContainer.classList.add('clip')
          audio.setAttribute('controls', '');
          audio.src = "http://localhost:3000" + medi.audio
          debugger
          deleteButton.innerHTML = "Delete";
          
          clipContainer.appendChild(audio);
          clipContainer.appendChild(clipLabel);
          clipContainer.appendChild(deleteButton);
          soundClips().appendChild(clipContainer);
          deleteButton.onclick = function(e) {
            debugger
            let evtTgt = e.target;
            // let thing = evtTgt.parentNode.querySelector("audio").getAttribute("src")
            MeditationApi.deleteMeditation(medi)
            evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
          }
    }
          // clipLabel.innerHTML = clipName;


          // chunks = Rails.application.routes.url_helpers.rails_blob_url(m, only_path: true)
          // const blob = new Blob(m, { 'type' : 'audio/ogg; codecs=opus' });
          // debugger





      // Meditation.all.forEach(m => {
      //       const clipContainer = document.createElement('article');
      //       const clipLabel = document.createElement('p');
      //       const audio = document.createElement('audio');
      //       const deleteButton = document.createElement('button');
      //       debugger

      //       clipContainer.classList.add('clip')
      //       audio.setAttribute('controls', '');
      //       deleteButton.innerHTML = "Delete";
      //       clipLabel.innerHTML = clipName;
      //       // chunks = Rails.application.routes.url_helpers.rails_blob_url(m, only_path: true)
      //       const blob = new Blob(m, { 'type' : 'audio/ogg; codecs=opus' });
      //       debugger

      // })




  }
 
}