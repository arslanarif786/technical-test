<template>
  <div>
    <v-app>
      <!-------------       Nav starts from here      ------------>
      <Header/>
      <!------------         Nav End         ----------------->


        <!------------         Main Container         ----------------->
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" class="mx-auto" lg="5" xl="5" md="6" sm="8" xs="12">
            <div>
              <h1 class="text-left">Binance Account Sign Up</h1>
              <p class="text-left">Welcome! Register with New Account</p>
            </div>

            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-inner-icon="mdi-account"
                placeholder="Name must be less than 30 characters"
                type="text"
                v-model="userdata.name"
                :rules="nameRules"
                label="Name"
                filled
                clearable
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-account"
                label="Email"
                type="email"
                v-model="userdata.email"
                :rules="emailRules"
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
                :rules="passwordRules"
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-account"
                placeholder="age must be in digits"
                type="text"
                v-model="userdata.age"
                :rules="ageRules"
                label="Age"
                filled
                clearable
                required
              ></v-text-field>

              <v-btn block depressed color="orange" @click.prevent="logIn">
                Sign Up
              </v-btn>

              <br />
            </v-form>
          </v-col>
          <v-col cols="12" class="pl-15" lg="5" xl="5" md="6" sm="8" xs="12">
            <br /><br /><br /><br />
            <v-img
              src="@/assets/binance.png"
              class="rounded mx-auto d-block"
              width="180px"
              height="180px"
            >
            </v-img>
            <br />
            <p class="text-justify">
              <span class="orange--text"> Binance </span> is
              <strong> an online exchange </strong> where users can trade
              cryptocurrencies. It supports most commonly traded
              cryptocurrencies. Binance provides a crypto wallet for traders to
              store their electronic funds. Binance has its own blockchain-based
              token, Binance Coin <span class="orange--text"> (BNB). </span>
            </p>
          </v-col>
        </v-row>
      </v-container>
        <!------------         Container End         ----------------->

    </v-app>
  </div>
</template>

<script>
///////////////////*      Regex         */////////////////////////
import {
  emailRegex,
  nameRegex,
  ageRegex,
  passwordRegex,
} from "@/constants/constant.js";
import Header from '@/components/Header.vue'

export default {
  name: "Signup",
  data() {
    return {
      valid: true,
    ///////////////////*              Data properties for Regex                 */////////////////////////
      emailRules: emailRegex,
      nameRules: nameRegex,
      passwordRules: passwordRegex,
      ageRules: ageRegex,

      ////////////////////*         Data properties for storing data       */////////////
      userdata: {
        name: "",
        email: "",
        password: "",
        age: "",
      },
      newUser: [],
      show1: false,
    };
  },
  components: {
    Header
  },
  methods: {
    logIn() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
