let score = 0;
let number = Math.floor(Math.random() * 10) + 1;

function check() {
    let guess = Number(document.getElementById("guess").value);

    if (guess == number) {
        score++;
        document.getElementById("result").innerText =
            "swsta ,to score soy einai: " + score;

        number = Math.floor(Math.random() * 10) + 1; // νέο νούμερο
    } else {
        document.getElementById("result").innerText =
            "lathos, dokimase xana";
    }
}