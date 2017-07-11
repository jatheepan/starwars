<template>
    <div id="app">
        <div class="container">
            <h1>Starwars API</h1>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
    #app {
        color: #2c3e50;
        margin-top: 60px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: Helvetica, Arial, sans-serif;

        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }
    }
</style>
