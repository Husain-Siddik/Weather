<script setup>
import { RouterView } from 'vue-router'
import navBar from '../src/components/navBar.vue'

</script>
<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->
  <navBar></navBar>
  <RouterView />
</template>
