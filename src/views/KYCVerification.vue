<template>
  <div>

      <MainHeader/>
    <v-stepper class="mt-15" v-model="e1">
      <v-stepper-header>
        <v-stepper-step color="#fcd535" :complete="e1 > 1" step="1">
          KYC Policies
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="#fcd535" :complete="e1 > 2" step="2">
          Identity Document
        </v-stepper-step>

        <v-divider></v-divider>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <KYCPolicies />
          <v-btn color="#fcd535" @click="e1 = 2"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <IdentityDocument />
          <v-btn color="#fcd535" @click="e1 = 1"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import KYCPolicies from "@/components/KYCPolicies.vue";
import IdentityDocument from "@/components/IdentityDocument.vue";
export default {
  data() {
    return {
      e1: 1,
    };
  },
  components: {
    MainHeader,
    KYCPolicies,
    IdentityDocument,
  },
};
</script>