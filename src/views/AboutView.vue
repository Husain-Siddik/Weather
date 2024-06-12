<script setup>
import { useweatherStore } from '../stores/weather'
const weatherStore = useweatherStore()
// const country = weatherStore.weather.location?.country;
// const countery_1 = 'Country Name:';
</script>

<template>
  <div class="about">
    <div
      class="mx-auto xlg:w-1/5 lg:w-1/5 md:w-2/5 border border-neutral-400 px-5 py-8 bg-[url('../assets/night-weather.png')]">
      <!-- search box -->
      <div class="flex flex-col">
        <h4 class=" text-center font-extrabold text-2xl capitalize mb-4"> Weather app</h4>
        <input v-model="weatherStore.location_quiry" type="text" placeholder="City Name.."
          class="input input-bordered input-primary w-full mx-auto" v-on:keyup.enter="weatherStore.LodeWeather()" />
      </div>
      <!--  weather info -->
      <div class="text-center py-4 text-3xl ">
        <div class="py-6  ">
          <h2 class="p-3 ">City:{{ weatherStore.weather.location?.name }}</h2>
          <h3>Country: {{ weatherStore.weather.location?.country }}</h3>
          <!-- <h3>{{ countery_1 }} {{ country }}</h3> -->
        </div>
        <div class="">
          <h2>Temp:{{ weatherStore.weather.current?.temp_c }} c</h2>
          <h3> but feels like {{ weatherStore.weather.current?.feelslike_c }}</h3>
          <h4> {{ weatherStore.weather.current?.cloud }}</h4>
          <!-- <h2>{{ weatherStore.weather.current.condition?.icon }}</h2> -->
        </div>
        <!-- weather icon added from api  -->
        <div>
          <h2 class="border-solid border-2 mt-10 rounded-md p-4 text-white">weather conditon</h2>

          <div class="flex mt-5 h-12 justify-between border border-dashed">
            <h3 class="pl-3">{{ weatherStore.weather.current?.condition?.text }}</h3>
            <img class="" :src="weatherStore.weather.current?.condition?.icon" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>



<style></style>
