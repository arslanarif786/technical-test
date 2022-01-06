
<template>
  <section>
    <h1>Terms and conditions</h1>
    <v-divider class="my-5"></v-divider>
    <ul>
      <li>
        Lorem ipsum dolor, cum ab culpa exercitationem porro. Nostrum similique
        aliquid obcaecati qui iste tempora.
      </li>
      <li>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor vitae
        recusandae, cum ab culpa exercitationem porro, Nostrum similique.
      </li>
      <li>
        Aliquid obcaecati qui iste tempora, velit quae repudiandae ratione nemo.
      </li>
      <li>
        Aliquid obcaecati qui iste tempora, velit quae repudiandae ratione nemo,
        Dolor vitae.
      </li>
    </ul>
    <h2 class="mt-8">Return Policy:</h2>
    <ul>
      <li>Lorem ipsum dolor, cum ab culpa exercitationem porro, recusandae.</li>
      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
      <li>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor vitae
        recusandae, sit amet consectetur adipisicing elit. Dolor vitae
        recusandae, sit amet consectetur adipisicing elit.
      </li>
      <li>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor vitae
        recusandae, cum ab culpa exercitationem porro, Nostrum similique.
      </li>
      <li>
        Aliquid obcaecati qui iste tempora, velit quae repudiandae ratione nemo.
      </li>
    </ul>
    <v-checkbox
      color="#fcd535"
      v-model="checkbox1"
      label="Agree to Terms and Conditions"
    ></v-checkbox>
  </section>
</template>
<script>
export default {
  name: "KYCPolicies",
  data() {
    return {
      checkbox1: false,
    };
  },
};
</script>