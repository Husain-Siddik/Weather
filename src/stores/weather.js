
import { defineStore } from 'pinia'

export const useweatherStore = defineStore('weather',
  {
    state: () => ({
      apiKey: 'baf209e30b3a49b6b4665406241106',
      location_quiry: '',
      weather: {},

    }),

    getters: {

    },

    actions: {
      LodeWeather() {
        if (this.location_quiry.length != 0) {
          fetch(`https://api.weatherapi.com/v1/current.json?key=baf209e30b3a49b6b4665406241106&q=${this.location_quiry}&aqi=no`)
            .then(response => response.json())


            //Parse the JSON response
            .then(data => {
              // Handle successful response

              this.data = data  // Update  component's data
              this.weather = data

            })

            .catch(error => {
              // Handle errors
              console.error('Error fetching data:', error);
            });
        }


      },

    },

  })
