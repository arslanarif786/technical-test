<template>
    <div class="fixed-top">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"
          ><span class="ml-5 orange--text">BINANCE</span></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content><v-icon color="white">fas fa-list</v-icon></template>
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
</template>