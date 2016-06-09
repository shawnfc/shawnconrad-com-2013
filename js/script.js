  
  
  $('.gallery').featherlightGallery({
        gallery : {
            fadeIn : 300,
            fadeOut : 300
        },
        openSpeed : 300,
        closeSpeed : 300
    });

    $('#mobileMenuIcon').click(function() {
        $('#MainNav').toggle(500);
    });


// DAY, DATE, YEAR
var d = new Date();
var day = d.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var month = month[d.getMonth()];
var theDate = d.getDate();
var theYear = d.getFullYear();

var topHeader = document.getElementById("liveInfo");

topHeader.innerHTML = "<p id='liveInfo-content'>" + daylist[day] + ', ' + month + ' ' + theDate + ', ' + theYear + "</p>";


//MAIN MENU HOVER
$("#MainNav li a").hover(function () {
    $(this).css({ borderTop: "5px solid #000", borderBottom: "5px solid #000", color: "#000"}, 300);
},
function () {
    $(this).css({ borderTop: "none", borderBottom: "none", color: "#555" }, 300);
});


//COUNTER TIMER
var secondsRemaining;
var intervalHandle;
function resetPage() {
    document.getElementById("inputArea").style.display = "block";
}

function tick() {
    //grab the counter
    var timeDisplay = document.getElementById("time");

    //turn seconds into mm:ss
    var min = Math.floor(secoundsRemaining / 60);
    var sec = secondsRemaining - (min * 60);

    //add a leading zero if number is below 10
    if (sec < 10) {
        sec = "0" + sec;
    }

    //concatenate with a colon
    var message = min + ":" + sec;
    //change the display
    timeDisplay.innerHTML = message;
    
    //stop when it reaches zero
    if(secondsRemaining === 0) {
        alert("Times Up!");
        clearInterval(intervalHandle);
        resetPage();
    }
    secondsRemaining--;
}

function startCountdown() {
    //get contents of the minutes text box
    var minutes = getElementById("minutes").value;
    if(isNaN(minutes)) {
        alert("Please Enter a Number!");
        //stop here if not a number
        return;
    }
    //how many seconds
    secondsRemaining = minutes * 60;

    //every second call the tick function
    intervalHandle = setInterval(tick, 1000);

    //hide the form
    document.getElementById("inputArea").style.display = "none";
}

window.onload = function () {
//create the text box
var inputMinutes = document.createElement("input");
inputMinutes.setAttribute("id", "minutes");
inputMinutes.setAttribute("type", "text");

//create button
var startButton = document.createElement("button");
startButton.setAttribute("type", "button");
startButton.innerHTML = "Start Countdown";
startButton.onclick = function() {
    startCountdown();
};

//add input and button to div
document.getElementById("inputArea").appendChild(inputMinutes);
document.getElementById("inputArea").appendChild(startButton);
};



$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});


