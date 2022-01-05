<template>
    <div>
        <v-app-bar app>
        <v-toolbar-title>
          <span class="orange--text"> BINANCE</span>
        </v-toolbar-title>
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
              <router-link to="/">
                <div class="text-left black--text text-decoration-none">
                  <strong> Login </strong>
                </div>
              </router-link>
            </v-btn>
          </template>
        </v-menu>
      </v-app-bar>
    </div>
</template>