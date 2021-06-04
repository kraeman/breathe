class Meditation {
   static all = []

   constructor({audio}) {
      //   this.text = text
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

  static appendAllToPage() {
      Meditation.all.forEach(m => {
            const clipContainer = document.createElement('article');
            const clipLabel = document.createElement('p');
            const audio = document.createElement('audio');
            const deleteButton = document.createElement('button');
            debugger
            clipContainer.classList.add()

      })




  }
 
}