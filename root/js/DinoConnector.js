var accessGranted = false;
var ConectedAddress;
var script = document.createElement("script"); script.type = "module"; script.src = "../js/DinoGame.js";
var LBScript = document.createElement("script"); LBScript.type = "module"; LBScript.src = "../js/LeaderBoard.js";
let DinoContainer = document.getElementById("dino-game");


window.onload = function(){ 
    try{ 
        ergo_request_read_access().then(access => {
            if(access) {
                ergo.get_used_addresses().then(addresses => {
                        addresses.forEach(addr => {
                            ConectedAddress = addr;
                    })
                }).then(addr => {
                    addPhaser();
                });
            }
            else {
                ConectedAddress = "N/A";
                console.log("Access not Granted");
            }
        });
    }
    catch(e)
    {
        ConectedAddress = "N/A";
        addPhaserNoAddress();
    }
}   

export {ConectedAddress};

function addPhaser() {   
    DinoContainer.appendChild(script);
    document.body.appendChild(LBScript);
    document.getElementById("loading-message").style.display = "none";
}

//loads phaser without the leaderboard
function addPhaserNoAddress() {   
    DinoContainer.appendChild(script);
    document.getElementById("loading-message").style.display = "none";
}