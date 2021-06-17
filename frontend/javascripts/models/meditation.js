class Meditation {
   static all = []

   constructor({id, audio, title, comments}) {
      //   this.text = text
      this.id = id
        this.audio = audio
        this.title = title
        this.comments = comments
        Meditation.all.push(this)
    }

   render() {
        //  const li = document.createElement("li")
        //  li.innerHTML = this.text
        //  listOfMeditations().appendChild(li)
   }

   

   static findOrCreateBy(meditationObj) {
      return this.findByName(meditationObj.name) || new Meditation(meditationObj)
  }

  static appendAllToPage(audi) {
    // debugger
    for (const key in audi) {
          let medi = new this({
                id: key,
                audio: audi[key]["url"],
                title: audi[key]["title"],
                comments: audi[key]["comments"]
              })
          const clipContainer = document.createElement('article');
          const clipLabel = document.createElement('p');
          const audio = document.createElement('audio');
          const deleteButton = document.createElement('button');
          const commentDiv = document.createElement('div')
          const ul = document.createElement('ul')
          const commentBox = document.createElement("textarea")
          const br = document.createElement('br')
          const submitCommentButton = document.createElement(['button'])

          // clipContainer.classList.add('clip')
          audio.setAttribute('controls', '');
          audio.src = "http://localhost:3000" + medi.audio
          
          deleteButton.innerHTML = "Delete Meditation";
          submitCommentButton.innerHTML = "Submit Comment"
          clipLabel.innerHTML = medi.title
          
          medi.comments.forEach(comment => {
            const li = document.createElement("li")
            li.innerHTML = comment.content
            ul.appendChild(li)
          })


          commentDiv.appendChild(ul)    

            clipContainer.id = medi.id
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
            // let thing = evtTgt.parentNode.querySelector("audio").getAttribute("src")
            MeditationApi.deleteMeditation(medi)
            evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
          }
          submitCommentButton.onclick = function(e) {
            let commentText = e.target.parentNode.querySelector("textArea").value
            let li = document.createElement('li')
            li.innerHTML = commentText
            ul.appendChild(li)
            CommentApi.handleSubmit(commentText, medi.id)

          }
    }

  }
 
}