<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div>

        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden pl-[2px]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/weather">Weather</RouterLink>
                        </li>
                    </ul>
                </div>
                <a class="text-xl pl-7">WeatherAPK</a>
            </div>
            <div class="navbar-center hidden lg:flex pl-2">
                <ul class="menu menu-horizontal px-2">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/weather">weather</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn">Log In</a>
            </div>
        </div>
    </div>
</template>