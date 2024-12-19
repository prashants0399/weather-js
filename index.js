const apikey = "0211cdd27ae5b39ed2141ca98c826d7e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weathericon= document.querySelector('.weather-icon')
const searchBox=document.querySelector('.search input')
const searchBtn=document.querySelector('.search button')
async function chechweather(city) {
    const response = await fetch(apiurl+ city+`&appid=${apikey}`);
    
    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }else{
        var data = await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
        
        if(data.weather[0].main == "Clouds"){
            weathericon.src = 'cloudy.png ';
        }else if(data.weather[0].main == 'Clear'){
            weathericon.src="clear-sky.png"
        }else if(data.weather[0].main=='Rain'){
            weathericon.src = "heavy-rain.png"
        }else if(data.weather[0].main=='Drizzle'){
            weathericon.src='rainy-day.png'
        }else if(data.weather[0].main=="Snow"){
            weathericon.src='snow.png';
        }else if(data.weather[0]=='Mist'){
            weathericon.src='fog.png'
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector('.error').style.display='none';
    }
    
    }
     
   
searchBtn.addEventListener("click",()=>{
    chechweather(searchBox.value);
})