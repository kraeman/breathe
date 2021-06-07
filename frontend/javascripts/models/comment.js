class Comment {
    static all = []

    constructor({author, id, med_id, content}) {
        this.author = author
        this.id = id
        this.med_id = med_id
        this.content = content
        Comment.all.push(this)
    }
 
     static findById(id) {
         return this.all.find(comment => comment.id === id)
     }
 
     static findOrCreateBy(commentObj) {
         return this.findByName(commentObj.name) || new Comment(commentObj)
     }

    render() {
        const li = document.createElement("li")
        li.innerHTML = `${this.text}`
    }
}