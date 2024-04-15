
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

class Weather {
    
    apiKey = 'e94a06c22c14c9ab3059f89372eb2541'
    url = 'https://api.openweathermap.org/data/2.5/weather'
    options = {}

    getData(){
        fetch(this.generateUrl(), []) // Promise
        // step 2 Promise -> format (text)
        .then(response => {
            return response.json()
        })  
        // step 2 to -> View
        .then(data => {
            let city = document.getElementById('city')
            let temp =  document.getElementById('temp')
            let description =  document.getElementById('description')
            let label = document.querySelector('label[for="flexSwitchCheckChecked"]')

            if (this.options.hasOwnProperty('units')){
                if (this.options.units == 'metric')
                {
                    label.innerText = 'Cel'
                } else if (this.options.units == 'standart'){
                    label.innerText = 'Far'
                }
            } else {
                label.innerText = 'Far'
            }

            city.innerText = data.name
            temp.innerText = data.main.temp

            if (data.weather.length > 0)
            {
                description.innerText = ''
                data.weather.forEach(desc => {
                    description.innerText += desc.description + '\n'
                })
            }
            console.log(data);
        })
    }

    /**
     * 
     * @param { key : value, ...} options 
     */
    generateUrl(){

        if (this.options.hasOwnProperty('appid') == false)
        {
            this.options.appid = this.apiKey
        }

        let params = []
        if (typeof this.options == 'object'){
            //console.log(Object.entries(options));
            Object.entries(this.options).forEach(option => {
                console.log(option);
                params.push(option[0] + '=' + option[1])
            })
        }

        if (params.length != 0) {
            return this.url + '?' + params.join('&') 
        }

        return this.url
    }

}

let clsWeather = new Weather()

let myswitch = document.getElementById('flexSwitchCheckChecked')
myswitch.addEventListener('change', event => {
    console.log(event.target.checked);
    // units = standart |  metric
    if (event.target.checked == false){
        clsWeather.options = { q: 'tallinn', 'units': 'metric'}
    } else {
        clsWeather.options = { q: 'tallinn', 'units': 'standart'}
    }
    clsWeather.getData()
})


clsWeather.options = { q: 'tallinn'}
clsWeather.getData()


