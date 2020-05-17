let files = ["crewroster", "navigation", "nel13", "missionobjective", "emailcorrespondence", "emergency", "treadwell", "geological", "topsecret"];
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


    t.print("Welcome to the HMS Aspire. ")
    t.print("Entries into this system are logged and monitored for auditing purposes");

    //In order to stop the program until the user responds, use await t.waitInput rather than t.input
    //If you dont use await, the program may crash :)
    let name = await t.waitInput("Please enter your full name. ");
    t.print(`Welcome to the ship ${name}. The HMS Aspire is a Trafalgar Class Submarine serial number 324854993.`);



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
            if (password === "843carter962") {
                t.print("To: d.meyer@royalnavymail.mod.uk"),
                t.print("From: samanthavarden@lampreytech.co.uk"),
                t.print("Cc:"),
                t.print("Subject: PITCH: Lamprey Technologies Seeking Contract Partner to Investigate Marine Phenomenon"),
                t.print("..."),
                t.print("Commodore Meyer,"),
                t.print("..."),
                t.print("Please find below the press release for an exciting opportunity to join Lamprey Technologies in a unique and exclusive contact. This is not yet public knowledge, and we wanted to offer the Royal Navy the chance to buy the rights to this cutting edge area of exploration before allowing news of its discovery to become widely available."),
                t.print("..."),
                t.print("FOR RELEASE 1/11/2011"),
                t.print("PRESS RELEASE"),
                t.print("..."),
                t.print("..."),
                t.print("Lamprey Technologies Seeking Contract Partner to Investigate Marine Phenomenon"),
                t.print("..."),
                t.print("Cutting edge undersea exploration and mining initiative Lamprey Technologies are offering an exclusive contract relating to hitherto unseen discovery recently made in the North Atlantic Ocean."),
                t.print("..."),
                t.print("Scientists within the company claim that samples extracted from the bedrock around a tectonic faultline have been found to contain veins of a metal never before seen by humanity."),
                t.print("..."),
                t.print("This metal appears to posess unique properties including incredible strength and properties which disrupt nearby sound and electromagnetic waves of particular frequencies."),
                t.print("..."),
                t.print("With research, such a metal has unimaginable potential in any number of industries."),
                t.print("..."),
                t.print("Lamprey Technologies are offering an exclusive contract with one partner company or organisation."),
                t.print(" ..."),
                t.print("“This is a unique opportunity to take ownership of a material no competitor can copy or gain for themselves,” says Grace Chaudry, CEO of Lamprey Technologies. “ We are excited to learn more about our new discovery alongside the contract holder, and to move forward together in a joint venture unlike any we have attempted before.”"),
                t.print("..."),
                t.print("The funds provided by the contract holder would allow the company to investigate, extract and perform testing on larger samples of the metal, leading towards large scale development and production of tools designed specifically for the contract holder."),
                t.print("..."),
                t.print("Bidding for this contract will be held at an event in Lamprey Technologies’ headquarters in Bournemouth, coinciding with the company’s fifth year of operation."),
                t.print(" ..."),
                t.print("Lamprey Technologies is a marine exploration and mining company, primarily focusing on mapping the Atlantic seafloor and using data acquired through intense scientific investigation to ethically and responsibly mine rare minerals and oil found under the ocean itself."),
                t.print(" ..."),
                t.print("Media Contact:"),
                t.print("Michel Lyszyk"),
                t.print("michellyszyk@lampreytech.co.uk"),
                t.print("+44 7386496306"),
                t.print("..."),
                t.print("..."),
                t.print("Please don’t hesitate to contact me with any concerns or queries."),
                t.print("..."),
                t.print("Kind regards,"),
                t.print("..."),
                t.print("Samantha Varden"),
                t.print("Outreach Manager at Lamprey Technologies"),
                t.print("(she/her)"),
                t.print("samanthavarden@lampreytech.co.uk"),
                t.print("+44 758385294"),
                t.print("To: samanthavarden@lampreytech.co.uk"),
                t.print("From: d.meyer@royalnavymail.mod.uk"),
                t.print("Cc:"),
                t.print("Subject: RE PITCH: Lamprey Technologies Seeking Contract Partner to Investigate Marine Phenomenon"),
                t.print("..."),
                t.print("Dear Ms Varden,"),
                t.print("..."),
                t.print("Having discussed the potential of the opportunity outlined in the press release with colleagues, we would like to arrange a telephone conference. Would you be available Tuesday at 10:00am?"),
                t.print("..."),
                t.print("Best wishes,"),
                t.print("..."),
                t.print("Commodore Daniel Meyer"),
                t.print("To: d.meyer@royalnavymail.mod.uk"),
                t.print("From: samanthavarden@lampreytech.co.uk"),
                t.print("Cc:"),
                t.print("Subject: RE PITCH: Lamprey Technologies Seeking Contract Partner to Investigate Marine Phenomenon"),
                t.print("..."),
                t.print("10am Tuesday works for me. My phone number is 0758385294"),
                t.print("..."),
                t.print("Kind regards,"),
                t.print("..."),
                t.print("Samantha Varden"),
                t.print("Outreach Manager at Lamprey Technologies"),
                t.print("(she/her)"),
                t.print("samanthavarden@lampreytech.co.uk"),
                t.print("+44 758385294"),
                t.print("To: samanthavarden@lampreytech.co.uk"),
                t.print(" From: d.meyer@royalnavymail.mod.uk"),
                t.print("Cc: h.oscar@royalnavymail.mod.uk"),
                t.print("Subject: RE PITCH: Lamprey Technologies Seeking Contract Partner to Investigate Marine Phenomenon"),
                t.print("..."),
                t.print("Dear Ms Varden,"),
                t.print("..."),
                t.print("Further to our conversation yesterday, the Royal Navy would like to formally accept the contract for exclusive use of Lamprey Technologies’ discovered metal for £4bn. As outlined in the meeting this would be subject to all employees aware of the military presence signing the official secrets act."),
                t.print("..."),
                t.print("Best wishes,"),
                t.print("..."),
                t.print("Commodore Daniel Meyer")}
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
        t.print("Below 200 metres, there is no method of communication with the surface available, and the Aspire should surface in the case of an emergency requiring communication with surface vessels.");
        break;
        case "lamprey":
        let password = await t.waitInput("What's the password");
        if (password === "brianson") {
            t.print("To: yasminpatel@deepestbv.co.uk"),
            t.print("From: samanthavarden@lampreytech.co.uk"),
            t.print("Cc:"),
            t.print("Subject: Evac Suit Preorder"),
            t.print("..."),
            t.print("Hi Yasmin,"),
            t.print("..."),
            t.print("Just wanted to chase up the submarine evacuation suit preorder we placed with your company in October. We haven’t had any correspondence since the new year and were led to believe that the suits would be ready for dispatch by the end of January. We have held off buying any replacements from other sources because of this, and need to know when to expect the suits to arrive so that our vessels can remain properly equipped. Should the delay continue we will be forced to source some from another company and cancel this order."),
            t.print("..."),
            t.print("Kind regards,"),
            t.print("..."),
            t.print("Samantha Varden"),
            t.print("Outreach Manager at Lamprey Technologies"),
            t.print("(she/her)"),
            t.print("samanthavarden@lampreytech.co.uk"),
            t.print("+44 758385294"),
            t.print("To: yasminpatel@deepestbv.co.uk"),
            t.print("From: samanthavarden@lampreytech.co.uk"),
            t.print("Cc:"),
            t.print("Subject: RE: Evac Suit Preorder"),
            t.print("..."),
            t.print("Hi Yasmin,"),
            t.print("..."),
            t.print("Please confirm that you are receiving these emails. We really need this info so we know how to proceed. We note that our accounts have been charged for the preorder but there has been no news on the product or its development."),
            t.print("..."),
            t.print("Regards,"),
            t.print("..."),
            t.print("Samantha Varden"),
            t.print("Outreach Manager at Lamprey Technologies"),
            t.print("(she/her)"),
            t.print("samanthavarden@lampreytech.co.uk"),
            t.print("+44 758385294"),
            t.print("To: yasminpatel@deepestbv.co.uk"),
            t.print("From: samanthavarden@lampreytech.co.uk"),
            t.print("Cc:"),
            t.print("Subject: RE: Evac Suit Preorder"),
            t.print("..."),
            t.print("Hi Yasmin,"),
            t.print("..."),
            t.print("My previous two emails and phone calls haven’t been answered. Please confirm that the production of the submarine evacuation suits is going ahead, and when we can expect delivery."),
            t.print("..."),
            t.print("Regards,"),
            t.print("..."),
            t.print("Samantha Varden"),
            t.print("Outreach Manager at Lamprey Technologies"),
            t.print("(she/her)"),
            t.print("samanthavarden@lampreytech.co.uk"),
            t.print("+44 758385294")}
        else
        {t.print(`${password} is wrong!`)};
        break;
        case "nel13":
        t.print("NEL-13 Operations Guide"),
        t.print("The HMS Aspire carries onboard a Nautical Evaluation Liason Device class 13 (NEL-13). This is a submersible drone which can be deployed to investigate the environment outside the submarine, take samples and carry out basic mechanical tasks such as external hull repairs."),
        t.print("NEL-13 can be deployed and controlled using the Navigation Room Control Panel in a similar way to piloting the submarine itself. For example:"),
        t.print("COMMAND Move NEL-13 towards underwater vent NAVIGATION ROOM ROBOTICS"),
        t.print("COMMAND Replace Aspire’s communications antenna using NEL-13 NAVIGATION ROOM PILOT"),
        t.print("QUERY What data can NEL-13 gather about the immediate surroundings? OCEANOGRAPHY"),
        t.print("QUERY What type of fish can NEL-13 see? MARINE BIOLOGY"),
        t.print("In general, when interaction with the environment outside the submarine is required, using NEL-13 is the safest and most efficient way to carry out almost all routine tasks.");
        break;
        case "crewroster":
        t.print("The following personnel have been checked into the HMS Aspire."),
        t.print("..."),
        t.print("Gregory Carter - Submarine Commander"), 
        t.print("David Lightman - Computer Analyst"),
        t.print("Sky Evans - Mechanical Engineer"),
        t.print("Alexa Fitton - Scientific Diver"),
        t.print("Liz  Hoydal - Deep Sea Forensic Specialist"),
        t.print("Sasha Harris - Scientific Specialist"),
        t.print("Cliff Weatherton - Rescue Diver"),
        t.print("James Daniels - Rescue Specialist"),
        t.print("Matthias Hoffman - Liason");
        break;
        case "engineering":
        t.print("engineeringthings");
        break;
        case"missionobjective":
        t.print("Seven days ago, a nearby ship received a distress signal from the HMS Scylla at 57°13'33.7'N 33°25'42.8'W. It is unclear as to their current state but estimates suggest that they only have sufficient oxygen canisters to last them another 12 hours."), 
        t.print("..."),
        t.print("You were contacted by Captain Alison Starkey of the Royal Navy. Due to your expertise,  it  is believed that you possess the proficiency to rescue crew and equipment that has become stranded at this location."),
        t.print("..."),
        t.print("Your goal is to rescue the crew of the HMS Scylla and transport them to safety. "),
        t.print("The crew you can find aboard are: John Simpkin, Catherine Aronson, Mohammed Amari, Christopher Harris and Divya Sampson");
        case "treadwell":
        t.print("New Partnership Seeks to Shake Up the World of Deep Sea Mining and Exploration"),
        t.print("Ellis T Coran"),
        t.print("..."),
        t.print("Lamprey Technologies and Treadwell today announced a partnership between their companies that is sure to reinvent the marine mining industry as we know it."),
        t.print("..."),
        t.print("For a number of years now, Lamprey have held a sturdy grip on their position as industry leaders, a position that has been threatened by a number of ambitious startup companies such as thow now infamous Deepest B.V."),
        t.print("..."),
        t.print("Treadwell, a corporation with links to an eclectic mix of investments in chemical and mechanical engineering, pharmacology and computer part production, now seem to be branching out even further to partner with Lamprey in their latest venture."),
        t.print("..."),
        t.print("Nobody is sure what to expect from these two heavyweights of privately funded research world, but it’s sure to be explosive - and both companies have seen share prices skyrocket since the announcement of their collaboration."),
        t.print("..."),
        t.print("More on this exciting story as details develop...");
        break;
        case "emergency":
        t.print("Emergency Guidelines: Trafalgar-Class Submarine"),
        t.print("..."),
        t.print("In case of an emergency while surfaced, radio communication with control or any viable alternative should be established and a distress message sent. If not surfaced, but within range of the buoy communication system, the buoy with the most appropriate antenna (either for surface radio or VLF communication) should be deployed."),
        t.print("..."),
        t.print("Whilst submersed, the priority should be to safely surface. In a situation where this cannot happen, do not take unnecessary risks. Either remain in place and focus on keeping crew together and safe for as long as possible whilst waiting for rescue, or exit the vessel using the Submarine Escape Immersion Equipment (SEIE)."),
        t.print("..."),
        t.print("All Trafalgar-Class Submarines are equipped with at least one set of SEIE, allowing one crew member to abort and radio for help once surfaced. Lamprey Technologies ensures, in addition to this, that where at all possible vessels travel with enough sets of SEIE for every member of crew."),
        t.print("..."),
        t.print("In the case of a power outage, the submarine contains oxygen reserves to last at least 20 hours for a standard crew. Emergency blankets found in crew quarters can be used to combat hypothermia resulting from a non-operational heating system. In case of issues with the water system, filtration tablets can be found in the crew mess."),
        t.print("..."),
        t.print("In a worst case scenario, the crew should gather together in one room and focus on only supplying that location with oxygen. Any fires should be extinguished as quickly as possible to save air, and any power supplies should be focused on pumping seawater away from this location.");
        break;
        case "topsecret":
        t.print("asldjf3oj2o;34jto4hi43htqit43qijth4;iq34uhq;akjshdfjawe;ht4qtuq4tuha;sdncqo4uhta;w4ohta;wo4thao;sdhgfa;4329438adouhfa;w4uht2948tya;suohfas");
        break;
        case "geological":
        t.print("Report on North Atlantic Ocean anomaly site: 57°13'33.7'N 33°25'42.8'W')"),
        t.print("..."),
        t.print("In recent months there has been increased seismic activity along this fault line, as well as a spike in sightings of deep sea flora and fauna."),
        t.print("..."),
        t.print("Analysis of sheer and seismic waves produced by the microearthquakes around the fault have revealed a solid mass of metallic substance beneath the tectonic plate. This mass, which lacks the familiar composition of a mantle plume, has never been observed before here or elsewhere, and seems to extend further than the observed waves could be mapped. We believe, therefore, that it indicates the presence of a vein of rare metal, exposed for the first time due to this increase in seismic activity."),
        t.print("..."),
        t.print("Following preliminary investigations of a small sample of the metal extracted by NEL-13, we have observed the following qualities:"),
        t.print("This metal is not one previously observed by geologists"),
        t.print("Phase at STP: viscous solid"),
        t.print("Crystal structure: face-centred cubic"),
        t.print("Highly magnetic"),
        t.print("Interferes with electromagnetic radiation, especially at low frequencies"),
        t.print("..."),
        t.print("As scientific investigation and mining have started operating in the area, the seismic activity seems to have further increased in both frequency and intensity. There is no logical reason why this would be the case beyond the expected levels of microearthquakes from methane released by drilling into the seafloor. However, the intensity of quakes being recorded is exponentially higher than what we would predict for the level of mining activity."),
        t.print("..."),
        t.print("We can supply no reason for this, and will investigate further. Until conclusion can be drawn, we recommend reducing the amount of mining activity in the area."),
        t.print("..."),
        t.print("Whilst this report raises some valid concerns, no imminent danger is flagged and so mining is cleared to continue at the current level, with increased production once new sites have been mapped and proper equipment installed -- Matthias Hoffman");
        break;
        case "quit":
            t.print("Quit. Please reload terminal to continue");
            running = false;
            break;
    }
};