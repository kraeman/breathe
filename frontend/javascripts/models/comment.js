class Comment {
    static all = []

    constructor({id, meditation_id, content}) {
        this.id = id
        this.meditation_id = meditation_id
        this.content = content
        Comment.all.push(this)
    }
 
    render() {
        const li = document.createElement("li")
        li.innerHTML = this.content
       let wta = document.getElementById(this.meditation_id).querySelector("ul")
        wta.appendChild(li)
        
    }

}