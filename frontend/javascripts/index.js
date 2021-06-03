document.addEventListener("DOMContentLoaded", () => {
    submitTextButton().addEventListener("click", onMeditationSubmitClick)
})

const onMeditationSubmitClick = (event) => {
    if(textBox().value) {
      
      MeditationApi.postMeditation()

  }
}
