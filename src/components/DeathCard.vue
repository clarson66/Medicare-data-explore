<template>
  <v-card color="orange" class="white--text">
    <v-flex>
      <h1 class="hdr">{{ hospital.hospital_name }}</h1>
      <h2>{{ hospital.address }}</h2>
      <v-card-text>{{ hospital.city }}, {{ hospital.state }} {{ hospital.zip_code }}</v-card-text>
    </v-flex>

    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs12>
          <v-card-text>
            <table style="width:100%">
              <tr>
                <td>Measure</td>
                <td>{{ hospital.measure_name }}</td>
              </tr>
              <tr>
                <td>Compare to National</td>
                <td>{{ hospital.compared_to_national }}</td>
              </tr>
              <tr>
                <td>Denominator</td>
                <td>{{ hospital.denominator }}</td>
              </tr>
              <tr>
                <td>Score</td>
                <td>{{ hospital.score }}</td>
              </tr>
              <tr>
                <td>Low Estimate</td>
                <td>{{ hospital.lower_estimate }}</td>
              </tr>
              <tr>
                <td>High Estimate</td>
                <td>{{ hospital.higher_estimate }}</td>
              </tr>
            </table>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: '',
    props: ['hospital']
  }
</script>

<style scoped>

</style>
