let getWeatherInformation = async function(city,api){
    
    try{
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=current&key=${api}&iconSets=2&contentType=json`);
        let data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }

}


export {getWeatherInformation}