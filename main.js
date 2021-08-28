function aplicar() {
    const data = JSON.stringify({
        "language": "pt",
        "strength": 3,
        "text": document.getElementById("textarea").value
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            document.getElementById("textp").innerHTML = this.responseText;
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-host", "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "f6678a0369msh475d7d66e4a976fp1c67bajsnbe76b0171b93");

    xhr.send(data);
}