<template>
  <div class="home">

    <!-------------       Nav starts from here      ------------>
    <MainHeader />
    <!------------         Nav End         ----------------->
    <v-spacer></v-spacer>
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

      <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
        Welcome to Fund Account Section
      </b-alert>
      <b-button
        dense
        @click="showDismissibleAlert = true"
        variant="warning"
        class="m-1"
      >
        Fund Account
        <!-- Fund Account ({{ showDismissibleAlert ? "visible" : "hidden" }}) -->
      </b-button>
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
      <br />
      <br />
      <br />
      <p>
        Binance to Acquire Outstanding shares in Swipe 12-30
        <span class="orange--text"> More ></span>
      </p>
      <p>
        Special Notice About Binance.com in Singapore
        <span class="orange--text"> More </span>
      </p>
      <p>
        Special Notes About Binance Markets Limited
        <span class="orange--text"> More </span>
      </p>
    </v-container>
    <!------------         Fund Account Section END         ----------------->


    <!------------         Market Trend Section         ----------------->
    <v-container>
      <MarketTrend />
    </v-container>
    <!------------         Market Trend END         ----------------->
    <br />


    <!------------         Router Links Section          ----------------->
    <v-container>
      <router-link to="/paymentmethod">
        <v-btn class="mr-10"> Payment Method for Trading </v-btn>
      </router-link>
      <router-link to="/convertotcportal">
        <v-btn class="mr-10"> Convert & OTC Portal </v-btn>
      </router-link>
      <router-link to="/kyc-verification">
        <v-btn> KYC Verification </v-btn>
      </router-link>
    </v-container>
    <!------------         Router Links Section End           ----------------->


    <!------------         Trade Anywhere Section         ----------------->
    <v-container>
      <TradeSection />
    </v-container>
    <!------------         Trade Anywhere END         ----------------->


    <Footer />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Footer from "@/components/Footer.vue";
import TradeSection from "@/components/TradeSection.vue";
import MarketTrend from "@/components/MarketTrend.vue";
export default {
  data() {
    return {
      showDismissibleAlert: false,
    };
  },
  components: {
    MainHeader,
    Footer,
    TradeSection,
    MarketTrend,
  },
};
</script>
