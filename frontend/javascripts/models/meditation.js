
class Meditation {
   static all = []

   constructor(text) {
        this.text = text
        Meditation.all.push(this)
    }

   render(json) {
         const li = document.createElement("li")
         li.innerHTML = json
         listOfMeditations().appendChild(li)
   }
 
}