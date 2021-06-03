class Meditation {
   static all = []

   constructor({text}) {
        this.text = text
        Meditation.all.push(this)
    }

   render() {
         const li = document.createElement("li")
         li.innerHTML = this.text
         listOfMeditations().appendChild(li)
   }
 
}