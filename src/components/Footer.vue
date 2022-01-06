<template>
  <div>
    <div
      class="
        d-flex
        justify-content-end
        align-center
        black
        white--text
        py-2
        pr-5
      "
    >
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
      <h5><strong> Binance Copyrights @2021 </strong></h5>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
