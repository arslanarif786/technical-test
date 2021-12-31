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
        <br /><br />
        <v-row class="text-center">
          <v-col cols="5" class="mx-auto">
            <div>
              <h1 class="text-left">Binance Account Login</h1>
              <p class="text-left">
                Welcome back! Log In with your Email, Phone number or QR code
              </p>
              <v-btn class="mr-10"> Email </v-btn>
              <v-btn> Mobile </v-btn>
            </div>

            <br />

            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-inner-icon="mdi-account"
                label="Email"
                type="email"
                v-model="userdata.email"
                filled
                clearable
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-lock"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                label="Password"
                filled
                clearable
                v-model="userdata.password"
              ></v-text-field>
              <br />

              <v-btn block depressed color="orange" @click.prevent="home">
                Log In
              </v-btn>

              <br />

              <router-link to="/forgetpassword">
                <div class="text-left orange--text text-decoration-none">
                  <strong> Forgot Password? </strong>
                </div>
              </router-link>
              <router-link to="/signup">
                <div class="text-left orange--text text-decoration-none">
                  <strong> Register now </strong>
                </div>
              </router-link>
            </v-form>
          </v-col>
          <v-col cols="4" class="pl-15">
            <br /><br /><br /><br />
            <v-img
              src="@/assets/qr.png"
              class="rounded mx-auto d-block"
              width="180px"
              height="180px"
            >
            </v-img>
            <br />
            <p><strong> Log in with QR Code </strong></p>
            <p>
              Scan this code with the
              <span class="orange--text"> Binance mobile app</span> to log in
              instantly.
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
  name: "Login",
  data() {
    return {
      valid: true,

      //////////////////////*        Data properties for storing data         */////////////////////
      userdata: {
        email: "",
        password: "",
      },
      newUser: [],
      show1: false,
    };
  },
  components: {},
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
  }
};
</script>
