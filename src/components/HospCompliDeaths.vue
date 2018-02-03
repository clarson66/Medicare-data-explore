<template>
  <div class="grey lighten-3">

    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <div>
        <v-layout column>
          <v-text-field v-model="city" maxlength="30" label="City"></v-text-field>
          <v-layout row>
            <v-flex xs4>
              <state-select @selected="onStateSelectUpdate" />
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="zip" maxlength="5" label="Zip Code"></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-btn @click="search">Search</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </div>

      <v-layout>
        <v-flex >
          <v-card>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex xs12 md6 lg3 v-for="h in hospitals" :key="h.$index">
                  <death-card :hospital="h"></death-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>

    <v-footer fixed>
      <v-flex xs4>
          <v-btn @click="pagePrev" :disabled="page === 1">&lt;</v-btn>
        </v-flex>
        <v-flex xs4>
          {{page}}
        </v-flex>
        <v-flex xs4>
          <v-btn @click="pageNext">&gt;</v-btn>
        </v-flex>
    </v-footer>

  </div>
</template>

<script>
import { HTTP } from '../http-common'
import StateSelect from './StateSelect'
import DeathCard from './DeathCard'

export default {
  name: 'HospCompliDeaths',
  components: {
    StateSelect,
    DeathCard
  },
  data () {
    return {
      hospitals: [],
      errors: [],
      zip: '',
      city: '',
      state: '',
      page: 1,
      pageSize: 5
    }
  },

  methods: {
    search () {
      this.page = 1
      this.fetch()
    },
    onStateSelectUpdate (newValue) {
      this.state = newValue
    },
    fetch () {
      HTTP.get('ukfj-tt6v.json', {
        params: {
          $order: ':id',
          $select: 'hospital_name,address,city,state,zip_code,measure_name,denominator,score,compared_to_national,lower_estimate,higher_estimate,footnote',
          $limit: this.pageSize,
          $offset: (this.page - 1) * this.pageSize,
          ...(this.city ? { city: this.city.toUpperCase() } : {}),
          ...(this.state ? { state: this.state } : {}),
          ...(this.zip ? { zip_code: this.zip } : {})
        }
      })
      .then(response => {
        this.hospitals = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    pageNext () {
      this.page += 1
      this.fetch()
    },
    pagePrev () {
      this.page -= 1
      this.fetch()
    }
  },

  created () {
    this.fetch()
  }
}
</script>

<style scoped>
.hdr {
  color: red;
  font-size: 20px;
}
h2 {
  font-size: 16px;
}
table {
  border-width: 1px;
  border-style: dotted;
  border-color: blue;
}
</style>
