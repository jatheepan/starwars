<template>
    <div class="home">
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
    }
  }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
