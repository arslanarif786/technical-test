<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      ></v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Last Price", value: "lastprice" },
        { text: "24h Change", value: "avgChange" },
        { text: "Markets", value: "trend" },
      ],
      desserts: [
        {
          name: "BNB BNB",
          lastprice: "$516.45",
          trend: "increasing",
          avgChange: "+0.35%",
        },
        {
          name: "BTC Bitcoin",
          lastprice: "$47,331.06",
          trend: "slow",
          avgChange: "+1.45%",
        },
        {
          name: "ETM Ethereum",
          lastprice: "$3,745.17",
          trend: "slow",
          avgChange: "+2.26%",
        },
        {
          name: "LUNA Terra",
          lastprice: "$86.66",
          trend: "increasing",
          avgChange: "+4.98%",
        },
        {
          name: "MATIC Polygon",
          lastprice: "$2.52",
          trend: "increasing",
          avgChange: "+3.37%",
        },
        {
          name: "SHIB SHIBA INU",
          lastprice: "$0.000034",
          trend: "slow",
          avgChange: "+1.49%",
        },
        {
          name: "SOL Solana",
          lastprice: "$170.99",
          trend: "slow",
          avgChange: "+0.22%",
        },
        {
          name: "ROSE Oasis Network",
          lastprice: "$0.400160",
          trend: "increasing",
          avgChange: "+2.78%",
        },
      ],
    };
  },
};
</script>