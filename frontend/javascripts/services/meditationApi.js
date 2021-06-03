class MeditationApi {
    static persistAudio(blob) {
        // const data = {
        //     audio: blob
        // }


        const data = new FormData();
        data.append(
            "audio",
            blob
        );

    return fetch("http://localhost:3000/meditations", {
                    method: 'POST',
                    body: data
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


    return fetch("http://localhost:3000/meditations", {
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