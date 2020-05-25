// JavaScript source code
//let inpNIK = document.getElementById("inpNIK").nodeValue;
//let inpPhoneC = document.getElementById("inpPhoneC").nodeValue;
//let inpPhone = document.getElementById("inpPhone").nodeValue;

const countryCode = ["1", "1242", "1246", "1264", "1268", "1284",
    "1340", "1345", "1441", "1473", "1649", "1664", "1670", "1671",
    "1684", "1721", "1758", "1767", "1784", "1787", "1809", "1829", "1849",
    "1868", "1869", "1876", "1939", "20", "211", "212", "213", "216", "218",
    "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230",
    "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241",
    "242", "243", "244", "245", "246", "248", "249", "250", "251", "252", "253",
    "254", "255", "256", "257", "258", "260", "261", "262", "263", "264", "265",
    "266", "267", "268", "269", "27", "290", "291", "297", "298", "299", "30", "31",
    "32", "33", "34", "350", "351", "352", "353", "354", "355", "356", "357", "358",
    "359", "36", "370", "371", "372", "373", "374", "375", "376", "377", "378", "379",
    "380", "381", "382", "383", "385", "386", "387", "389", "39", "40", "41", "420",
    "421", "423", "43", "44", "441481", "441534", "441624", "45", "46", "47", "48",
    "49", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "51",
    "52", "53", "54", "55", "56", "57", "58", "590", "591", "592", "593", "595", "597",
    "598", "599", "60", "61", "62", "63", "64", "65", "66", "670", "672", "673", "674",
    "675", "676", "677", "678", "679", "680", "681", "682", "683", "685", "686", "687",
    "688", "689", "690", "691", "692", "7", "81", "82", "84", "850", "852", "853", "855",
    "856", "86", "880", "886", "90", "91", "92", "93", "94", "95", "960", "961", "962",
    "963", "964", "965", "966", "967", "968", "970", "971", "972", "973", "974", "975",
    "976", "977", "98", "992", "993", "994", "995", "996", "998"];

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function Job(iName, iReward, iMaker, iDesc, iImage) {
    let today = new Date();
    this.name = iName;
    this.reward = iReward;
    this.maker = iMaker;
    this.desc = iDesc;
    this.image = iImage; 
    this.date = String(today.getDate()).padStart(2, '0') + "/" + String(today.getMonth() + 1).padStart(2, '0') + "/" + today.getFullYear();
    this.taken = function (iTaker, iSelfNode) {
        this.taker = iTaker
        iSelfNode.remove();
    }
}

const numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var password = ""

function validate(iNIK, iPhoneC, iPhone, iType, iJoinPeriod, iProfession, iSkill, iAddress, iDate, iFullname, iUsername, iP, iP2, iPGen) {
    //console.log(typeof iPGen);
    if (iPhoneC in countryCode && iNIK != "" && iAddress != "") {

        if (iPGen == "on" || iPGen == true || iPGen == "true") {
            let passLen = Math.floor(Math.random() * 10) + 1;
            for (i = 0; i < passLen; i++) {
                if (Math.floor(Math.random() * 2) == 0) {
                    password = password + String(Math.floor(Math.random() * 24));
                }
                else {
                    password = password + alphabet[String(Math.floor(Math.random() * 24))];
                }
                
            }
            //pass
            console.log("generated password")
            regSession(iNIK, iPhoneC, iPhone, iType, iJoinPeriod, iProfession, iSkill, iAddress, iDate, iFullname, iUsername, iP, iP2, iPGen);
            location.replace("main-page.html");
        }
        else if (iP != "" && iP2 == iP) {
            let letterCheck = false;
            let numCheck = false;
            for (i = 0; i < iP.length; i++) {
                if (iP[i] in numList) {
                    numCheck = true;
                }
                else if (alphabet.includes(iP[i])) {
                    letterCheck = true;
                }
            }
            console.log(numCheck);
            console.log(letterCheck);
            if (letterCheck && numCheck) {
                password = iP;
                console.log("ungenerated password")
                //pass
                regSession(iNIK, iPhoneC, iPhone, iType, iJoinPeriod, iProfession, iSkill, iAddress, iDate, iFullname, iUsername, iP, iP2, iPGen);
                location.replace("main-page.html");
                
            }
            else { alert("bad password1"); }
        }
        else { alert("bad password2"); }
    }
    else {
        alert("incomplete form");
    }
}

