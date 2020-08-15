let files = ["gitstashpop", "ghostinthemachine"];
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


    t.print("This is the East Wing Terminal "),
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
        case "gitstashpop":
            let password = await t.waitInput("What's the password");
            if (password === "brunswick") {
                t.print("To: pitgashstop@t101mail.tmt"),
                t.print("From: canyoutostopit@t101mail.tmt"),
                t.print("Subject: Employment Offer"),
                
                t.print("Dear Ms pop,"),
                t.print("I write to you on behalf of the Cantos Conglomerate to hire your DJ and MC services for a rather unusual party."),
                
                t.print("We at Cantos are aware of certain difficulties which have recently hampered your career and artistic expression. Of course, it pains us to see such talent wasted under circumstances caused by naught but bad luck, and so we wish to offer you the chance to upload your consciousness to our network, to be downloaded into a brand new body, free of the physical difficulties which you have been forced to contend with as of late."),
                
                t.print("In return, we simply ask that you create a stunning party - as you so often do - that will enrapture a collection of guests such that they do not attempt to leave the venue, and to maintain a positive atmosphere in the face of any and all circumstances."),
                
                t.print("If this offer interests you, I am currently staying within T101. Speak to the Syndicate lieutenant known as Lester, and they will know where to find me. I would be delighted to talk further about this opportunity and the benefits to both yourself and my corporation."),
                
                t.print("Yours faithfully,"),
                
                t.print("Tamira O’Corran"),
                t.print("Asset Maintenance Specialist at Cantos Conglomerate")
                
                    }
            else
                {t.print(`${password} is wrong! Password reminder - name of git stash pop's first pet.`)};
            break;
        case "ghostinthemachine":
        let passwords = await t.waitInput("What's the password");
        if (passwords === "carnivorous9482") {
            t.print("00:11:57//2040/03/04//DrGray//T101Net"),
            t.print("P2345at2454ient N responded w354345ell to initi5433al t345es54ts on the via534bility of upload. Seems unsuspecting of t354345he pur345pose52 of t5435est54ing25344."),
            t.print("..."),
            t.print("08:00:11//2040/03/02//DrGray//T101Net"),
            t.print("F53ollo5345wing posi345tive test results, the decision was taken to continue with the upload. A copy of Patient N’s conscio43534usness was, see546564mingly succes4562sfully, uplo256456aded to a fl456456ash 465dri6ve. Pat4564ient app7345ears una345ware."),
            t.print("..."),
            t.print("21:36:02//2040/03/30//DrGray//T101Net"),
            t.print("Patient N’s d5345eath at the ha5345nds of the Syndicate was unfortunate, but it now appears that the cons5345ciou534sness extr756act456ed ear856lier this month is therefore her leg435345acy. I intend to find a rel377ativ543673ely q435345uiet network to uploa3454353d it to, and allow it to li345v543e f5345re534e of the kn354owle347435dge of its true cre435345ation or nature. Th435is seems the mo345s34t hu345ma63ne op354ti435on.")
            
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
        if (password3 === "jeopardy") {
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

case "science":
    let password4 = await t.waitInput("Please enter the password");
    if (password4 === "endoftheworld") {
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