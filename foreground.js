
// console.log(githubCalenderScript_SRC_URL);

// import { GitHubCalendar } from githubCalenderScript_SRC_URL;
// taking the input username from the user

function setEnvironment(){

    return new Promise((resolve, reject) => {
     
        function getUserInput()
        {
            console.log("getUserInput called....");
            return new Promise((resolve, reject) => {
                let promptInput = prompt('Your GitHub Username') || 'garganshul108';
                console.log("promtInput called....");
                resolve(promptInput);
            });
        }


        let username = null;
        getUserInput()
            .then((name) => { 
                console.log("username setting....");
                username = name; 
                console.log("username: ", username);
            })
            .catch((err) => console.log(err));

        if(username === null)
        {
            console.log("username is null : ", username);
        }


        console.log("setting options....");
        const optionsInput = {
            global_stats: false,
            responsive : true
        };
        console.log("options: ", optionsInput);

        console.log("setting calenderDiv....");
        let calenderDiv = document.createElement("div");
        
        resolve(calenderDiv, username, optionsInput);
    });
    
}

const target = "pv-deferred-area";

console.log("setting target div....");
let container = document.getElementsByClassName(target)[3];
console.log("target container ", container);


setEnvironment()
    .then((calenderDiv, username, optionsInput) => { 
        
        console.log("GitHubCalender called....");
        GitHubCalendar(calenderDiv, username, optionsInput);

        console.log("calenderDiv", calenderDiv);
        console.log("appending the calenderdiv....");
        container.appendChild(calenderDiv);

    })
    .catch((err) => console.log(err));

