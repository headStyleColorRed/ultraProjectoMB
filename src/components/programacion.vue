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
        <v-btn color="orange darken-1">
          <v-icon>check</v-icon>
        </v-btn>
      </div>
    </div>

    <div v-for="(ruta, index) in rutas" :key="index" class="DiaThumbnail">
      <h2>Day {{index + 1}}</h2>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card flat>
            <v-list class="card">
              <v-list-tile v-for="(item, n) in rutas[index]" :key="n">
                <v-list-tile-action>
                  <v-icon
                    v-on:click="siguienteDia(item, index,ruta, n)"
                    v-if="edicion"
                    color="orange darken-1"
                  >add</v-icon>
                  <v-icon v-else>lock</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{item.title}}-{{item.kilometer}}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon v-on:click="anteriorDia()" v-if="edicion" color="orange darken-1">remove</v-icon>
                  <v-icon v-else>lock</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="loaderShow" class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import toolbar from "./toolbar.vue";
import listaRutas from "../assets/programacionRutas.json";

export default {
  data() {
    return {
      loaderShow: true,
      edicion: false,
      dialog: false,
      whichday: true,
      rutaEscogida: "",
      rutas: ""
    };
  },

  mounted() {
    this.fetchRutasData();
  },

  methods: {
    editar() {
      this.edicion = !this.edicion;
    },
    siguienteDia(item, index, ruta, n) {
      console.log(`Cambiar ruta ${item.title} to day ${index + 2}`);
    },
    fetchRutasData() {
      this.$http
        .get("https://montblanc-8eb85.firebaseio.com/rutas.json")
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.Cuaderno = resultArray[0];
          this.loaderShow = false;

          this.numeroDeDias = this.$store.state.numeroDeDias;
          if (this.$store.state.numeroDeDias == 4) {
            this.rutas = resultArray[0].cuatroDias;
          } else if (this.$store.state.numeroDeDias == 5) {
            this.rutas = resultArray[0].cincoDias;
          } else if (this.$store.state.numeroDeDias == 6) {
            this.rutas = resultArray[0].seisDias;
          } else if (this.$store.state.numeroDeDias == 7) {
            this.rutas = resultArray[0].sieteDias;
          } else if (this.$store.state.numeroDeDias == 8) {
            this.rutas = resultArray[0].ochoDias;
          } else if (this.$store.state.numeroDeDias == 9) {
            this.rutas = resultArray[0].nueveDias;
          } else if (this.$store.state.numeroDeDias == 10) {
            this.rutas = resultArray[0].diezDias;
          } else if (this.$store.state.numeroDeDias == 11) {
            this.rutas = resultArray[0].onceDias;
          }
        });
    }
  },

  components: {
    toolbar
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
  margin-top: 5rem;
  color: whitesmoke;
  font-family: sans-serif;
  border-bottom: 1px solid whitesmoke;
}

.explicacion h3 {
  text-align: center;
}

.explicacion li{
  padding-right: 1rem;
  margin-bottom: 5px;
}
.botones {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem 0;
}


.lds-ripple {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #ed7d3a;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>



