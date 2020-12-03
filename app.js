document.querySelector(".jsclick").addEventListener("click", ck);
function ck() {
    alert("Well come in our team");
}













let d = new Date();
let thisDay = d.getDay();

switch (thisDay) {
    case 0:
        document.getElementById("time").innerHTML=("<b>Today is <big><i>S</i></big>unday</b>");
        break;
    case 1:
        document.getElementById("time").innerHTML=("<b>Today is <big><i>M</i></big>onday</b>");
        break;
    case 2:
        document.getElementById("time").innerHTML=("<b>Today is <big><i>T</i></big>wesday</b>");
        break;
    case 3:
        document.getElementById("time").innerHTML=("<b> Today is <big><i>W</i></big>ednasday</b>");
        break;
    case 4:
        document.getElementById("time").innerHTML=("<b>Today is <big><i>T</i></big>husday </b>");
        break;
    case 5:
        document.getElementById("time").innerHTML=("<b>  Today is <big><i>F</i></big>riday </b>");
        break;
    case 6:
        document.getElementById("time").innerHTML=("<b>This is <big><i>S</i></big>uterday</b>");
};
