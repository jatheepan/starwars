<template>
    <div class="detail">
        <h2>{{people.hair_color}}</h2>
    </div>
</template>
<script>
  import Service from '../services'

  export default {
    name: 'detail',
    data () {
      return {
        people: {}
      }
    },
    created () {
      Service.get(this.$route.params.type, this.$route.params.id)
        .then(data => {
          this.people = data
        })
    }
  }
</script>
