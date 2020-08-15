let files = ["reports", "reports2", "contracts", "cantos", "vesper"];
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
    t.setBackgroundColor("green");
    //t.setHeight("800px");


//We then insert the terminals html into the actual page
    document.body.appendChild(t.html);

//Now we can do things with the terminal object!
//Look here for more info: http://www.erikosterberg.com/terminaljs/


    t.print("This is CPD Terminal 9482 "),
    t.print("Entries into this system are logged and monitored for security purposes");

    //In order to stop the program until the user responds, use await t.waitInput rather than t.input
    //If you dont use await, the program may crash :)
    let name = await t.waitInput("Please enter your full name. ");
    t.print(`Welcome to the system ${name}`);



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
            t.print("Here is a list of currently available files. To view each file, type its name as a command");
            t.print(files);
            break; //Always have a break at the end otherwise it will check all the other values in the case statment as well
        case "reports":
            let password = await t.waitInput("What's the password");
            if (password === "carnivorous9482") {
                t.print("Operation Dedicate:"),
                t.print("Primary objective: Gather intel on the current state of Tenement 99 and await future updates."),
                t.print("Additional objectives:),"),
                t.print("Continue to provide CPD with intelligence from within the tenement at all times."),
                t.print("Identify the size and demographic makeup of the squatter population within the tenement."),
                t.print("Carry out rudimentary inspection of the building’s current state, including photographic evidence where possible."),
                t.print("Prepare for the arrival of the detainees, and the subsequent demolition of the building."),
                t.print("..."),    
                    
                t.print("Case Title: Operation Dedicate"),
                t.print("Location: Tenement 99"),
                t.print("Time/Date: 27/06/2040 13:00:00"),
                t.print(" Reporting Officer: DC Morgan Bismuth (8295)"),
                t.print("Narrative:"),
                t.print("On the above date, I arrived at Tenement 99 in plain clothes. Upon arrival, I secured an empty cell in the outer ring to store potentially compromising equipment such as the issued computer terminal, radio receiver and firearm. On entering the inner ring, I was able to converse with locals with the agreed story and was provided with a cell in the inner ring from which to operate."),
                t.print("The tenement is comprised of three main areas:"),
                t.print("The outer circle: originally the medium security wing of the prison, now sparsely populated by squatters who seem mainly to be visitors to the tenement."),
                t.print("The inner circle: originally the maximum security wing of the prison, now converted into improvised housing for the tenement’s residents and a wide variety of businesses including bars, brothels, dreamweaver dens, aug shops."),
                t.print("The centre: a huge dancefloor with the observation tower converted into a DJ booth."),
                t.print("Preliminary investigations reveal the structural integrity of the building to be poor, and exposed materials almost certainly constituting significant health hazard to the residents."),
                    
                t.print("..."),  
                t.print("Case Title: Operation Dedicate"),
                t.print("Location: Tenement 99"),
                t.print("Time/Date: 04/07/2040 22:35:00"),
                t.print("Reporting Officer: DC Morgan Bismuth (8295)"),
                t.print("Narrative:"),
                t.print("Conversations with residents reveal potential difficulties in evicting them from the property. They regard tenement 99 as some form of entertainment hub and rely on illegal tourism to fund their lifestyles without official employment."),
                t.print("This results in an ungrateful, arrogant attitude and pride in the tenement identity. Residents are unlikely to voluntarily move to other accommodation. However, as evidenced above, illegal activity is rife, and therefore a large TRU operation could potentially clear the property with more ease than a political campaign or offer of official housing/employment.")
                    }
            else
                {t.print(`${password} is wrong! Please use designated CPD password`)};
            break;
        case "reports2":
        let passwords = await t.waitInput("What's the password");
        if (passwords === "carnivorous9482") {
            t.print("To: m.d.bismuth@citypolicedepartment.gov.uk"),
            t.print("From: i.f.Franklin@citypolicedepartment.gov.uk"),
            t.print("Subject: Operation Dedicate Brief Update [URGENT] [CONFIDENTIAL]"),
            
            t.print(" DC Bismuth,"),
            t.print("Please be advised that a Deploy driver will deliver six linked explosive charges to the tenement tomorrow afternoon. They will be in boxes marked as “Big Beats Big Beat Bar Beer n Beverages”. Install these charges in the agreed locations, making sure they are likely to remain hidden until detonation."),
            t.print("..."),
            t.print("Tonight, as many TRU cells as can be spared will be deployed T99. They have been briefed on your identity, but you are advised to take cover in case of violence from the residents. You will be radioed once the TRU commanding officer issues the all clear, and will be expected to remain in the tenement and to continue providing updates until further notice."),
            t.print("If any individual without police or corp clearance is found within the tenement after the TRU operation, you are ordered to terminate them immediately, reporting any incidents at your earliest convenience."),
            t.print("The detainees are scheduled to arrive from 15/08/2040 16:00. The tenement is scheduled for demolition at 15/08/2040 21:30."),
            t.print("Your service is appreciated. You will be recognised for your efforts and achievements in this operation."),
            t.print("..."),
            t.print(" DCI Imelda Franklin"),
            t.print("..."),
            t.print("Case Title: Operation Dedicate"),
            t.print("Location: Tenement 99"),
            t.print("Time/Date: 06/08/2040 16:53:00"),
            t.print("Reporting Officer: DC Morgan Bismuth (8295)"),
            t.print("Narrative:"),
            t.print("Daily check of placed charges reveals no sign of tampering or removal."),
            t.print("Two individuals were observed entering the tenement through the outer circle. Neither were able to provide corporate or police clearance, and so both were exterminated. Closer inspection revealed them to be middle-aged men carrying no identification and small amounts of likely illegal New Pound.")
        }
            else
        {t.print(`${passwords} is wrong! Use standard CPD password.`)};
        break;
  
        case "vesper":
        let password2 = await t.waitInput("You will require the Willow Corp corporate designation . What is the password?");
        if (password2 === "94648") {
        t.print("To: garnett.willow@willowfoundation.co.t1"),
        t.print("From: nostra.cantos@cantosconglomerate.co.t1"),
        t.print("Subject: Vesper situation CONFIDENTIAL"),
        
        t.print("Mx Willow,"),
        
        t.print("I write to you on behalf of the Cantos board regarding the Willow medical research currently being undertaken in the tenements."),
        
        t.print("Whilst aware that this is, of course, important work, it has come to our attention that the study has crossed a clear ethical boundary. Our mutual colleague, Venn Cantos, has been recently conducting his own business within T74 - one of the tenements where Vesper has also been conducting her research."),
        
        t.print("Circumstances have arisen which have consequented in Mr Cantos suffering an addiction to an unknown substance repeatedly dealt to him - quite probably involuntarily, of course - by gangers who had business with Vesper. As Vesper is no longer present in T74, this drug has become unobtainable and Venn is suffering extremely severe withdrawal effects. I do not want to stay into private information, but this has had consequences for his personal and professional life, as well as those close to him."),
        
        t.print("Frankly, we find ourselves in a difficult situation. Whilst the work of Vesper is admirable and essential, it has obviously gone too far. The board expect swift and decisive action."),
        
        t.print(" Regards,"),
        
        t.print(" Nostra Cantos"),
        t.print("..."),
        t.print("To: nostra.cantos@cantosconglomerate.co.t1"),
        t.print("From: garnett.willow@willowfoundation.co.t1"),
        t.print("Subject: RE: Vesper situation CONFIDENTIAL"),

        t.print("Mx Cantos,"),

        t.print("Thank you for your concern. Rest assured that the wellbeing of Mr Cantos is a primary concern of the foundation, and we respect the wishes of your board in regards to this."),

        t.print("Vesper will be dealt with swiftly and silently. Apologies, once again."),

        t.print("Kind regards,"),

        t.print("Garnett Willow")

        }
        else
        {t.print(`${password2} is wrong!`)};
        break;
        case "HELP":
        t.print("Thank you for using the Information Termainal. Enter your file name as a command to access it. If it requires a password, ensure it is written in lower case."),
        t.print("If you need to access personal information, enter your name as a command e.g. joebloggs and your badge number as a password");
        break;

        case "contracts":
        let password3 = await t.waitInput("Please enter the password");
        if (password3 === "843masters962") {
            t.print(` Employment Agreement`),
            t.print(`THIS AGREEMENT made as of the seventeenth day of july, 40, between Cantos Conglomerate, a corporation incorporated under the laws of the United Kingdom of Great Britain and Nothern Ireland (the contract holder), and Zee Munitions, a corporation incorporated under the laws of the United Kingdom of Great Britain and Northern Ireland (the contractor).`),
            
            t.print(`WHEREAS the contract holder desires to obtain the benefit of the services of the contractor, and the contractor desires to render such services on the terms and conditions set forth.`),
            t.print(`IN CONSIDERATION of the promises and other good and valuable consideration (the sufficiency and receipt of which are hereby acknowledged) the parties agree as follows:`),
            
            t.print(`Employment`),
            t.print(`The contractor agrees that they will at all times faithfully, industriously and to the best of their skill, ability, experience and talents, perform all of the duties required of this contract. In carrying out these duties and responsibilities the contractor shall comply with all of the contract holder’s policies, procedures, rules and regulations, both written and oral, as are announced by the contract holder from time to time. It is also understood and agreed to by the contractor that their assignment, duties and responsibilities and reporting arrangements may be changed by the contractor in their sole discretion without causing the termination of this agreement.`),
            
            t.print(`...`),
            t.print(`The contractor agrees that they will demolish Tenement 99 completely in the state at which they find it as of the fifteenth August 2040.`),
            
            t.print(`Compensation`),
            t.print(`As full compensation for all services provided the contractor shall be three spaces on the Cantos Conglomerate network for future consciousness uploads of individuals of their choice.`),
            
            t.print(`Signed:`),
            
        t.print(`H. L. F. T. Cantos				LYSANDER ZARACHARY`),
            t.print(` Haruspex Cantos				Lysander Zachary`)
        }
        else
        {t.print(`${password2} is wrong!`)};

