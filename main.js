function aplicar() {
    const data = JSON.stringify({
        "language": "pt",
        "strength": 3,
        "text": document.getElementById("textarea").value
    });

    const music = new Audio('Gravando (401).m4a');
    music.play();

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let text;
            let similarity;
            if (this.responseText === '{"rewrite":"","text":"","language":"pt"}') {
                text = "O DANILLO! VAMO LA AMANHA LEVA AS CANA PRAS VACA LA VIADO"
            }
            else {
                let obj = JSON.parse(this.responseText)
                text = obj.rewrite;
                similarity = obj.similarity;
                similarity = similarity.toFixed(2);
            }
            document.getElementById("textp").innerHTML = `<span>Similaridade: ${similarity}</span><br>${text}`;
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-host", "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "f6678a0369msh475d7d66e4a976fp1c67bajsnbe76b0171b93");

    xhr.send(data);
}