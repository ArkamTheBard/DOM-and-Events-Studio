// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeoffButton = null;
let landingButton = null;
let abortButton = null;
let upButton = null;
let downButton = null;
let leftButton = null;
let rightButton = null;

let rocketImage = null;

function init(){
    takeoffButton = document.getElementById("takeoff");
    landingButton = document.getElementById("landing");
    abortButton = document.getElementById("missionAbort");


    takeoffButton.addEventListener("click", function(event){
        let status = window.confirm("Confirm that the shuttle is ready for takeoff");
        if(status === true){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10,000 miles";
        }
    });

    landingButton.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });

    abortButton.addEventListener("click", function(event){
        let status = window.confirm("Confirm that you want to abort the mission");
        if(status === true){
            document.getElementById("flightStatus").innerHTML = "Mission aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        }
    });

}



window.onload = init;