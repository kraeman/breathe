class Meditation {
   static all = []

   constructor({text, audio}) {
        this.text = text
        this.audio = audio
        Meditation.all.push(this)
    }

   render() {
         const li = document.createElement("li")
         li.innerHTML = this.text
         listOfMeditations().appendChild(li)
   }

   
 
}