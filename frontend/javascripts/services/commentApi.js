class CommentApi {
    static all = []



    static handleSubmit = (text, mid) => {
        
        const data = {
            content: text,
            meditation_id: mid
        }
        fetch("http://localhost:3000/comments", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            
            let comment = new Comment(json)
            // debugger
            comment.render()
        })
    }




    //  static async grabComments() {
    //      const response = await MeditationApi.grabMeditations()

    //     fetch("http://localhost:3000/comments")
    //     .then(resp => resp.json())
    //     .then(json => {
    //         // debugger
    //             Comment.appendAllToPage(json)
    //         }
    //     )
    // }   

}