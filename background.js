
chrome.webNavigation.onDOMContentLoaded.addListener((tab) => {

    console.log(tab);
    const githubCalenderScript = document.createElement("script");
    const githubCalenderScript_SRC_URL = chrome.extension.getURL("./github-calendar.min.js");
    githubCalenderScript.src = githubCalenderScript_SRC_URL;


    const headElement = document.getElementsByTagName("head")[0];
    headElement.appendChild(githubCalenderScript);

});



// console.log(headElement.githubCalenderScript);