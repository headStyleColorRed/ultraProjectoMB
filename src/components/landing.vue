<template>
  <div>
    <toolbar/>
    <div class="landingWrapper">
      <v-btn color="orange" v-on:click="panel= []">Close All</v-btn>
      <div class="diasThumbnail">
        <v-expansion-panel popout v-model="panel" expand>
          <v-expansion-panel-content v-for="(item, index) in rutas" :key="index">
            <v-icon slot="actions" color="orange darken-1">add</v-icon>
            <div class="DayTitle" slot="header">
              <p>{{items.title}} {{parseInt(index)+1}}</p>
            </div>
            <div class="contenidoDiario">
              <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                  <v-card>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                      aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">{{rutasBeginings[index]}} - {{rutasEndings[index]}}</h3>
                        <div>My tea's gone cold. I'm wondering why I got out of bed at all. The morning rain clouds up my window. And I can't see at all. And even if I could it'd all be gray. But your picture on my wall. It reminds me that it's not so bad, it's not so bad.</div>
                      </div>
                    </v-card-title>

                    <v-card-actions>
                      <v-btn flat color="orange">Share</v-btn>
                      <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </div>
  </div>
</template>

<script>
import toolbar from "./toolbar.vue";
export default {
  data() {
    return {
      items: {
        title: "D A Y: "
      },
      panel: [],
      rutas: {},
      rutasBeginings: {},
      rutasEndings: {}
    };
  },
  mounted() {
    let currentDay = 2;
    this.show(currentDay);
    this.rutas = this.$store.getters.rutas;

    //Extraemos el primer tramo de cada día
    let tramoMatinal = new Object();
    for (const a in this.rutas) {
      for (const b in this.rutas[a]) {
        tramoMatinal[a] = this.rutas[a][b].begining;
        break;
      }
    }
    this.rutasBeginings = tramoMatinal;
    console.log(this.rutasBeginings);

    
    //Extraemos el  tramo final de cada día
    
    let tramoFinal = new Object();
    for (const a in this.rutas) {
      for (const b in this.rutas[a]) {
        tramoFinal[a] = this.rutas[a][b].ending;
      }
    }
    this.rutasEndings = tramoFinal;
    console.log(this.rutasEndings);


  },
  methods: {
    show(currentDay) {
      for (let key in this.items.title) {
        if (key == currentDay) {
          this.panel.push(true);
        } else {
          this.panel.push(false);
        }
      }
    }
  },
  components: {
    toolbar
  }
};
</script>

<style scoped>
.landingWrapper {
  margin-top: 5rem;
}

.DayTitle {
  letter-spacing: 5px;
  font-family: sans-serif;
}

.contenidoDiario {
  display: grid;
}
</style>
