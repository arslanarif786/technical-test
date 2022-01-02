<template>
  <div class="home">
    <!-------------       Nav starts from here      ------------>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"
          ><span class="ml-5 orange--text">BINANCE</span></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content> Dropdown </template>
              <b-dropdown-item href="#">List 1</b-dropdown-item>
              <b-dropdown-item href="#">List 2</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content> BuyCrypto </template>
              <b-dropdown-item href="#">EURO</b-dropdown-item>
              <b-dropdown-item href="#">USD</b-dropdown-item>
              <b-dropdown-item href="#">BTC</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">Markets</b-nav-item>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content> Trade </template>
              <b-dropdown-item href="#">Sessional</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content> Derivatives </template>
              <b-dropdown-item href="#">Normal</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content> Earn </template>
              <b-dropdown-item href="#">EURO</b-dropdown-item>
              <b-dropdown-item href="#">USD</b-dropdown-item>
              <b-dropdown-item href="#">BTC</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content> Finance </template>
              <b-dropdown-item href="#">Personal</b-dropdown-item>
              <b-dropdown-item href="#">Departmental</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">NFT New</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Wallet" right>
              <b-dropdown-item href="#">Cash</b-dropdown-item>
              <b-dropdown-item href="#">Credit Card</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Orders</em>
              </template>
              <b-dropdown-item href="#">Clothes</b-dropdown-item>
              <b-dropdown-item href="#">Food</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item><v-icon color="white" class="mr-2"> mdi-account </v-icon></b-nav-item>
            <b-nav-item><v-icon color="white" class="mr-2"> mdi-bell </v-icon></b-nav-item>
            <b-nav-item href="#">Downloads</b-nav-item>
            <b-nav-item href="#">English</b-nav-item>
            <b-nav-item>|</b-nav-item>
            <b-nav-item href="#">USD</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <v-spacer></v-spacer>
    <!------------         Nav End         ----------------->
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
      <p>Binance to Acquire Outstanding shares in Swipe 12-30
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
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      ></v-data-table>
    </v-container>
    <!------------         Market Trend END         ----------------->
    <br />

    <!------------         Router Links Section          ----------------->
    <v-container>
      <router-link to="/paymentmethod">
        <v-btn class="mr-10"> Payment Method for Trading </v-btn>
      </router-link>
      <router-link to="/convertotcportal">
        <v-btn> Convert & OTC Portal </v-btn>
      </router-link>
    </v-container>
    <!------------         Router Links Section End           ----------------->

    <v-container> </v-container>

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
          <br />
          <div class="parent">
            <h4 class="item1 pl-14">
              <strong> <i class="fab fa-apple"></i> App store </strong>
            </h4>
            <h4 class="item2 pl-14">
              <strong> <i class="fab fa-android"></i> Android APK </strong>
            </h4>
            <h4 class="item3 pl-14">
              <strong> <i class="fab fa-google-play"></i> Google Play </strong>
            </h4>
            <h4 class="item4 pl-14">
              <strong> <i class="fab fa-apple"></i> MacOS </strong>
            </h4>
            <h4 class="item5 pl-14">
              <strong> <i class="fab fa-windows"></i> Windows </strong>
            </h4>
            <h4 class="item6 pl-14">
              <strong> <i class="fab fa-linux"></i> Linux </strong>
            </h4>
            <h4 class="item7 pl-14">
              <strong> <i class="fas fa-plug"></i> API </strong>
            </h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!------------         Trade Anywhere END         ----------------->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDismissibleAlert: false,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Last Price", value: "lastprice" },
        { text: "24h Change", value: "avgChange" },
        { text: "Markets", value: "trend" },
      ],
      desserts: [
        {
          name: "BNB BNB",
          lastprice: "$516.45",
          trend: "increasing",
          avgChange: "+0.35%",
        },
        {
          name: "BTC Bitcoin",
          lastprice: "$47,331.06",
          trend: "slow",
          avgChange: "+1.45%",
        },
        {
          name: "ETM Ethereum",
          lastprice: "$3,745.17",
          trend: "slow",
          avgChange: "+2.26%",
        },
        {
          name: "LUNA Terra",
          lastprice: "$86.66",
          trend: "increasing",
          avgChange: "+4.98%",
        },
        {
          name: "MATIC Polygon",
          lastprice: "$2.52",
          trend: "increasing",
          avgChange: "+3.37%",
        },
        {
          name: "SHIB SHIBA INU",
          lastprice: "$0.000034",
          trend: "slow",
          avgChange: "+1.49%",
        },
        {
          name: "SOL Solana",
          lastprice: "$170.99",
          trend: "slow",
          avgChange: "+0.22%",
        },
        {
          name: "ROSE Oasis Network",
          lastprice: "$0.400160",
          trend: "increasing",
          avgChange: "+2.78%",
        },
      ],
    };
  },
};
</script>


<style scoped>
.heads {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.parent {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>