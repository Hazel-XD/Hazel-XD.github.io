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
    //t.setHeight("800px");


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
    await commandEntered(command)

    }


}

async function commandEntered(userInput) {
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
        case "navigation":
        t.print("Navigation and NEL-13 Operations Guide for the HMS Aspire"),
        t.print("Navigation Operations");
        t.print("All navigation commands can be inputted from the Main Control Panel located within the Navigation Room."),
        t.print("Submarine navigation underwater requires skills and technologies not needed by surface ships. The challenges of underwater navigation have become more important as submarines spend more time underwater, travelling greater distances and at higher speed. Military submarines, such as HMS Aspire, travel underwater in an environment of total darkness with neither windows nor lights."), 
        t.print("The Aspire can use its active sonar systems to ping ahead for underwater hazards such as undersea mountains, drilling rigs or other submarines."),
        t.print("At depths below periscope depth the submarine can determine its position using:"),
        t.print("Dead reckoning course information obtained from the ship's gyrocompass, measured speed and estimates of local ocean currents, this could also be considered an estimated position as long as the ocean current is computed in."),
        t.print("Inertial navigation system is an estimated position source, utilizing acceleration, deceleration, and pitch and roll for computing."),
        t.print("Bottom contour navigation may be used in areas where detailed hydrographic data has been charted and there is adequate variation in sea floor topography. Fathometer depth measurements are compared to charted depth patterns."),
        t.print("Queries may be inputted at the Navigation Room Control Panel to extract this stream of navigation information. For example:"), 
        t.print("QUERY Current position NAVIGATION"),
        t.print("QUERY Are there any obstacles in our current trajectory? PILOT"),
        t.print("Commands may also be inputted to change the submarine course through changes to pitch angle controlled by diving planes, or to steer left or right controlled by the rudder. For example:)"),
        t.print("COMMAND Plot a course to Muirfield Seamount NAVIGATION ROOM NAVIGATION"),
        t.print("COMMAND Descend 500 metres NAVIGATION ROOM PILOT"),
        t.print("COMMAND Turn 180 degrees NAVIGATION ROOM HELMSMAN"),
        t.print("Radio Communication"),
        t.print("While surfaced, the HMS Aspire can of course engage in traditional radio communication, however an antenna attached to a buoy which is released as the vessel dives allows this audio communication to persist to a depth of 50 metres."),
        t.print("Up to a depth of 200 metres, the underwater buoy can be kept at a shallow enough depth to allow the reception of Very Low Frequency (VLF) transmissions. This form of communication relies on text, and cannot carry audio information."),
        t.print("Below 200 metres, there is no method of communication with the surface available, and the Aspire should surface in the case of an emergency requiring communication with surface vessels."),
        t.print("NEL-13 Operations Guide"),
        t.print("The HMS Aspire carries onboard a Nautical Evaluation Liason Device class 13 (NEL-13). This is a submersible drone which can be deployed to investigate the environment outside the submarine, take samples and carry out basic mechanical tasks such as external hull repairs."),
        t.print("NEL-13 can be deployed and controlled using the Navigation Room Control Panel in a similar way to piloting the submarine itself. For example:"),
        t.print("COMMAND Move NEL-13 towards underwater vent NAVIGATION ROOM ROBOTICS"),
        t.print("COMMAND Replace Aspire’s communications antenna using NEL-13 NAVIGATION ROOM PILOT"),
        t.print("QUERY What data can NEL-13 gather about the immediate surroundings? OCEANOGRAPHY"),
        t.print("QUERY What type of fish can NEL-13 see? MARINE BIOLOGY"),
        t.print("In general, when interaction with the environment outside the submarine is required, using NEL-13 is the safest and most efficient way to carry out almost all routine tasks.");
        break;
        case "quit":
            t.print("Quit. Please reload terminal to continue");
            running = false;
            break;
    }
};