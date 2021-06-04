class MeditationApi {
    static persistAudio(blob) {

        const data = new File([blob], "audio")
        const formData = new FormData()
        formData.append("audio", data)

    return fetch("http://localhost:3000/meditations", {
                    method: 'POST',
                    body: formData
                })
        //         .then(resp => resp.json())
        //         .then(json => {
        //         let med = new Meditation(json)
            
        // })
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