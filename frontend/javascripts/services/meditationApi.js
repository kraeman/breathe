class MeditationApi {
    static persistAudio(blob) {

        const data = new File([blob], "audiozzz")
        const formData = new FormData()
        formData.append("audiozzzzzzz", data)
        
    return fetch("http://localhost:3000/meditations", {
                    method: 'POST',
                    body: formData
                })
                .then(resp => resp.json())
                .then(json => {
                let med = new Meditation(json)
            
        })
        }

    static deleteMeditation(i) {
        
        
        return fetch(`http://localhost:3000/meditations/${i["id"]}`, {
                    method: 'DELETE'
                })
    }

    
    static async grabMeditations() {
                fetch("http://localhost:3000/meditations")
                .then(resp => resp.json())
                .then(json => {
                    
                        Meditation.appendAllToPage(json["med_hash"])
                }
            )
            
        }       

}