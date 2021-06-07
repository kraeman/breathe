class CommentApi {
    static all = []



    static handleSubmit = (text, mid) => {
        debugger
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
    }




    static grabComments() {
        fetch("http://localhost:3000/comments")
        .then(resp => resp.json())
        .then(json => {
            debugger
                Comment.appendAllToPage(json)
            }
        )
    }   

}