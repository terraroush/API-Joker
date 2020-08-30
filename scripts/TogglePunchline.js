export const togglePunchlineBtn = () => {
    const myBtn = document.getElementById("generate-button");
    let displaySetting = myBtn.style.display;

    if(displaySetting == "block") {
        myBtn.style.display = "none";
    } else {
        myBtn.style.display = "block";
    }
}