function regSession(iNIK, iPhoneC, iPhone, iType, iJoinPeriod, iProfession, iSkill, iAddress, iDate, iFullname, iUsername, iP, iP2, iPGen) {
    let skillset = "";
    for (i = 0; i < iSkill.length; i++) {
        skillset = skillset + iSkill[i]["tag"]; //last element has ,
        if (i < iSkill.length-1) {
            skillset = skillset + ", ";
        }
        //console.log(skillset);
    }
    sessionStorage.setItem("NIK", String(iNIK));
    console.log(typeof sessionStorage.getItem("NIK"));
    sessionStorage.setItem("PhoneC", String(iPhoneC));
    console.log(typeof sessionStorage.getItem("PhoneC"));
    sessionStorage.setItem("Phone", String(iPhone));
    console.log(typeof sessionStorage.getItem("Phone"));
    sessionStorage.setItem("Type", String(iType));
    console.log(typeof sessionStorage.getItem("Type"));
    sessionStorage.setItem("Period", String(iJoinPeriod));
    console.log(typeof sessionStorage.getItem("Period"));
    sessionStorage.setItem("Profession", String(iProfession));
    console.log(typeof sessionStorage.getItem("Profession"));
    sessionStorage.setItem("Skill", String(skillset));
    console.log(typeof sessionStorage.getItem("Skill"));
    sessionStorage.setItem("Address", String(iAddress));
    console.log(typeof sessionStorage.getItem("Address"));
    sessionStorage.setItem("Birthdate", String(iDate));
    console.log(typeof sessionStorage.getItem("Birthdate"));
    sessionStorage.setItem("Fullname", String(iFullname));
    console.log(typeof sessionStorage.getItem("Fullname"));
    sessionStorage.setItem("Username", String(iUsername));
    console.log(typeof sessionStorage.getItem("Username"));
    sessionStorage.setItem("Password", String(password));
    console.log(typeof sessionStorage.getItem("Password"));
    sessionStorage.setItem("Desc", "Set a description");
    console.log(typeof sessionStorage.getItem("Desc"));
}

function userPageSetup(usernameNode, professionNode, typeNode, descNode) {
    usernameNode.innerHTML = /*findCookieValue("Username");*/ sessionStorage.getItem("Username");
    professionNode.innerHTML = /*findCookieValue("Profession");*/ sessionStorage.getItem("Profession");
    console.log(sessionStorage.getItem("Profession"));
    typeNode.innerHTML = /*findCookieValue("Type");*/ sessionStorage.getItem("Type");
    descNode.innerHTML = sessionStorage.getItem("Desc");
    if (professionNode.innerHTML == "" || professionNode.innerHTML == undefined) {
        professionNode.innerHTML = "Profession";
    }
    if (typeNode.innerHTML == "" || typeNode.innerHTML == undefined) {
        typeNode.innerHTML = "Profession";
    }
}

function regRecord(iID, iFullname, iUsername) {
    sessionStorage.setItem("NIK", iID);
    sessionStorage.setItem("Fullname", iFullname);
    sessionStorage.setItem("Username", iUsername);
    sessionStorage.setItem("Profession", "Unknown");
    sessionStorage.setItem("Type", "Civilian");
    //sessionStorage.setItem("regSSO", "true");
}

function regSetup(nikNode, fullnameNode, usernameNode) {
    //usernameNode.value = sessionStorage.getItem("Username");
    //fullnameNode.value = sessionStorage.getItem("Fullname");
    //nikNode.value = sessionStorage.getItem("Type");

    usernameNode.setAttribute("value", sessionStorage.getItem("Username"));
    fullnameNode.setAttribute("value", sessionStorage.getItem("Fullname"));
    nikNode.setAttribute("value", sessionStorage.getItem("NIK"));
}

function editSetup(iNIKNode, iPhoneCNode, iPhoneNode, iTypeNode, iJoinPeriodNode,
    iProfessionNode, iSkillNode, iAddressNode, iDateNode, iFullnameNode,
    iUsernameNode, iPNode, iP2Node, iPGenNode, iDescNode) {
    iNIKNode.setAttribute("value", sessionStorage.getItem("NIK"));
    iPhoneCNode.setAttribute("value", sessionStorage.getItem("PhoneC"));
    iPhoneNode.setAttribute("value", sessionStorage.getItem("Phone"));
    //iTypeNode.setAttribute("value", sessionStorage.getItem("Type")); //$('#myselect').material_select();
    iJoinPeriodNode.setAttribute("value", sessionStorage.getItem("Period"));

    iProfessionNode.setAttribute("value", sessionStorage.getItem("Profession"));
    //iSkillNode.setAttribute("value", sessionStorage.getItem("Skill"));
    iAddressNode.setAttribute("value", sessionStorage.getItem("Address"));
    iDateNode.setAttribute("value", sessionStorage.getItem("Birthdate"));
    iFullnameNode.setAttribute("value", sessionStorage.getItem("Fullname"));

    iUsernameNode.setAttribute("value", sessionStorage.getItem("Username"));
    iPNode.setAttribute("value", sessionStorage.getItem("Password"));
    iP2Node.setAttribute("value", sessionStorage.getItem("Password"));
    //iPGenNode.setAttribute("placeholder", sessionStorage.getItem("NIK"));
    iDescNode.setAttribute("value", sessionStorage.getItem("Desc"));
}

function logout() {
    sessionStorage.clear();
    location.replace("index.html");
}

function isLoggedin() {
    console.log("session storage");
    console.log(typeof sessionStorage.getItem("Username"));
    if (typeof sessionStorage.getItem("Username") === typeof countryCode[0]) {
        return true;
    }
    return false;
}

function navbarLoggedSetup(mainPage, jobPage, settingPage, helpPage, adminPage) {
    mainPage.setAttribute("href", "main-page.html");
    jobPage.setAttribute("href", "jobs-page.html");
    settingPage.setAttribute("href", "edit-profile-page.html");
    helpPage.setAttribute("href", "help-page.html");
    adminPage.setAttribute("href", "admin-page.html");
}

function navbarSetup(mainPage, jobPage, settingPage, helpPage, adminPage) {
    mainPage.setAttribute("href", "index.html");
    helpPage.setAttribute("href", "help-page.html");
    adminPage.setAttribute("href", "admin-page.html");
    jobPage.setAttribute("href", "index.html");
    settingPage.setAttribute("href", "index.html");
}
