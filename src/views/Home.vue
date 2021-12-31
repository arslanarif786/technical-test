<template>
  <div class="home">
    <!-------------       Nav starts from here      ------------>
    <v-app-bar app>
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
      <br />
      <br />
      <br />
      <p>Binance to Acquire Outstanding shares in Swipe 12-30 More ></p>
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
    <v-data-table
      :headers="headers"
      :items="desserts"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    ></v-data-table>
  </v-container>
    <!------------         Market Trend END         ----------------->


    <!------------         Trade Anywhere Section         ----------------->
    <v-container>
      <br />
      <v-row class="text-center">
        <v-col cols="6" class="mx-auto">
          <div>
            <h1 class="text-left">Trade Anywhere</h1>
            <p class="text-left">
              Compatible with multiple devices, start trading with safety
              convenience.
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
        <v-col cols="6">
          <br />
          <br />
          <br />
          <v-img
            src="@/assets/qr.png"
            class="rounded mx-auto d-block"
            width="150px"
            height="150px"
          >
          </v-img>
          <br />
          <span class="text-left"> Scan to Download </span> <br />
          <span class="text-left">
            <strong> IOS & Android </strong>
          </span>

            <p></p>
            <br>
          <div class="parent">
            <h4 class="item1 pl-14"> <strong> <i class="fab fa-apple"></i> App store </strong> </h4>
            <h4 class="item2 pl-14"> <strong> <i class="fab fa-android"></i> Android APK </strong> </h4>
            <h4 class="item3 pl-14"> <strong> <i class="fab fa-google-play"></i> Google Play </strong> </h4>
            <h4 class="item4 pl-14"> <strong> <i class="fab fa-apple"></i> MacOS </strong> </h4>
            <h4 class="item5 pl-14"> <strong> <i class="fab fa-windows"></i> Windows </strong> </h4>
            <h4 class="item6 pl-14"> <strong> <i class="fab fa-linux"></i> Linux </strong> </h4>
            <h4 class="item7 pl-14"> <strong> <i class="fas fa-plug"></i>  API </strong> </h4>
          </div>

        </v-col>
      </v-row>
    </v-container>
    <!------------         Trade Anywhere END         ----------------->


  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Last Price', value: 'lastprice' },          
          { text: '24h Change', value: 'avgChange' },
          { text: 'Markets', value: 'trend' }
        ],
        desserts: [
          {
            name: 'BNB BNB',
            lastprice: '$516.45',
            trend: 'increasing',
            avgChange: '+0.35%',
          },
          {
            name: 'BTC Bitcoin',
            lastprice: '$47,331.06',
            trend: 'slow',
            avgChange: '+1.45%',
          },
          {
            name: 'ETM Ethereum',
            lastprice: '$3,745.17',
            trend: 'slow',
            avgChange: '+2.26%',
          },
          {
            name: 'LUNA Terra',
            lastprice: '$86.66',
            trend: 'increasing',
            avgChange: '+4.98%',
          },
          {
            name: 'MATIC Polygon',
            lastprice: '$2.52',
            trend: 'increasing',
            avgChange: '+3.37%',
          },
          {
            name: 'SHIB SHIBA INU',
            lastprice: '$0.000034',
            trend: 'slow',
            avgChange: '+1.49%',
          },
          {
            name: 'SOL Solana',
            lastprice: '$170.99',
            trend: 'slow',
            avgChange: '+0.22%',
          },
          {
            name: 'ROSE Oasis Network',
            lastprice: '$0.400160',
            trend: 'increasing',
            avgChange: '+2.78%',
          },
        ],
      }
    },
  }
</script>


<style scoped>
.heads{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.parent{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>