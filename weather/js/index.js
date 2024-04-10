
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

class Weather {
    
    apiKey = 'e94a06c22c14c9ab3059f89372eb2541'
    url = 'https://api.openweathermap.org/data/2.5/weather'

    getData(){
        fetch(this.url + '?q=Tallinn&appid=' + this.apiKey, []) // Promise
        // step 2 Promise -> format (text)
        .then(response => {
            return response.json()
        })  
        // step 2 to -> View
        .then(data => {
            console.log(data);
        })
    }

}


let clsWeather = new Weather()
clsWeather.getData()


