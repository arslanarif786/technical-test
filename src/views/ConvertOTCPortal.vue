<template>
  <div>
    <!-------------       Nav starts from here      ------------>
    <MainHeader/>
    <!------------         Nav End         ----------------->

    <!-------------       bg-image      ------------>
    <v-img class="box" src="@/assets/binance.png" cover></v-img>


    <!------------         Main Container         ----------------->
    <v-container>
      <div>
        <h1 class="text-left">Convert & OTC Portal</h1>
        <p class="text-left">
          Trade Bitcoin, BND and other cryptocurrencies easily in one go
        </p>
      </div>

      <v-row class="text-center">
        <v-col cols="12" class="mx-auto" lg="5" xl="5" md="6" sm="8" xs="12">
          <br />

          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              prepend-inner-icon="fas fa-dollar-sign"
              label="From"
              placeholder="Please enter 20-2500000"
              type="number"
              v-model="dollar"
              filled
              clearable
              required
            ></v-text-field>

            <i class="fas fa-exchange-alt"></i>

            <v-text-field
              prepend-inner-icon="fab fa-bitcoin"
              label="To"
              type="number"
              v-model="bitcoin"
              filled
              clearable
              required
            ></v-text-field>
            <br />

            <v-btn block depressed color="orange" @click.prevent="">
              Enter an Amount
            </v-btn>

            <br />
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <!------------         Main Container END         ----------------->
  </div>
</template>


<script>
import MainHeader from '@/components/MainHeader.vue'
export default {
  name: "ConvertOTCPortal",
  data() {
    return {
      //////////////////////*        Data properties for storing data         */////////////////////
      dollar: "",
      bitcoin: "",
    };
  },
  components: {
    MainHeader
  },
  methods: {},
};
</script>


<style scoped>
.box {
  height: 30vh;
  overflow: hidden;
}
</style>