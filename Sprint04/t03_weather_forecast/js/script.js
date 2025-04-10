let promise =  await fetch("https://api.open-meteo.com/v1/forecast?latitude=-33.8678&longitude=151.2073&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Australia%2FSydney")
promise = await promise.json()
for(let i = 0; i < promise.daily.time.length; i++){
    let div = document.createElement("div")
    div.setAttribute("class", "forecast")
    let date = document.createElement("h2")
    date.setAttribute("class", "time")
    date.innerHTML = promise.daily.time[i].charAt(8) + promise.daily.time[i].charAt(9) + "." + promise.daily.time[i].charAt(5) + promise.daily.time[i].charAt(6);
    div.appendChild(date)
    
    let image = document.createElement("img")
    if(promise.daily.weather_code[i] >= 61){
        image.src = "assets/images/rain.jpg"
        image.alt = "rain"
    } else if(promise.daily.weather_code[i] <= 3){
        image.src = "assets/images/sun.jpg"
        image.alt = "sun"
    }  else{
        image.src = "assets/images/cloudly.jpg"
        image.alt = "cloudly"
    }
    div.appendChild(image)


    let temperature = parseFloat(((promise.daily.temperature_2m_min[i] + promise.daily.temperature_2m_max[i]) / 2).toFixed(1))

    let temper = document.createElement("h2")
    temper.setAttribute("class", "temperature")
    temper.innerHTML = temperature + "°";
    div.appendChild(temper)
    document.getElementById("forecast_container").appendChild(div);
}