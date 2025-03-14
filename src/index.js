import { submitform } from "../scripts/form";
import { getWeatherInformation } from "../scripts/visual-crossing";
import { visualizeInformation } from "../scripts/visualizer";
import "../styles/index.css";

let api = "46YUBH94EJN6QFY2T7NRTQ7MG";
let defaultCity = "tokyo";

let submit = document.querySelector("#submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    submitform(api);
})

getWeatherInformation(defaultCity,api).then(obj => visualizeInformation(obj));