case "contracts":
    let password4 = await t.waitInput("Please enter the password");
    if (password4 === "843masters962") {
        t.print("Experiment 428-C"),
        t.print("..."),
        t.print("Hypothesis: The digital consciousness of an individual can be downloaded and stored on an implant for future upload to a network."),
        t.print("..."),
        t.print("Method: Gather a sample of 10 participants from the Cantos payroll with pre-installed implants, mostly work-related and installed throug the Implants for Work scheme. Download consciousnesses onto each implant. 24 hours later re-upload the consciousness to the Cantos network. Consciousnesses are randomly selected from the 100 least productive non-Cantos family members on the network."),
        t.print("..."),
        t.print("Results: All 10 participants had consciousnesses successfully downloaded and stored on a range of implants. Unfortunately, it appears that these consciousnesses were corrupted in the process, and began to affect both the implants and participants themselves. Participants reported strange sensations, cognitions and false memories. It was decided that re-uploading the corrupted consciousnesses to the Cantos network posed a significant risk of spreading the corruption to other consciousnesses, as such the consciousnesses were left on the implants. Attempts to remove the implants from the participants led to cardiac arrest or sudden unexplained brain death in the first four participants - after which it was deemed an inhumane course of action. The remaining 6 participants were discharged from the experiment after signing non-disclosure agreements, and having their contracts with Cantos terminated."),
        t.print("..."),
        t.print("Conclusions: The storage of digital consciousnesses on implants is highly dangerous and should not be attempted unless there are no other options. It results in the destruction of both the digital and host consciousnesses, with unknown long term consequences."),
        t.print("..."),
        t.print("Please mark this document as confidential and file it somewhere subtle. The whole debacle is an embarrassment to the conglomerate and cannot be released to other corporations who rely on our network to keep them and their loved ones safe - Tamira O’Corran")
        

    }
    else
    {t.print(`${password4} is wrong!`)};




        break;
        case "quit":
            t.print("Quit. Please reload terminal to continue");
            running = false;
            break;
    }
};