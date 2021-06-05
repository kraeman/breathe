class MeditationApi {
    static persistAudio(blob) {

        const data = new File([blob], "audiozzz")
        const formData = new FormData()
        formData.append("audiozzzzzzz", data)
        
    return fetch("http://localhost:3000/meditations", {
                    method: 'POST',
                    body: formData
                })
        //         .then(resp => resp.json())
        //         .then(json => {
        //         let med = new Meditation(json)
            
        // })
        }

    static deleteMeditation(i) {
        debugger
        linkus = i.querySelector("audio").getAttribute('src')
        
        // fetch()
    }

    
    static grabMeditations() {
                fetch("http://localhost:3000/meditations")
                .then(resp => resp.json())
                .then(json => {
                    debugger
                        Meditation.appendAllToPage(json["audio_array"])
                }
            )
        }       




    static postMeditation() {
        const data = {
            text: textBox().value
        }


    fetch("http://localhost:3000/meditations", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                      },
                    body: JSON.stringify(data)
                })
                .then(resp => resp.json())
                .then(json => {
                let med = new Meditation(json)
                med.render()
        })
                }
}