<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/draw">Draw</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
@import "./styles/bootstrap.min.css";

.row {
    margin: 0;
}
</style>
