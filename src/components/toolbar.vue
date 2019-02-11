<template>
<div>
  
  <v-toolbar dark color="orange darken-1">
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-toolbar-title v-on:click="pacasa()" class="logos">TMB</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon @click.stop="drawer = !drawer">settings</v-icon>
    </v-btn>
  </v-toolbar>

  <!--////////////// SETTINGS DRAWER////////////-->
  
  <v-layout
    wrap
    style="height: 0px;"
  >

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</div>

  
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Units', icon: 'build'},
          { title: 'Reset', icon: 'delete'},
          { title: 'About', icon: 'info'},
          { title: 'Legal', icon: 'work'},
        ],
        mini: false,
        right: null
      }
    },
    methods:{
      pacasa(){
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>
.logos {
    text-shadow: 0px -1px 0px rgba(0,0,0,.5);
  color: #E65100;
  font-family: sans-serif;
  font-weight: 800;
}
</style>
