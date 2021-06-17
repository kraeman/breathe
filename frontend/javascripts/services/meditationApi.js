class MeditationApi {
    static persistAudio(blob, title) {
        
            
                    const data = new File([blob], "meditation_file")
                    const formData = new FormData()
                    formData.append("audio", data)
                    formData.append("title", title)
                    
                fetch("http://localhost:3000/meditations", {
                                method: 'POST',
                                body: formData
                            })
                            .then(resp => resp.json())
                            .then(json => {
                                // debugger
                                if(json["error"]) {
                                    alert(json['error']["title"][0])
                                }else {
                                    let medita = new Meditation(json)
                                    // debugger
                                    medita.render()
                                }
                                
                        
                    })
               
        }

    static deleteMeditation(i) {
        
        
        return fetch(`http://localhost:3000/meditations/${i}`, {
                    method: 'DELETE'
                })
    }

    
    static grabMeditations() {
            // return new Promise((resolve, reject) => {
                    fetch("http://localhost:3000/meditations")
                    .then(resp => resp.json())
                    .then(json => {
                        // debugger
                            Meditation.appendAllToPage(json)
                    }
                )
            // })
        }       

}