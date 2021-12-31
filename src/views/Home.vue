<template>
  <div class="home">
    <!-------------       Nav starts from here      ------------>
    <v-app-bar app>
      <v-toolbar-title>
        <span class="orange--text"> BINANCE</span>
        <span class="pl-5"> Selector </span>
        <span class="pl-3"> Buy Crypto </span>
        <span class="pl-3"> Markets </span>
        <span class="pl-3"> Trade </span>
        <span class="pl-3"> Derivatives </span>
        <span class="pl-3"> Earn </span>
        <span class="pl-3"> Finance </span>
        <span class="pl-3"> NFT New </span>

        <span class="pl-16 ml-16"> Wallet </span>
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

    <br />
    <br />
    <br />

    <!------------         Fund Account Section         ----------------->
    <v-container>
      <br />
      <v-row class="text-center">
        <v-col cols="12" class="mx-auto">
          <div>
            <h1 class="text-left">Fund your Account</h1>
            <p class="text-left">
              Add Cash or crypto funds to your wallet and start trading right
              away
            </p>
          </div>
        </v-col>
      </v-row>
      <v-btn depressed color="yellow" @click.prevent="logIn">
        Fund Account
      </v-btn>
    </v-container>

    <v-container>
      <br />
      <v-row class="text-center">
        <v-col cols="2">
          <p class="text-left">
            SHIB/BUSD<span class="green--text">+1.49%</span>
          </p>
          <h3 class="text-left">0.00003401</h3>
          <p class="text-left">$0.00003401</p>
        </v-col>
        <v-col cols="2" class="mx-auto">
          <p class="text-left">
            SXP/BUSD<span class="green--text">+33.25%</span>
          </p>
          <h3 class="text-left">2.084</h3>
          <p class="text-left">$2.084</p>
        </v-col>
        <v-col cols="2">
          <p class="text-left">
            ADA/BUSD<span class="green--text">+1.44%</span>
          </p>
          <h3 class="text-left">1.338</h3>
          <p class="text-left">$1.34</p>
        </v-col>
        <v-col cols="2" class="mx-auto">
          <p class="text-left">
            DOT/BUSD<span class="green--text">+0.60%</span>
          </p>
          <h3 class="text-left">26.93</h3>
          <p class="text-left">$26.93</p>
        </v-col>
        <v-col cols="2" class="mx-auto">
          <p class="text-left">
            SOL/BUSD<span class="green--text">+0.16%</span>
          </p>
          <h3 class="text-left">170.91</h3>
          <p class="text-left">$170.89</p>
        </v-col>

      </v-row>
      <br> <br> <br>
      <p> Binance to Acquire Outstanding shares in Swipe 12-30 More > </p>
        <p> Special Notice About Binance.com in Singapore <span class="orange--text"> More </span> </p>
        <p> Special Notes About Binance Markets Limited <span class="orange--text"> More </span> </p>
    </v-container>        
      <!------------         Fund Account Section END         ----------------->


    <!------------         Market Trend         ----------------->


    <!------------         Market Trend END         ----------------->



    <!------------         Trade Anywhere Section         ----------------->
    <v-container>
      <br />
      <v-row class="text-center">
        <v-col cols="6" class="mx-auto">
          <div>
            <h1 class="text-left">Trade Anywhere</h1>
            <p class="text-left">
              Compatible with multiple devices, start trading with safety convenience.
            </p>
            <v-img
              src="@/assets/tradingMobile.png"
              class="rounded mx-auto d-block"
              width="600px"
              height="500px"
              contain
            >
            </v-img>
          </div>
        </v-col>
        <v-col cols="6" class="mx-auto">
          <div>
            <h1 class="text-left">Trade Anywhere</h1>
            <p class="text-left">
              Compatible with multiple devices, start trading with safety convenience.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!------------         Trade Anywhere END         ----------------->



  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
