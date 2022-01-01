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

        <h1 class="text-left">Deposit Fiat</h1>
        <br />

        <v-row>
          <v-col cols="5" class="mx-auto">
            <h5 class="text-left">1. Select Currency</h5>

            <br />

            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-inner-icon="fas fa-euro-sign"
                label="Euro"
                placeholder="Currency to Deposit"
                type="number"
                v-model="euro"
                filled
                clearable
                required
              ></v-text-field>

              <p class="text-left">Pay With</p>
              <v-btn class="text-left"> Recommended </v-btn>
              <br />
              <br />

              <input type="radio" name="payment1" value="payment1" />
              <label class="ml-2"> <strong> Bank Card(Visa MC) </strong> </label
              ><br />
              <span class="ml-8"> 1.8% Fee</span>
              <br /><br />
              <input type="radio" name="payment2" value="payment2" />
              <label class="ml-2">
                <strong> AdvCash Account Balance </strong> </label
              ><br />
              <span class="ml-8"> 0 Fee</span>
              <span class="orange--text"> Supports SEPA transfer </span>
              <br /><br />
              <input type="radio" name="payment3" value="payment3" />
              <label class="ml-2"> <strong> P2P Express </strong> </label><br />
              <span class="ml-8"> 0 Fee</span>

              <br /><br />

              <v-btn block depressed color="orange" @click.prevent="">
                Continue
              </v-btn>

              <br />
            </v-form>
          </v-col>

          <v-col cols="5" class="mx-auto">
            <br /><br />
            <span class="ml-8 orange--text"> Didn't Recieve deposit?</span>
            <br /><br />
            <p class="ml-8">
              <strong> FAQ </strong>
              <span class="ml-16"> <v-btn> View More FAQ --> </v-btn> </span>
            </p>
            <br /><br />
            <p class="ml-8">
              How to deposit fiat via Credit/Debit Card?
              <i class="fas fa-chevron-down"></i>
            </p>
            <p class="ml-8">
              How long does the debit take? <i class="fas fa-chevron-down"></i>
            </p>
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
      euro: "",
    };
  },
  components: {},
  methods: {},
};
</script>