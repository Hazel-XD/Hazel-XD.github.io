let files = ["Crew Roster", "Navigation Guide", "Engineering Guide", "Emergency Protocol", "emailcorrespondence", "A"];
let t; //Putting "t" out here makes it a global variable so its accessible everywhere

//Ignore this, I made it to make it easier for you to make inputs tha actually wait for the user to respond
Terminal.prototype.waitInput = async (message) => {
    return new Promise((resolve, reject) => {
        t.input(message, (response) => {
            resolve(response)
        })
    })
};



async function main() {
//t is the Terminal object, we could have called it "terminal" or something but given that its going to be types lots
//I figured we could just call it "t"
//The text is the terminal's unique ID, this should not matter for what you are intending to do
    t = new Terminal("MainTerminal");

//Now we can set up the size of the terminal, along with its colour and stuff
    t.setBackgroundColor("blue");
    t.setHeight("800px");


//We then insert the terminals html into the actual page
    document.body.appendChild(t.html);

//Now we can do things with the terminal object!
//Look here for more info: http://www.erikosterberg.com/terminaljs/


    t.print("Welcome to the HMS Aspire. ");

    //In order to stop the program until the user responds, use await t.waitInput rather than t.input
    //If you dont use await, the program may crash :)
    let name = await t.waitInput("Whats your name?");
    t.print(`Welcome ${name}.`);



    t.print("Please type ls to see a list of available files or press help for more information ");


//By putting things in an "endless" loop, we can ensure things eventually go back to the "command" line if something
//Else ends
    let running = true;
    while (running) {

    let command = await t.waitInput("Enter Command: ");
    commandEntered(command)

    }


}

function commandEntered(userInput) {
    //This is a "switch statement", they are basically just faster if-else chains
    switch (userInput) {
        case "ls":
            t.print("Here are all the files!");
            t.print(files);
            break; //Always have a break at the end otherwise it will check all the other values in the case statment as well
        case "emailcorrespondence":
            let password = await t.waitInput("What's the password");
            if (password === "blah") {
                t.print("texty text")}
            else
                {t.print(`${password} is wrong!`)};
            break;
        case "quit":
            t.print("Quit. Please reload terminal to continue");
            running = false;
            break;
    }
}