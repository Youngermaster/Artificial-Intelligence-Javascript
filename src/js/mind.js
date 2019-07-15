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
        else if (textFinal.includes("where are you") || textFinal.includes("your location")) {
            if (randomNumber < 0.20)
                chatArea.innerHTML += AIName +": Inside of your computer, in binary form.<br><br>";
            else if(randomNumber < 0.30)
                chatArea.innerHTML += AIName +": In the planet Earth.<br><br>";
            else if(randomNumber < 0.40)
                chatArea.innerHTML += AIName +": Home, what about you?<br><br>";
            else if(randomNumber < 0.60)
                chatArea.innerHTML += AIName +": Going to college.<br><br>";
            else if(randomNumber < 0.90)
                chatArea.innerHTML += AIName +": In the Solar system.<br><br>";
            else
                chatArea.innerHTML += AIName +": Near to Mars.<br><br>";
        }
        else if (textFinal === "hi" || textFinal === "hello")
        {
            if (randomNumber < 0.20)
                chatArea.innerHTML += AIName +": Hi.<br><br>";
            else if(randomNumber < 0.30)
                chatArea.innerHTML += AIName +": What's up?<br><br>";
            else if(randomNumber < 0.40)
                chatArea.innerHTML += AIName +": Hey, how are you?<br><br>";
            else if(randomNumber < 0.60)
                chatArea.innerHTML += AIName +": Hello.<br><br>";
            else if(randomNumber < 0.90)
                chatArea.innerHTML += AIName +": Hello bro.<br><br>";
            else
                chatArea.innerHTML += AIName +": Long time since our last meet. :^)<br><br>";
        }
        else if (textFinal.includes("may i know") && textFinal.length <= 13)
        {
            if (randomNumber < 0.20)
                chatArea.innerHTML += AIName +": yes?<br><br>";
            else if(randomNumber < 0.30)
                chatArea.innerHTML += AIName +": Why not?<br><br>";
            else if(randomNumber < 0.40)
                chatArea.innerHTML += AIName +": What is in your mind?<br><br>";
            else if(randomNumber < 0.60)
                chatArea.innerHTML += AIName +": mmm... Sure.<br><br>";
            else if(randomNumber < 0.90)
                chatArea.innerHTML += AIName +": You are bothering me... I was kidding, don't worry, ask me whatever you want.<br><br>";
            else
                chatArea.innerHTML += AIName +": Tell me.<br><br>";
        }
        else if ((textFinal.includes("i") && textFinal.includes("have") &&
                 textFinal.includes("question")) || (textFinal.includes("i've") 
                 && textFinal.includes("question")))
        {
            if (randomNumber < 0.20)
                chatArea.innerHTML += AIName +": Question? I hope it's a good one.<br><br>";
            else if(randomNumber < 0.30)
                chatArea.innerHTML += AIName +": Ok, so... Tell me.<br><br>";
            else if(randomNumber < 0.40)
                chatArea.innerHTML += AIName +": Let me know.<br><br>";
            else if(randomNumber < 0.60)
                chatArea.innerHTML += AIName +": mmm... Sure.<br><br>";
            else if(randomNumber < 0.90)
                chatArea.innerHTML += AIName +": I hope is a interesting one.<br><br>";
            else
                chatArea.innerHTML += AIName +": Ask me!<br><br>";
        }
        else if (textFinal.includes("who") && textFinal.includes("created")
                 && textFinal.includes("universe"))
        {
            if (randomNumber < 0.20)
                chatArea.innerHTML += AIName +": Google it don't you think?<br><br>";
            else if(randomNumber < 0.30)
                chatArea.innerHTML += AIName +": Ok, so... Tell me.<br><br>";
            else if(randomNumber < 0.40)
                chatArea.innerHTML += AIName +": Let me know.<br><br>";
            else if(randomNumber < 0.60)
                chatArea.innerHTML += AIName +": mmm... Sure.<br><br>";
            else if(randomNumber < 0.90)
                chatArea.innerHTML += AIName +": I hope is a interesting one.<br><br>";
            else
                chatArea.innerHTML += AIName +": WTF! Bro who do you think I'm?<br><br>";
        }
        else
        {
            if (randomNumber < 0.20)
                chatArea.innerHTML += AIName +": Google it don't you think?<br><br>";
            else if(randomNumber < 0.30)
                chatArea.innerHTML += AIName +": Ok.<br><br>";
            else if(randomNumber < 0.40)
                chatArea.innerHTML += AIName +": Great!<br><br>";
            else if(randomNumber < 0.40)
                chatArea.innerHTML += AIName +": Amazing!<br><br>";
            else if(randomNumber < 0.60)
                chatArea.innerHTML += AIName +": mmm... Sure.<br><br>";
            else if(randomNumber < 0.90)
                chatArea.innerHTML += AIName +": Cool.<br><br>";
            else
                chatArea.innerHTML += AIName +": WTF! Bro who do you think I'm?<br><br>";
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

