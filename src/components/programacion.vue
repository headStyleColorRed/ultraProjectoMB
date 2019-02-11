<template>
  <div class="superwrapper">
    <toolbar/>

    <div class="explicacion">
      <h3>This is the plan I made for you!</h3>
      <ul>
        <li>If you want to change any day, click the
          <v-icon>lock</v-icon>to unlock the list.
        </li>
        <li>Once your are done with the list, press
          <v-icon>check</v-icon>and continue to see your progress.
        </li>
        <li>Rembember that you can always go back and change it by going into settings and "Route Planning"</li>
      </ul>
      <div class="botones">
        <v-btn v-on:click="editar" color="orange darken-1">
          <v-icon>lock</v-icon>
        </v-btn>
        <v-btn  color="orange darken-1">
          <v-icon>check</v-icon>
        </v-btn>
      </div>
    </div>

    <div v-for="(item, index) in rutas" :key="index" class="DiaThumbnail">
      <h2>Day {{index + 1}}</h2>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card flat>
            <v-list class="card">
              <v-list-tile v-for="item in rutas[index]" :key="item.title">
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
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import toolbar from "./toolbar.vue";
import listaRutas from "../assets/programacionRutas.json";

export default {
  data() {
    return {
      rutaEscogida: "",
      rutas: "",
      dragarDisabled: true,
      edicion: false,
      numeroDeDias: { 0: "diaUno", 1: "diaDos", 2: "diaTres", 3: "diaCuatro" },
      dialog: false,
      whichday: true
    };
  },
  methods: {
    editar() {
      this.edicion = !this.edicion;
    },
  },

  mounted() {
    let listaDeCuatroDias = [];
    let listaDeCincoDias = [];
    let listaDeSeisDias = [];
    let listaDeSieteDias = [];
    let listaDeOchoDias = [];
    let listaDeNueveDias = [];
    let listaDeDiezDias = [];
    let listaDeOnceDias = [];

    /////////  CUATRO DIAS  ////////
    for (let i = 1; i <= 4; i++) {
      listaDeCuatroDias.push(listaRutas.rutas.cuatroDias[i]);
    }
    /////////  CINCO DIAS  ////////
    for (let i = 1; i <= 5; i++) {
      listaDeCincoDias.push(listaRutas.rutas.cincoDias[i]);
    }
    /////////  SEIS DIAS  ////////
    for (let i = 1; i <= 6; i++) {
      listaDeSeisDias.push(listaRutas.rutas.seisDias[i]);
    }
    /////////  SIETE DIAS  ////////
    for (let i = 1; i <= 7; i++) {
      listaDeSieteDias.push(listaRutas.rutas.sieteDias[i]);
    }
    /////////  OCHO DIAS  ////////
    for (let i = 1; i <= 8; i++) {
      listaDeOchoDias.push(listaRutas.rutas.ochoDias[i]);
    }
    /////////  NUEVE DIAS  ////////
    for (let i = 1; i <= 9; i++) {
      listaDeNueveDias.push(listaRutas.rutas.nueveDias[i]);
    }
    /////////  DIEZ DIAS  ////////
    for (let i = 1; i <= 10; i++) {
      listaDeDiezDias.push(listaRutas.rutas.diezDias[i]);
    }
    /////////  ONCE DIAS  ////////
    for (let i = 1; i <= 11; i++) {
      listaDeOnceDias.push(listaRutas.rutas.onceDias[i]);
    }

    this.numeroDeDias = this.$store.state.numeroDeDias;
    if (this.$store.state.numeroDeDias == 4) {
      this.rutas = listaDeCuatroDias;
    } else if (this.$store.state.numeroDeDias == 5) {
      this.rutas = listaDeCincoDias;
    } else if (this.$store.state.numeroDeDias == 6) {
      this.rutas = listaDeSeisDias;
    } else if (this.$store.state.numeroDeDias == 7) {
      this.rutas = listaDeSieteDias;
    } else if (this.$store.state.numeroDeDias == 8) {
      this.rutas = listaDeOchoDias;
    } else if (this.$store.state.numeroDeDias == 9) {
      this.rutas = listaDeNueveDias;
    } else if (this.$store.state.numeroDeDias == 10) {
      this.rutas = listaDeDiezDias;
    } else if (this.$store.state.numeroDeDias == 11) {
      this.rutas = listaDeOnceDias;
    }
  },

  components: {
    toolbar,
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

.dialoga {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
}
</style>



