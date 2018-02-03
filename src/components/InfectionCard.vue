<template>
  <v-card color="purple" class="white--text full-height">
    <v-flex xs10 md8 lg6>
      <v-card-title primary-title>
        <div class="headline">{{ hospital.hospital_name }}</div>
      </v-card-title>

      <v-card-text>
        {{ hospital.address }}<br>
        {{ hospital.city }}, {{ hospital.state }} {{ hospital.zip_code }}
      </v-card-text>
    </v-flex>

    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs12>
          <div>
            <v-card-text>
              <v-layout column>
                <strong>Measure:</strong>
                {{ hospital.measure_name }}
                <br>
                <strong>Score:</strong> {{ hospital.score }}
              </v-layout>
            </v-card-text>
          </div>
        </v-flex>
        <v-flex xs4>
          <v-card-text>
            <v-layout column>
              {{ hospital.compared_to_national }}<br>
              <div v-if="hospital.compared_to_national==='No Different than National Benchmark'" large>
                (SAME)
              </div>
              <v-icon v-else-if="hospital.compared_to_national==='Worse than the National Benchmark'" large>
                thumb_down
              </v-icon>
              <v-icon v-else-if="hospital.compared_to_national==='Better than the National Benchmark'" large>
                thumb_up
              </v-icon>
              <div v-else-if="hospital.compared_to_national==='Not Available'" large>
                (N/A)
              </div>
              <v-icon v-else large>
                help_circle</v-icon>
            </v-layout>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'InfectionCard',
    props: ['hospital']
  }
</script>
