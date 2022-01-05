<template>
  <div>
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
  </div>
</template>

<style scoped>
.parent {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>