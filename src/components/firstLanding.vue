<template>
  <div>
    <toolbar/>
    <div class="wrapper">
      <div class="wholeMap">
      </div>
      <div class="inicioAventura">
        <!--/////////Preguntas de Rigor////////-->
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent max-width="290">
            <v-btn
              slot="activator"
              color="orange darken-2"
              large
              dark
              class="botonAventura white--text"
            >BEGIN YOUR ADVENTURE</v-btn>
            <v-card color="grey  lighten-5">
              <v-card-title class="headline justify-center">Course Direction</v-card-title>
              <v-card-text>The Tour of MontBlanc can be done in a clockwise or anti-clockwise direction. Being the second option the prefered one.</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange darken-1" flat @click="cuantosDias('clockWise')">ClockWise</v-btn>
                <v-btn color="orange darken-1" flat @click="cuantosDias('antiClockWise')">Anti-ClockWise</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>

        <v-layout row justify-center>
          <v-dialog v-model="dias" persistent max-width="290">
            <v-card color="grey  lighten-5">
              <v-card-title class="headline justify-center">How many Days</v-card-title>
              <div class="numberOfDays">
                <div class="añadir" v-on:click="añadir()">
                  <p>+</p>
                </div>

                <div class="cuadradoInterior">
                  <div class="decenas">
                    <ul>
                      <li>{{decenasDeRecorridoShow}}</li>
                    </ul>
                  </div>
                  <div class="unidades">
                    <ul>
                      <li>{{unidadesDeRecorrido}}</li>
                    </ul>
                  </div>
                </div>

                <div class="restar" v-on:click="restar()">
                  <p>-</p>
                </div>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange darken-1" flat @click="submitiendo()">Submit</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </div>

    </div>
  </div>
</template>

<script>
import toolbar from "./toolbar.vue";
export default {
  data() {
    return {
      dialog: false,
      dias: false,
      unidadesDeRecorrido: 0,
      decenasDeRecorrido: 0,
      decenasDeRecorridoShow: 0,
      forecast: {
        0: {
          nombreDia: "Today",
          iconoTiempo: "wb_sunny",
          temperatura: "18/16Cº",
          porcentajeLluvia: "15%",
        },
        1: {
          nombreDia: "Tue",
          iconoTiempo: "cloud",
          temperatura: "12/6Cº",
          porcentajeLluvia: "43%",
        },
        2: {
          nombreDia: "Wed",
          iconoTiempo: "wb_sunny",
          temperatura: "18/16Cº",
          porcentajeLluvia: "10%",
        },
        3: {
          nombreDia: "Thu",
          iconoTiempo: "cloud",
          temperatura: "15/10Cº",
          porcentajeLluvia: "70%",
        },
        4: {
          nombreDia: "Fri",
          iconoTiempo: "wb_sunny",
          temperatura: "18/16Cº",
          porcentajeLluvia: "24%",
        },
      }
    };
  },
  methods: {
    cuantosDias(event) {
      this.dialog = false;
      this.dias = true;
      console.log(event);
    },
    submitiendo() {
      let sumaDeDias = this.decenasDeRecorrido + this.unidadesDeRecorrido;
      this.$store.state.numeroDeDias = sumaDeDias;
      this.$router.push("/programacion");
    },
    añadir() {
      if (this.unidadesDeRecorrido < 9) {
        this.unidadesDeRecorrido += 1;
      } else {
        if (this.decenasDeRecorrido < 10) {
          this.decenasDeRecorrido += 10;
          this.decenasDeRecorridoShow += 1;
          this.unidadesDeRecorrido = 0;
        } else {
          return;
        }
      }
    },
    restar() {
      if (
        (this.unidadesDeRecorrido == 0) &
        (this.decenasDeRecorridoShow == 0)
      ) {
        return;
      } else if (this.unidadesDeRecorrido == 0) {
        this.decenasDeRecorrido -= 10;
        this.unidadesDeRecorrido = 9;
        this.decenasDeRecorridoShow = 0;
      } else {
        this.unidadesDeRecorrido -= 1;
      }
    }
  },
  components: {
    toolbar
  }
};
</script>




<style>
.wrapper {
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr 0.7fr 1.5fr;
  background-image: url("../assets/fotos/landingBackground.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80% 50%;
}

.inicioAventura {
  text-align: center;
  font-family: sans-serif;
}

.botonAventura {
  margin-top: 1.5rem;
  letter-spacing: 1px;
}

.numberOfDays {
  height: 8rem;
}

.cuadradoInterior {
  background-color: #303030;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5rem;
  width: 10rem;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.cuadradoInterior ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.cuadradoInterior li {
  font-size: 3rem;
  color: #fb8c00;
  margin: 1rem;
}

.unidades {
  border-left: 1px solid whitesmoke;
  overflow: auto;
  overflow: hidden;
}

.decenas {
  overflow: auto;
  overflow: hidden;
}

.restar {
  position: absolute;
  top: 38%;
  left: 10%;
  font-size: 2rem;
  padding: 1rem;
}

.añadir {
  position: absolute;
  top: 39%;
  left: 76%;
  font-size: 2rem;
  padding: 1rem;
}

</style>

