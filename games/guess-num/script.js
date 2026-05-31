let score=0;
let number = Math.floor(Math.random() * 10) + 0;

function check() {

    let guess = document.getElementById("guess").value;

    if (guess == number) {
        document.getElementById("result").innerText =
            "Swsta to scro einai "+score;
    }
    else {
        document.getElementById("result").innerText =
            "Wrong! Try Again";
    }
}