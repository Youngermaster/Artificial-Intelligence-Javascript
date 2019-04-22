var mainForm = document.getElementById("main-form");
var textField = document.getElementById("text-field");
var askButton = document.getElementById("ask-button");
var chatArea = document.getElementById("chat-area");

const REPLY_DELAY = 800;

var AIName = "AI";
var userName = "You";

mainForm.addEventListener('submit', run, false);

function run(avoidPageRefresh) {

    avoidPageRefresh.preventDefault(); // This will avoid the refres of the AI page,
                                       // because we need to add the input words.
    var textFieldText = textField.value; // gets the value from the text field input.
    var textTrimmed = textFieldText.trim(); // Removes the leading and trailing white space and 
                                            // line terminator characters from a string.
    var textFinal = textTrimmed.toLowerCase(); // Lower case the entire word.

    /** 
     * These words will be corrected.
     */
    correct_words(textFinal);
    
    chatArea.innerHTML += userName + ": " + textFieldText + "<br>";
    
    let randomNumber = Math.random();

    textField.disabled = true;
    askButton.disabled = true;
    textField.style.color = "grey";
    textField.style.borderBottom = "1px solid grey";

    setTimeout (function() {
        if (textFinal.includes("how are you")) {
            if (randomNumber < 0.20)
                chatArea.innerHTML += AIName + ": " + "I'm doing well. What about you? <br><br>";
            else if (randomNumber < 0.40)
                chatArea.innerHTML += AIName + ": " + "Feeling energetic :) <br><br>";
            else if (randomNumber < 0.60)
                chatArea.innerHTML += AIName + ": " + "I'm good. And you?<br><br>";
            else if (randomNumber < 0.80)
                chatArea.innerHTML += AIName + ": " + "Very well, thank you for asking. <br><br>";
            else if (randomNumber > 0.80)
                chatArea.innerHTML += AIName + ": " + "I'm fine, thanks. <br><br>";
        }

        textField.disabled = false;
        askButton.disabled = false;
        textField.style.color = "white";
        textField.style.borderBottom = "1px solid white";    
        textField.focus();
    }, REPLY_DELAY);
}

function correct_words(word) {

    word = word.replace("mayi", "may i");
    word = word.replace("couldi", "could i");
    word = word.replace("cani", "can i");
    word = word.replace("aweosme", "awesome");
    word = word.replace("univese", "universe");
    word = word.replace("satuday", "saturday");    
}

