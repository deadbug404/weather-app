

let visualizeInformation = function(obj){
    let condition = document.querySelector("#condition");
    let city = document.querySelector("#city");
    let temp = document.querySelector("#temp");
    let feelslike = document.querySelector("#feelslike");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let icon = document.querySelector("#icon");
    let body = document.querySelector("body");

    condition.textContent = obj.currentConditions.conditions;
    city.textContent = obj.resolvedAddress;
    temp.innerHTML = obj.currentConditions.temp;
    import(`../icons/${obj.currentConditions.icon}.png`).then((module)=>{
       icon.src = module.default;
    });
    import(`../background-images/${obj.currentConditions.icon}.jpg`).then((module)=>{
        body.style.backgroundImage = `url(${module.default})`;
    });
    feelslike.textContent = obj.currentConditions.feelslike;
    humidity.textContent = obj.currentConditions.humidity;
    wind.textContent = obj.currentConditions.windspeed;
}

export {visualizeInformation};