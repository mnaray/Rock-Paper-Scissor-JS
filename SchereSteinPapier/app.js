const Moves = new Map();
Moves.set(1, "Schere");
Moves.set(2, "Stein");
Moves.set(3, "Papier");

let userScore = 0;
let comScore = 0;

while (comScore < 3 && userScore < 3) {
    Round();
}

if (userScore > comScore) {
    console.log("DU HAST GEWONNEN!!!");
} else {
    console.log("DU HAST VERLOREN. :(");
}

// functions

function rndRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function comMove() {
    return rndRange(1, 4);
}

function userMove() {
    while (true) {
        try {
            let input = prompt(
                "Schere[1], Stein[2] oder Papier[3]?\nGeben Sie die Ziffer ein:",
                undefined
            );
            if (input === undefined || input > 3 || input < 1 || isNaN(input)) {
                throw "Keine oder invalide Antwort gegeben.";
            }
            // propt returns string!
            return parseInt(input);
        } catch (error) {
            console.log(error);
        }
    }
}

function evalMoves(com, user) {
    if (com > user) {
        if (com === 3 && user === 1) {
            userScore++;
            userWins(com, user);
        } else {
            comScore++;
            comWins(com, user);
        }
    } else {
        if (user === 3 && com === 1) {
            comScore++;
            comWins(com, user);
        } else {
            userScore++;
            userWins(com, user);
        }
    }
}

function userWins(com, user) {
    console.log("Du gewinnst die Runde.");
    console.log(Moves.get(user) + " schlägt " + Moves.get(com) + ".");
}

function comWins(com, user) {
    console.log("Du verlierst die Runde.");
    console.log(Moves.get(com) + " schlägt " + Moves.get(user) + ".");
}

function Round() {
    let com = comMove();
    console.log("com: " + Moves.get(com));
    let user = userMove();
    console.log("user: " + Moves.get(user));

    if (com == user) {
        console.log("Gleicher Move!\n Noch ein Mal.");
    } else {
        evalMoves(com, user);
    }
}
