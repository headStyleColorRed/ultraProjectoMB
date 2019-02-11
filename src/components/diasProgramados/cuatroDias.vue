<template>
  <div class="recubreDias">
    <div class="DiaThumbnail">
      <div class="dia1">
        <h2>Day 1</h2>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card flat>
              <v-list class="card">
                <draggable
                  :options="{
                group:'people', 
                disabled:dragarDisabled,
                animation: 300}"
                  @choose="saludar(item)"
                  class="creceCoño"
                >
                  <v-list-tile v-for="item in diaUno" :key="item.title">
                    <v-list-tile-action>
                      <v-icon v-if="edicion" color="orange darken-1">menu</v-icon>
                      <v-icon v-else>lock</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title>-</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.kilometer"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </draggable>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div class="dia2">
        <h2>Day 2</h2>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card flat>
              <v-list class="card">
                <draggable
                  :options="{
                group:'people', 
                disabled:dragarDisabled,
                animation: 300}"
                  @choose="saludar(item)"
                  class="creceCoño"
                >
                  <v-list-tile v-for="item in rutas[1]" :key="item.title">
                    <v-list-tile-action>
                      <v-icon v-if="edicion" color="orange darken-1">menu</v-icon>
                      <v-icon v-else>lock</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title>-</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.kilometer"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </draggable>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div class="dia3">
        <h2>Day 3</h2>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card flat>
              <v-list class="card">
                <draggable
                  :options="{
                group:'people', 
                disabled:dragarDisabled,
                animation: 300}"
                  @choose="saludar(item)"
                  class="creceCoño"
                >
                  <v-list-tile v-for="item in rutas[2]" :key="item.title">
                    <v-list-tile-action>
                      <v-icon v-if="edicion" color="orange darken-1">menu</v-icon>
                      <v-icon v-else>lock</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title>-</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.kilometer"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </draggable>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div class="dia4">
        <h2>Day 4</h2>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card flat>
              <v-list class="card">
                <draggable
                  :options="{
                group:'people', 
                disabled:dragarDisabled,
                animation: 300}"
                  @choose="saludar(item)"
                  class="creceCoño"
                >
                  <v-list-tile v-for="item in rutas[3]" :key="item.title">
                    <v-list-tile-action>
                      <v-icon v-if="edicion" color="orange darken-1">menu</v-icon>
                      <v-icon v-else>lock</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title>-</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.kilometer"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </draggable>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import listaRutas from "../../assets/programacionRutas.json";
import draggable from "vuedraggable";

export default {
  props: ["editamelo"],
  data() {
    return {
      diaUno:"",
      diaDos:"",
      diaTres:"",
      diaCuatro:"",
      rutas:"",
      dragarDisabled: false,
      edicion: true,
      numeroDeDias: 0
    };
  },
  methods: {
    saludar(event) {
      console.log(event[0].title);
    }
  },

  mounted() {
    let diaUno = [];
    let diaDos = [];
    let diaTres = [];
    let diaCuatro = [];
    let listaDeCuatroDias = [];

    for (let i = 1; i <= 4; i++) {
      listaDeCuatroDias.push(listaRutas.rutas.cuatroDias[i]);
    }

    diaUno.push(listaRutas.rutas.cuatroDias[1]);
    diaDos.push(listaRutas.rutas.cuatroDias[2]);
    diaTres.push(listaRutas.rutas.cuatroDias[3]);
    diaCuatro.push(listaRutas.rutas.cuatroDias[4]);

    this.diaUno = diaUno[0];
    this.diaDos = diaDos;
    this.diaTres = diaTres;
    this.diaCuatro = diaCuatro;
    console.log(this.diaUno);
  },

  components: {
    draggable
  }
};
</script>

<style scoped>
.card {
  background-color: #303030;
  color: whitesmoke;
  border-bottom: 1px solid orange;
}

.DiaThumbnail {
  text-align: center;
}

.DiaThumbnail h2 {
  color: #b9b9b9;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.5);
  font-family: sans-serif;
  padding-top: 1rem;
}

.creceCoño {
  min-height: 3rem;
}

.explicacion {
  margin-top: 1rem;
  color: whitesmoke;
  font-family: sans-serif;
  border-bottom: 1px solid whitesmoke;
}

.explicacion h3 {
  text-align: center;
}
.botones {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem 0;
}
</style>



