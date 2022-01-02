<template>
  <div>
    <v-app>

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
              <b-nav-item
                ><v-icon color="white" class="mr-2">
                  mdi-account
                </v-icon></b-nav-item
              >
              <b-nav-item
                ><v-icon color="white" class="mr-2">
                  mdi-bell
                </v-icon></b-nav-item
              >
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


      <!------------         Container         ----------------->
      <v-container>
        <br /><br />

        <h1 class="text-left">Deposit Fiat</h1>
        <br />

        <v-row>
          <v-col cols="12" class="mx-auto" lg="5" xl="5" md="6" sm="8" xs="12">
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

          <v-col cols="12" class="mx-auto" lg="5" xl="5" md="6" sm="8" xs="12">
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