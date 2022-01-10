<template>
  <div id="app">
    <h1>Todo-list</h1>
    <router-link to="/">Home page</router-link>
    <hr>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    font-size: 45px;
    background-color: #772020;;
    color: #ffffff;
  }
</style>
