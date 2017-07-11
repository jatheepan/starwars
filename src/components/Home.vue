<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="filters">
                        <label>
                            <input type="radio" v-model="type" name="type" value="people">
                            People
                        </label>

                        <label>
                            <input type="radio" v-model="type" name="type" value="planets">
                            Planets
                        </label>

                        <label>
                            <input type="radio" v-model="type" name="type" value="starships">
                            Starships
                        </label>
                    </div>
                    <div class="input-group">
                        <input v-model="term" class="form-control" type="search" placeholder="Keyword">
                        <span class="input-group-btn">
                            <button type="submit" class="btn btn-primary" @click="search()">Go</button>
                        </span>
                    </div>
                    <ul>
                        <li v-for="item in history">{{item.type}} - {{item.term}}</li>
                    </ul>
                </div>

                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="item in results">
                            <router-link :to="item.path">{{item.name}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Service from '../services'

  export default {
    name: 'home',
    data () {
      return {
        term: '',
        type: 'people',
        results: [],
        history: []
      }
    },
    methods: {
      search () {
        this.history.unshift({type: this.type, term: this.term})

        Service.search(this.type, this.term)
          .then(data => {
            if (data.results && data.results.length) {
              const regex = /\/(\d{1,})\//g
              data.results.forEach(item => {
                const match = regex.exec(item.url)
                item.path = `detail/${this.type}/` + match[1]
              })
              this.results = data.results
            }
          })
      }
    }
  }
</script>

<style scoped lang="scss">
    h1, h2 {
        font-weight: normal;
    }


</style>
