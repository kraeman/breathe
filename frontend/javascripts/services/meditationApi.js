class MeditationApi {
    static persistAudio(blob) {
        return new Promise((resolve, reject) => {
            
                    const data = new File([blob], "audiozzz")
                    const formData = new FormData()
                    formData.append("audiozzzzzzz", data)
                    
                fetch("http://localhost:3000/meditations", {
                                method: 'POST',
                                body: formData
                            })
                            .then(resp => resp.json())
                            .then(json => {
                                // debugger

                            new Meditation(json)
                            
                            resolve(27)
                        
                    })
                })
        }

    static deleteMeditation(i) {
        
        
        return fetch(`http://localhost:3000/meditations/${i["id"]}`, {
                    method: 'DELETE'
                })
    }

    
    static grabMeditations() {
            return new Promise((resolve, reject) => {
                    resolve(fetch("http://localhost:3000/meditations")
                    .then(resp => resp.json())
                    .then(json => {
                        
                            Meditation.appendAllToPage(json["med_hash"])
                    }
                ))
            })
        }       

}