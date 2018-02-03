<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in menuItems"
          :key="i"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
<!--
            <surgery-compare></surgery-compare> -->

            <v-tabs grow dark>
                <v-tabs-bar>
                  <v-btn><v-tabs-item :to="{path:'/'}" exact>Home</v-tabs-item></v-btn>
                  <v-btn><v-tabs-item :to="{name:'HospCompliDeaths'}">Deaths</v-tabs-item></v-btn>
                  <v-btn><v-tabs-item :to="{name:'HospInfections'}">Infections</v-tabs-item></v-btn>
                </v-tabs-bar>
              </v-tabs>

            <router-view />


          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  import SurgeryCompare from '@/components/SurgeryCompare'

  export default {
    components: {
      SurgeryCompare
    },
    data () {
      return {
        clipped: false,
        drawer: false,
        menuItems: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        },
        {
          icon: 'battery_full',
          title: 'people'
        },
        {
          icon: 'pets',
          title: 'Leave Town'
        }],
        miniVariant: false,
        leftDrawer: false,
        title: 'HealthCare Compare'
      }
    }
  }
</script>

<style>

</style>
