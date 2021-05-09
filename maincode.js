let files = [ "navigation", "nel13", "missionobjective", "emailcorrespondence", "emergency", "lamprey", "geological", "topsecret"];
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


    t.print("Welcome to the HMS Trinity. "),
    t.print("Entries into this system are logged and monitored for auditing purposes");

    //In order to stop the program until the user responds, use await t.waitInput rather than t.input
    //If you dont use await, the program may crash :)
    let name = await t.waitInput("Please enter your full name. ");
    t.print(`Welcome to the ship ${name}. The HMS Trinity is a Trafalgar Class Submarine serial number 324854993.`);



    t.print("Enter FILES to see a list of files or HELP for more information.");


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
        case "FILES":
            t.print("Here is a list of currently available files. To view each file, type its name as a command within this terminal");
            t.print(files);
            break; //Always have a break at the end otherwise it will check all the other values in the case statment as well
        case "emailcorrespondence":
            let password = await t.waitInput("What's the password");
            if (password === "843hawkins962") {
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
                t.print("Commodore Daniel Meyer"),
                t.print("... END EMAIL CORRESPONDENCE..."),
                t.print("Please use FILENAME emails for further information")}
            else
                {t.print(`${password} is wrong!`)};
            break;
        case "navigation":
        t.print("Navigation and NEL-13 Operations Guide for the HMS Trinity"),
        t.print("Navigation Operations");
        t.print("All navigation commands can be inputted from the Main Control Panel located within the Navigation Room."),
        t.print("Submarine navigation underwater requires skills and technologies not needed by surface ships. The challenges of underwater navigation have become more important as submarines spend more time underwater, travelling greater distances and at higher speed. Military submarines, such as HMS Trinity, travel underwater in an environment of total darkness with neither windows nor lights."), 
        t.print("The Trinity can use its active sonar systems to ping ahead for underwater hazards such as undersea mountains, drilling rigs or other submarines."),
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
        t.print("While surfaced, the HMS Trinity can of course engage in traditional radio communication, however an antenna attached to a buoy which is released as the vessel dives allows this audio communication to persist to a depth of 50 metres."),
        t.print("Up to a depth of 200 metres, the underwater buoy can be kept at a shallow enough depth to allow the reception of Very Low Frequency (VLF) transmissions. This form of communication relies on text, and cannot carry audio information."),
        t.print("Below 200 metres, there is no method of communication with the surface available, and the Trinity should surface in the case of an emergency requiring communication with surface vessels."),
        t.print("for further information on radio, use filenmae radio within this terminal");
        break;
        case "lamprey":
        let passwords = await t.waitInput("What's the password");
        if (passwords === "brianson") {
            t.print("To: yasminpatel@deepestbv.co.uk"),
            t.print("From: samanthavarden@lampreytech.co.uk"),
            t.print("Cc:"),
            t.print("Subject: Evac Suit Preorder"),
            
            t.print("Hi Yasmin,"),
            
            t.print("Just wanted to chase up the submarine evacuation suit preorder we placed with your company in October. We haven’t had any correspondence since the new year and were led to believe that the suits would be ready for dispatch by the end of January. We have held off buying any replacements from other sources because of this, and need to know when to expect the suits to arrive so that our vessels can remain properly equipped. Should the delay continue we will be forced to source some from another company and cancel this order."),
            
            t.print("Kind regards,"),
            
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
        {t.print(`${passwords} is wrong!`)};
        break;
        case "nel13":
        t.print("NEL-13 Operations Guide"),
        t.print("The HMS Trinity carries onboard a Nautical Evaluation Liason Device class 13 (NEL-13). This is a submersible drone which can be deployed to investigate the environment outside the submarine, take samples and carry out basic mechanical tasks such as external hull repairs."),
        t.print("NEL-13 can be deployed and controlled using the Navigation Room Control Panel in a similar way to piloting the submarine itself. For example:"),
        t.print("COMMAND Move NEL-13 towards underwater vent NAVIGATION ROOM ROBOTICS"),
        t.print("COMMAND Replace Trinity communications antenna using NEL-13 NAVIGATION ROOM PILOT"),
        t.print("QUERY What data can NEL-13 gather about the immediate surroundings? OCEANOGRAPHY"),
        t.print("QUERY What type of fish can NEL-13 see? MARINE BIOLOGY"),
        t.print("In general, when interaction with the environment outside the submarine is required, using NEL-13 is the safest and most efficient way to carry out almost all routine tasks.");
        break;
        case "crewroster":
        t.print("The following personnel were checked onto the HMS Aspire."),
        t.print("..."),
        t.print("Ashley Edwards - Marine Biologist"),
        t.print("Cynthia Price - Military Specialist"),
        t.print("Henry Voss - Engineering Lead"),
        t.print("Jason Kendrick - Geological Specialist"),
        t.print("Maya Bates - Radio Operator"),
        t.print("Morgan Bright - Drone Operator"),
        t.print("Parker Lawson - Dive Specialist"),
        t.print("Peter Ludlow - Corporate Liason"),
        t.print("Trisha Sanders - Navigation Specialist");
        break;
        case "radio":
        t.print("Radio Commands aboard the trinity should be made through communications within the workshop."),
        t.print("To communicate via text, please first signal who you are trying to communicate with with the key phrase Come In X"),
        t.print("To access old radio files, enter the crew designation of the crew member who logged the files as the frequency on the radio operations desk.");
        break;
        case "engineering":
        t.print("Engineering and Maintenance Guides Aboard the HMS Trinity"),
        t.print("..."),
        t.print("Engineering Operations"),
        t.print("All engineering commands can be inputted from the Main Control Panel located within the Engineering Room."),
        t.print("..."),
        t.print("Engineers are required on a submarine to ensure that all systems aboard the vessel are operating as normal. Maintenance Engineers are expected to make repairs to systems as they come up. "),
        t.print("..."),
        t.print("In order for a submarine to submerge hydrostatically, it must have negative buoyancy. To control their displacement and the depth at which the submarine submerges, it has ballast tanks which have a combination of air and water. More water in the ballast tanks, the deeper it is able to go. The Main Ballast Tanks (MBTs) are completely filled in order to submerge whereas the Depth Control Ballast Tanks (DCBTs) control how deep a submarine is within the water. "),
        t.print("..."),
        t.print("A titanium  sub such a s the HMS Trinity is designed to withhold pressures up to 1,500 psi. "),
        t.print("..."),
        t.print("In addition to standard operation, the HMS Trinity has the following instruments"),
        t.print("Nuclear Propulsion Systems"),
        t.print("A magnetic anomaly detector. "),
        t.print("Combination fo Active and Passive SONARs"),
        t.print("24 Oxygen Cannisters to support life systems. "),
        t.print("Emergency Rescue Equipment including first aid equipment, 5 spare oxygen canisters."),
        t.print("..."),
        t.print("Amongst others. "),
        t.print("..."),
        t.print("What happens in the engineering room of submarine"),
        t.print("..."),
        t.print("Within the Engineering Room of the submarine, there are instruments to both control different aspects of the submarine and display readouts about what is going on within the deeper ocean."),
        t.print("..."),
        t.print("Queries may be inputted at the Engineering Room Control Panel to extract this stream of navigation information. For example:"),
        t.print("..."),
        t.print("QUERY Pressure Level ENGINEERING"),
        t.print("..."),
        t.print("Commands may also be inputted to control and make repairs to the various submarine systems. "),
        t.print("..."),
        t.print("COMMAND Replace Oxygen Cannister");
        break;
        case"missionobjective":
        t.print("Operation Tolerance: Project 962. Recover Data and Personnell abroad the HMS Aspire. "), 
        t.print("..."),
        t.print("The HMS Aspire is believed to have run aground with 9 crew members at the following coordinates: 60.514631 -37.722393.");
        break;
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
        t.print("this file is encrypted. asldjf3oj2o;34jto4hi43htqit43qijth4;iq34uhq;akjshdfjawe;ht4qtuq4tuha;sdncqo4uhta;w4ohta;wo4thao;sdhgfa;4329438adouhfa;w4uht2948tya;suohfas"),
        t.print("Encryption keys can be found on your Royal Navy issued flash drive");
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
        case "anishamistry":
        let password2 = await t.waitInput("Welcome Anisha Mistry! What's your designation?");
        if (password2 === "94648") {
        t.print("Thank you for logging in. Please find attached your staff files"),
        t.print("Transcript of return to work interview 00392"),
        t.print("12/02/2012 - 10:15am"),
        t.print("..."),
        t.print("Interviwer - Morgan Grayson (MG)"),
        t.print("Interviewee - Anisha Mistry (AM)"),
        
        t.print(" MG: Hello Anisha, take a seat. Just before we get started, this interview is being recorded, is that okay?"),
        
        t.print("AM: Yes, that’s fine."),
        t.print("MG: Great, well I have to say it’s wonderful to have you back with us. Everyone is looking forward to having you back on the team - they’ve really missed you."),
        
        t.print("AM: Thanks."),
       
        t.print("MG: So, this is a return to work interview - as the email stated it’s really an informal chat, but it’s important for us to do this so that we can continue to monitor absences and take any issues seriously. Importantly, this is not part of any sort of disciplinary procedure, this is an opportunity for us to work out how we can support you. Does that make sense?"),
        
        t.print("AM: It does."),
        
        t.print("MG: Well then, let’s get started with how you’re feeling now. Have you seen your GP recently?"),
        
        t.print("AM: Mostly better, my doctor cleared me for returning to work on Thursday. My next few dives should be more gentle than usual, though, and I need to monitor for any recurrence of symptoms."),
      
        t.print("MG: That’s good to hear, Anisha. Do you mind running me through the incident in your own words? We don’t actually have your own report of it on record yet for obvious reasons."),
        
        t.print("AM: Sure. It was a pretty routine dive investigating the wildlife that had been interfering with some mining equipment at one of the shallow sites. Basically just getting eyes on the equipment to check for damage. To be fair, it was tougher than we expected - fish and weeds everywhere, it made visibility a real struggle, especially since it was just me and Chambers. He wanted to push on but the flora was really getting in our way, getting tangled round us. Not great. Chambers got his leg stuck and had to cut himself loose. I was holding the torch since his hands were pretty full, and this…. this..."),
        
        t.print("MG: It’s okay, Anisha. Take your time."),
        
        t.print("AM: I kid you not, this massive tentacle thing, all shiny, just appears from nowhere and it’s grabbing for me. Chambers gets free and obviously hasn’t seen it, but I can’t move the torch. Can’t move anything. Dropped my weights and pegged it. No way I was gonna let that thing catch me."),
        
        t.print("MG: Tentacle. A squid?"),
        
        t.print("AM: I know what a squid looks like. Sorry, didn’t mean to sound sarcastic… It was huge, you don’t understand, like… like a tree trunk coming for you. Even if it didn’t mean to, it could’ve knocked me out; sent me flying out into open ocean. Didn’t really fancy my chances there."),
        
        t.print("MG: So you left Chambers."),
        
        t.print("AM: Suppose I did…"),
        
        t.print("MG: He never mentioned a creature in his report."),
        
        t.print("AM: He didn’t have any light, he couldn’t see a fucking thing. Sorry."),
        
        t.print("MG: So, you surfaced."),
        
        t.print("AM: I did, and I knew I’d messed up. It was a few hours before symptoms started but we were all on alert for them. Got me to hospital within 50 minutes of the pain starting."),
        
        t.print("MG: And into a hyperbaric recompression chamber?"),
        
        t.print("AM: Exactly. They told me to take two months away from diving, I sent the letter across. Now my GP agrees I’m good to return."),
        
        t.print("MG: Okay, well… you’ve mentioned some things here we weren’t aware of. We can’t have you spooked by strange shapes, you know. There’s a lot of shadows in a dive that deep and-"),
       
        t.print("AM: I know what I saw."),
        
        t.print("MG: We’ll keep you to shallow dives until your manager agrees you’ve emotionally recovered. We’ll schedule some therapy, too… We’re nearly done, don’t worry. Is there any additional support you require following this incident?"),
        
        t.print("AM: Other than what we’ve already talked about? No."),
        
        t.print("MG: This has been your fourth case of absence in the last 12 months, do you agree with that record?"),
       
        t.print("AM: I believe so."),
       
        t.print("MG: And was this absence disability-related?"),
        
        t.print("AM: No."),
        
        t.print("MG: Okay, well you are beginning to rack up a significant number of absences for this period, I’m going to give you the relevant absence management literature and schedule another interview next month with a colleague--"),
        
        t.print("AM: I thought you said this wasn’t a disciplinary."),
       
        t.print("MG: Work with us, please, Anisha. We want to help you… I’m scheduling another meeting next month on the 5th with a panel of HR. Do you have any questions regarding any of this?"),
        
        t.print("AM: No."),
        
        t.print("MG: Great, well that should be everything for now. Thank you for coming along today. We’ll see you next month."),
        
        t.print("End transcription.")}
        else
        {t.print(`${password2} is wrong!`)};
        break;
        case "HELP":
        t.print("Thank you for using the Information Termainal. Enter your file name as a command to access it. If it requires a password, ensure it is written in lower case."),
        t.print("If you need to access personal information on crew members, enter their name as a command e.g. joebloggs and your crew designation as a password. Crew files take 24 hours to be updated.");
        break;
        case "emails":
        let password3 = await t.waitInput("Please enter the password");
        if (password3 === "843hawkins962") {
        t.print("To: matthiashoffman@lampreytech.co.uk"),
        t.print("From: d.meyer@royalnavymail.mod.uk"),
        t.print("Cc: f.bernard@royalnavymail.mod.uk"),
        t.print("Subject: Asset Meeting Followup"),
        t.print("..."),
        t.print("Dear Mr Hoffman,"),
        t.print("..."),
        t.print("Further to Monday’s meeting I can confirm which vessels the Royal Navy would be able to offer to the mining project."),
        t.print("..."),
        t.print("I must stress that both submarines are due to be decommissioned due to safety concerns. Theoretically, with due care and maintenance they could be brought up to industry standard, but the benefits simply would not be worth the time and economic investment. Of course, we could not recommend using the vessels without these repairs."),
        t.print("..."),
        t.print("We would be willing to offer the purchase of the HMS Scylla and HMS Aspire. Both vessels are Trafalgar-class submarines built in the British Isles in 1988. They are equipped with one NEL-13 deep sea drone each.  As well as the obvious crew spaces and submarine operation rooms, the vessels contain large areas normally used to store torpedos, which could also be converted to other storage spaces and so on."),
        t.print("..."),
        t.print("In addition, we can offer one Echo-class survey ship, the HMS Peregrine, to be used as a communications hub for the two submarines and an excellent patrol and survey ship in her own right. As with the submarines, she is due for decommission but in much better condition overall."),
        t.print("..."),
        t.print("If you could reply as promptly as possible with a deposit, we will refrain from selling these vessels on to other interested parties or sending them to be scrapped."),
        t.print("..."),
        t.print("Best wishes,"),
        t.print("..."),
        t.print("Commodore Daniel Meyer"),
        t.print("To: d.meyer@royalnavymail.mod.uk"),
        t.print("From: matthiashoffman@lampreytech.co.uk"),
        t.print("Cc: f.bernard@royalnavymail.mod.uk"),
        t.print("Subject: RE: Asset Meeting Followup"),
        t.print("..."),
        t.print("Hello Commodore Meyer,"),
        t.print("..."),
        t.print("This all looks great!"),
        t.print("..."),
        t.print("The finance department has drawn up a contract available on our intranet. I won’t mention the password directly in case it constitutes a security issue, but I’ve set it to the surname of the paleontology conspiracy theorist we chatted about at the new years’ party. If you have any issues accessing it, let me know."),
        t.print("..."),
        t.print("All the best,"),
        t.print("..."),
        t.print("Matthias Hoffman"),
        t.print(" Deputy Assistant Executive at Lamprey Technologies"),
        t.print("(He/Him)"),
        t.print("matthiashoffman@lampreytech.co.uk"),
        t.print("+44 7839563183")}
        else
        {t.print(`${password2} is wrong!`)};
        break;
        case "quit":
            t.print("Quit. Please reload terminal to continue");
            running = false;
            break;
    }
}; 