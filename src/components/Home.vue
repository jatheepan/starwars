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
                            <button type="submit" class="btn btn-primary" @click="onSubmitClick(type, term)">Go</button>
                        </span>
                    </div>
                    <ul class="history">
                        <li @click="onHistoryItemClick(item)" v-for="item in history">{{item.type}} > {{item.term}}</li>
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
      /**
       * When user click on GO button do search and save history
       * @param type
       * @param term
       */
      onSubmitClick (type, term) {
        this.history.unshift({type: type, term: term})
        this.search(type, term)
      },

      /**
       * When user click on history perform search
       * @param data
       */
      onHistoryItemClick (data) {
        this.type = data.type
        this.term = data.term
        this.search(this.type, this.term)
      },

      /**
       * Perform search
       * @param type
       * @param term
       */
      search (type, term) {
        Service.search(type, term)
          .then(data => {
            const results = data.results || []

            results.forEach(item => {
              const regex = /\/(\d{1,})\//g
              const match = regex.exec(item.url)
              item.path = `detail/${this.type}/` + match[1]
            })
            this.results = results
          })
      }
    }
  }
</script>

<style scoped lang="scss">
    h1, h2 {
        font-weight: normal;
    }

    .history {
        list-style: none;
        margin: 20px 0 0 0;
        padding: 10px 0;
        border-bottom: 1px solid #e0e0e0;
    }

</style>
