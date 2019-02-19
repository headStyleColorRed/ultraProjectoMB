<template>
  <div class="superwrapper">
    <toolbar/>

    <div class="explicacion">
      <h3>This is the plan I made for you!</h3>
      <ul>
        <li>If you want to change any day, click the
          <v-icon>lock</v-icon>to unlock the list. Use <v-icon>add</v-icon> or <v-icon>remove</v-icon> to change the position of the routes.
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
      <h2>Day {{parseInt(index) + 1}}</h2>
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
                  <v-icon
                    v-on:click="anteriorDia(item, index,ruta, n)"
                    v-if="edicion"
                    color="orange darken-1"
                  >remove</v-icon>
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
    this.numeroDeDias = this.$store.state.numeroDeDias;
    if (this.$store.state.numeroDeDias == 4) {
      this.rutas = listaRutas.rutas.cuatroDias;
    } else if (this.$store.state.numeroDeDias == 5) {
      this.rutas = listaRutas.rutas.cincoDias;
    } else if (this.$store.state.numeroDeDias == 6) {
      this.rutas = listaRutas.rutas.seisDias;
    } else if (this.$store.state.numeroDeDias == 7) {
      this.rutas = listaRutas.rutas.sieteDias;
    } else if (this.$store.state.numeroDeDias == 8) {
      this.rutas = listaRutas.rutas.ochoDias;
    } else if (this.$store.state.numeroDeDias == 9) {
      this.rutas = listaRutas.rutas.nueveDias;
    } else if (this.$store.state.numeroDeDias == 10) {
      this.rutas = listaRutas.rutas.diezDias;
    } else if (this.$store.state.numeroDeDias == 11) {
      this.rutas = listaRutas.rutas.onceDias;
    }

    this.loaderShow = false;
  },

  methods: {
    editar() {
      this.edicion = !this.edicion;
    },
    siguienteDia(item, index) {
      let elQueHayQueBorrar = item.key;
      let diaSiguiente = parseInt(index) + 1;
      let keysDeDiaNuevo = Object.keys(this.rutas[diaSiguiente]);

      if (elQueHayQueBorrar == keysDeDiaNuevo[0] - 1) {
        this.actualizandoSubidaDeDia(item, index);
      } else if (isNaN(keysDeDiaNuevo[0] - 1)) {
        this.actualizandoSubidaDeDia(item, index);
      } else {
        return;
      }
    },
    anteriorDia(item, index) {
      let elQueHayQueBorrar = item.key;
      let diaAnterior = parseInt(index) - 1;
      let countDeDiaAnterior = Object.keys(this.rutas[diaAnterior]).length - 1;
      let keysDeDiaAnterior = Object.keys(this.rutas[diaAnterior]);
      console.log(keysDeDiaAnterior[countDeDiaAnterior]);

      if (
        elQueHayQueBorrar ==
        parseInt(keysDeDiaAnterior[countDeDiaAnterior]) + 1
      ) {
        this.actualizandoBajadaDeDia(item, index);
      } else if (isNaN(parseInt(keysDeDiaAnterior[countDeDiaAnterior]) + 1)) {
        this.actualizandoBajadaDeDia(item, index);
      } else {
        return;
      }
    },
    actualizandoSubidaDeDia(item, index) {
      let elQueHayQueBorrar = item.key;
      let diaSiguienteParseando = parseInt(index);
      let diaSiguiente = diaSiguienteParseando + 1;
      let countDiaNuevo = Object.keys(this.rutas[diaSiguiente]).length;

      //Notificación
      console.log(
        `Cambiar ruta ${item.title} to day ${diaSiguienteParseando + 2}`
      );

      //Borrar el path antiguo
      delete this.rutas[index][elQueHayQueBorrar];
      this.$forceUpdate();

      //localizar objetivizar el objeto a borrar:
      let diaAmoverEnObjeto = new Object();
      diaAmoverEnObjeto.key = item.key;
      diaAmoverEnObjeto.kilometer = item.kilometer;
      diaAmoverEnObjeto.title = item.title;

      //Pusheando la ruta a cambiar al nuevo Día
      this.rutas[diaSiguiente][elQueHayQueBorrar] = diaAmoverEnObjeto;
    },
    actualizandoBajadaDeDia(item, index) {
      let elQueHayQueBorrar = item.key;
      let diaAnteriorParseando = parseInt(index);
      let diaAnterior = diaAnteriorParseando - 1;
      let countDiaNuevo = Object.keys(this.rutas[diaAnterior]);

      //Notificación
      console.log(`Cambiar ruta ${item.title} to day ${diaAnteriorParseando}`);

      //Borrar el path antiguo
      delete this.rutas[index][elQueHayQueBorrar];
      this.$forceUpdate();

      //localizar objetivizar el objeto a borrar:
      let diaAmoverEnObjeto = new Object();
      diaAmoverEnObjeto.key = item.key;
      diaAmoverEnObjeto.kilometer = item.kilometer;
      diaAmoverEnObjeto.title = item.title;

      //Pusheando la ruta a cambiar al nuevo Día
      this.rutas[diaAnterior][elQueHayQueBorrar] = diaAmoverEnObjeto;
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

.explicacion li {
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
