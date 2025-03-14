import { getWeatherInformation } from "./visual-crossing";
import { visualizeInformation } from "./visualizer";

let submitform = async function(api){
    try{
        let city = document.querySelector("#search").value;
        let obj = await getWeatherInformation(city,api);
        visualizeInformation(obj);
    }catch(err){
        console.log(err);
    }
}

export {submitform}