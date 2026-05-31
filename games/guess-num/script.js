let number = Math.floor(Math.random() * 10) + 1;

function check() {

    let guess = document.getElementById("guess").value;

    if (guess == number) {
        document.getElementById("result").innerText =
            "Correct!";
    }
    else {
        document.getElementById("result").innerText =
            "Wrong! Try Again";
    }
}