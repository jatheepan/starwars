<template>
    <div class="home">
        <input type="radio" id="people" name="type" value="people">
        <label for="people">People</label>
        <br>
        <input type="radio" id="vehicle" name="type" value="vehicle">
        <label for="vehicle">Vehicle</label>
        <input type="search" placeholder="Keyword">
        <button type="button" @click="search()">Go</button>
        {{msg}}
    </div>
</template>

<script>

  export default {
    name: 'home',
    data () {
      return {
        msg: 'Hello there'
      }
    },
    methods: {
      search () {
        console.log(this)
      }
    }
  }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
