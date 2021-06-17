class Comment {
    static all = []

    constructor({id, meditation_id, content}) {
        this.id = id
        this.meditation_id = meditation_id
        this.content = content
        Comment.all.push(this)
    }
 
    // static findOrCreateBy(commentObj) {
    //     return this.find(commentObj.id) || new Comment(commentObj)
    // }

    render() {
        // debugger
        const li = document.createElement("li")
        li.innerHTML = this.content
       let wta = document.getElementById(this.meditation_id).querySelector("ul")
        wta.appendChild(li)
        
    }

    static appendAllToPage(i) {
        for (const key in i) {
            let comm = new this({
                id: key,
                content: i[key]['text'],
                med_id: i[key]['meditation_id']
            })
            let li = document.createElement('li')
            li.innerHTML = comm.content
            let wta = document.getElementById(comm.med_id)
            if(wta) {
                wta.appendChild(li)
            }
            }
    }

}