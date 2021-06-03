class MeditationApi {
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
                .then(function(response) {
                    return response.json();
                  })
                  .then(function(json) {
                    let med = new Meditation(json)
                    med.render()
                  }); 
                }
}