<template>
  <v-app>
    <v-navigation-drawer app> </v-navigation-drawer>
    <v-app-bar app> </v-app-bar>
    <v-main>
      <Table
        v-bind:allBands="allBands"
        @addBand="addBand"
        @editBand="editBand"
      />
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Table from "./components/Table";
export default {
  name: "bandAPI",
  data: () => ({
    currentBand: "",
    allBands: [],
    fetchURL: "http://localhost:5000",
  }),
  components: {
    Table,
  },
  methods: {
    fetchAllBands: async function() {
      const query = `
        query {
          bands {
            id
            name
            dateFormed
          }
        }
      `;
      const fetchReq = await fetch(this.fetchURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const jsondBands = await fetchReq.json();
      this.allBands = jsondBands.data.bands;
    },
    addBand: () => {},
  },
  created: function() {
    this.fetchAllBands();
  },
};
</script>
