const handOptions = {
    "Rock": "Rock.jpeg",
    "Paper": "Paper.jpeg",
    "Scissor": "Scissor.jpeg"
}

const pickUserHand = (hand) => {
    console.log(hand);
    let Secondbox = document.querySelector(".Secondbox");
    Secondbox.style.display = "none";

    let Contest = document.querySelector(".Contest");
    Contest.style.display = "flex";
    document.getElementById("userPickImage").src = handOptions[hand];
    let cpOption = pickComputerHand();
    refree(hand, cpOption);

}

let Score = 0;

const pickComputerHand = () => {
    let Secondbox = ["Rock", "Paper", "Scissor"]
    let cpOption = Secondbox[Math.floor(Math.random() * 3)];
    console.log(cpOption);
    document.getElementById("computerPickImage").src = handOptions[cpOption];
    return cpOption
}

const refree = (userHand, cpOption) => {
    if (userHand == "Paper" && cpOption == "Scissor") {
        setDecision("You Lose !")
    }
    else if (userHand == "Paper" && cpOption == "Rock") {
        setDecision("You Win !")
        setScore(Score + 1)

    }
    else if (userHand == "Paper" && cpOption == "Paper") {
        setDecision("It's a tie !")


    }
    else if (userHand == "Rock" && cpOption == "Paper") {

        setDecision("You Lose !")

    }

    else if (userHand == "Rock" && cpOption == "Scissor") {
        setDecision("You Win !")
        setScore(Score + 1)

    }
    else if (userHand == "Rock" && cpOption == "Rock") {
        setDecision("It's a tie !")

    }
    else if (userHand == "Scissor" && cpOption == "Rock") {
        setDecision("You Lose !")

    }
    else if (userHand == "Scissor" && cpOption == "Paper") {
        setDecision("You Win !")
        setScore(Score + 1)
    }

    else if (userHand == "Scissor" && cpOption == "Scissor") {
        setDecision("It's a tie !")


    }
}

const restartGame = () => {
    let Secondbox = document.querySelector(".Secondbox");
    Secondbox.style.display = "flex";

    let Contest = document.querySelector(".Contest");
    Contest.style.display = "none";

}

const setDecision = (decision) => {
    // console.log(decision)
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    // console.log(score)
    Score = score;
    document.querySelector(".score h1").innerText = score;
}