let selectedColors = [];

function chooseColor(color) {
    if (selectedColors.includes(color)) return;
    
    selectedColors.push(color);
    
    document.querySelectorAll(".color-btn")[color - 1].style.display = "none";
    
    if (selectedColors.length === 8) {
        document.getElementById("send-result").style.display = "block";
    }
}

function sendResult() {
    Telegram.WebApp.sendData(JSON.stringify(selectedColors));
    Telegram.WebApp.close();
}
