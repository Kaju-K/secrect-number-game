const elementoChute = document.getElementById("chute")
let acertou = false

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'

recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
    const chute = e.results[0][0].transcript.replace("- ", "-")
    exibeChuteNaTela(chute)
    validaChute(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Voce disse:</div>
        <span class="box">${chute}</span>
        `
}

recognition.addEventListener("end", recognition.start)
