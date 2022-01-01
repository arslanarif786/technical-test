<template>
  <div>
    <v-app>
      <!-------------       Nav starts from here      ------------>
      <v-app-bar app color="light-grey" dark>
        <v-toolbar-title>
          <span class="orange--text"> BINANCE</span>
          <span class="pl-5"> Dropdown </span>
          <span class="pl-3"> Buy Crypto </span>
          <span class="pl-3"> Markets </span>
          <span class="pl-3"> Trade </span>
          <span class="pl-3"> Derivatives </span>
          <span class="pl-3"> Earn </span>
          <span class="pl-3"> Finance </span>
          <span class="pl-3"> NFT New </span>

          <span class="pl-14 ml-14"> Wallet </span>
          <span class="pl-3"> Orders </span>
          <span class="pl-3"> Bell </span>
          <span class="pl-3"> Downloads </span>
          <span class="pl-3"> English </span>
          <span class="pl-3 pr-3"> USD </span>
          <v-btn color="grey">
            <v-icon> mdi-account </v-icon>
          </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-app-bar>
      <!------------         Nav End         ----------------->


      <!------------         Container         ----------------->
      <v-container>
        <br /><br />
        <div>
          <h1 class="text-left">Convert & OTC Portal</h1>
          <p class="text-left">
            Trade Bitcoin, BND and other cryptocurrencies easily in one go
          </p>
        </div>

        <v-row class="text-center">
          <v-col cols="5" class="mx-auto">
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
      <!------------         Container END         ----------------->

    </v-app>
  </div>
</template>


<script>
export default {
  name: "ConvertOTCPortal",
  data() {
    return {
      //////////////////////*        Data properties for storing data         */////////////////////
      dollar:"",
      bitcoin:"",
    };
  },
  components: {},
  methods: {},
};
</script>