<template>
    <div class="container">
        <div v-if="people">
            <h4>{{people.name}}</h4>
            <p>Gender: {{people.gender}}</p>
            <p>Height: {{people.height}}</p>
            <p>Eye color: {{people.eye_color}}</p>
            <p>Skin color: {{people.skin_color}}</p>
        </div>
        <div v-if="planets">
            <h4>{{planets.name}}</h4>
            <p>Climate: {{planets.climate}}</p>
            <p>Gravity: {{planets.gravity}}</p>
            <p>Terrain: {{planets.terrain}}</p>
        </div>
        <div v-if="starships">
            <h4>{{starships.name}}</h4>
            <p>Cargo Capacity: {{starships.cargo_capacity}}</p>
            <p>Manufacturer: {{starships.manufacturer}}</p>
            <p>Length: {{starships.length}}</p>
        </div>
    </div>
</template>
<script>
  import Service from '../services'

  export default {
    name: 'detail',
    data () {
      return {
        people: null,
        planets: null,
        starships: null
      }
    },
    created () {
      const type = this.$route.params.type
      const id = this.$route.params.id
      Service.get(type, id)
        .then(data => {
          this[type] = data
        })
    }
  }
</script>
