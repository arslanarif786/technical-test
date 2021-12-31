<template>
  <div>
    <v-app>
    <!--Nav starts from here -->
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
             <router-link to="/login">
                <div class="text-left black--text text-decoration-none"> <strong> Login </strong></div>
              </router-link> 
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>

    <!------------         Header End         ----------------->

    
      <v-container>
        <br>
        <v-row class="text-center">
          <v-col cols="5" class="mx-auto">
            <div>
              <h1 class="text-left">Binance Account Sign Up</h1>
              <p class="text-left"> Welcome! Register with New Account </p>
            </div>
            

            <v-form ref="form" v-model="valid" lazy-validation>
                
                <v-text-field
                 prepend-inner-icon="mdi-account"
                 placeholder="Name must be less than 30 characters"
                 type="text"
                 v-model="name"
                 label="Name"
                 filled
                 clearable
                  required
                ></v-text-field>
                
              <v-text-field
              prepend-inner-icon="mdi-account"
                label="Email"
                type="email"
                v-model="email"
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
                v-model="password"
              ></v-text-field>
            
            <v-text-field
                 prepend-inner-icon="mdi-account"
                 placeholder="age must be in digits"
                 type="text"
                 v-model="age"
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
          <v-col cols="4" class="pl-15">
            <br><br><br><br>
            <v-img src="@/assets/binance.png" class="rounded mx-auto d-block" width=180px height=180px> </v-img>
            <br>
            <p class="text-justify"> <span class="orange--text"> Binance </span> is <strong> an online exchange </strong> where users can trade cryptocurrencies. It supports most commonly traded cryptocurrencies. Binance provides a crypto wallet for traders to store their electronic funds. Binance has its own blockchain-based token, Binance Coin <span class="orange--text"> (BNB). </span> </p>
          </v-col>
        </v-row>
      </v-container>
    
  </v-app>
      
  </div>
</template>

<script>
//import HelloWorld from "../components/HelloWorld";

export default {
  name: "Signup",
  data() {
    return {
      valid: true,
      userdata: {
        name:"",
        email: "",
        password: "",
        age:""
      },
      newUser: [],
      show1: false,
    };
  },
  components: {
    // HelloWorld,
  },
};
</script>
