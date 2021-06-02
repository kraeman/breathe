class Meditation {
    static all = []

    constructor({audio, title, author, id}){
        this.audio = audio
        this.title = title
        this.author = author
        this.id = id
        Meditation.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByTitle(title) {
       return this.all.find(function(meditation) { meditation.title === title})
    }

    static findById(id) {
        return this.all.find(meditation => meditation.id === id)
    }

    static findOrCreateBy(meditationObj) {
        return this.findByTitle(meditationObj.title) || new meditation(meditationObj)
    }

    static render() {
        
    }

    // static renderMeditation(meditation) {
    //     const h4 = document.createElement("h4")
    //     const a = document.createElement("a")
    //     a.id = `meditation-${meditation.id}`
    //     a.innerText = meditation.name
    //     a.href = "#"
    //     a.addEventListener("click", (e) => renderComments(e, meditation))
    //     h4.appendChild(a)
    //     ul().appendChild(h4)
    // }

    // renderComments(comments) {
    //     return comments
    // }

       getUserMedia() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            console.log('getUserMedia supported.');
            navigator.mediaDevices.getUserMedia (
               {
                  audio: true
               })
               .then(function(stream) {
               })         
               .catch(function(err) {
                  console.log('The following getUserMedia error occurred: ' + err);
               }
            );
         } else {
            console.log('getUserMedia not supported on your browser!');
         }
       }
         
}
