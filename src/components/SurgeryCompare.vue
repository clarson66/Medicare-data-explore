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
              <v-select
                v-bind:items="states"
                v-model="state"
                label="State"
                single-line
                bottom
              ></v-select>
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

      <v-layout row wrap>

<div v-for="h in hospitals" :key="h.$index">

        <v-flex xs12 md6 lg3>

          <v-card color="purple" class="white--text">
          <v-flex xs10 md8 lg6>
            <v-card-title primary-title>
              <div class="headline">{{ h.asc_name }}</div>
            </v-card-title>
            <v-card-text>{{ h.city }}, {{ h.state }} {{ h.zip_code }}</v-card-text>
          </v-flex>

            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs6>
                  <div>
                    <v-card-text>
                      <v-layout column>
                      Eye: {{ h.asc7_eye }}<br>
                      Gastro: {{ h.asc7_gastrointestinal }}<br>
                      Genitny: {{ h.asc7_genitourinary }}<br>
                    </v-layout>
                    </v-card-text>
                  </div>
                </v-flex>
                <v-flex xs6>
                  <v-card-text>
                    <v-layout column>
                      MusculoSkel: {{ h.asc7_musculoskeletal }}<br>
                      Nervous Sys: {{ h.asc7_nervous_system }}<br>
                      Skin: {{ h.asc7_skin }}<br>
                    </v-layout>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

          </div>

      <!-- </flex> -->

      </v-layout>

    </v-container>

    <v-footer fixed  dark>
          <v-btn color="purple" @click="pagePrev" :disabled="page === 1">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
        <v-spacer></v-spacer>
          <v-btn>{{page}}</v-btn>
        <v-spacer></v-spacer>
          <v-btn color="purple" @click="pageNext">
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
    </v-footer>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SurgeryCompare',
  data () {
    return {
      hospitals: [],
      errors: [],
      states: ['', 'AL', 'AK', 'AZ', 'CA', 'CO', 'CT', 'ID', 'MI', 'MN', 'MS', 'NV', 'UT', 'VT', 'WA'],
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
    fetch () {
      axios.get('https://data.medicare.gov/resource/r2ps-634m.json', {
        params: {
          $order: ':id',
          $limit: this.pageSize,
          $offset: (this.page - 1) * this.pageSize,
          ...(this.city ? { city: this.city } : {}),
          ...(this.state ? { state: this.state } : {}),
          ...(this.zip ? { zip_code: this.zip } : {})
        }
      })
      .then(response => {
        this.hospitals = response.data
      })
      .catch(e => {
        this.errors.push(e)
        console.warn(e)
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
    // console.warn('got to created')
    this.fetch()
  }
}
</script>
