let score = 0;
let number = Math.floor(Math.random() * 10) + 1;

function check() {

    let guess = Number(document.getElementById("guess").value);

    if (guess == number) {
        score++;
        document.getElementById("result").innerText =
            "Σωστά! Το score σου είναι: " + score;
    }
    else {
        document.getElementById("result").innerText =
            "Λάθος! Ξαναπροσπάθησε";
    }
}