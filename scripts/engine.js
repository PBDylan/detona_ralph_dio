const state = {
    view: {
        square: document.querySelectorAll(".square"), // Correção: manter o nome como está
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        timerId: null,
        gameVelocity: 1000,
    },
};

function randomSquare() {
    state.view.square.forEach((square) => { // Correção: usar "square" corretamente
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.square[randomNumber]; // Correção: usar "square" corretamente
    randomSquare.classList.add("enemy");
}

function moveEnemy() {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitbox() {
    state.view.square.forEach((square) => {
    
    });
}

function init() {
    randomSquare();
}

init();
