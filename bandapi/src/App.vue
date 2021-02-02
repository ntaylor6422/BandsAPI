<template>
  <div>{{ allBands }}</div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    currentBand: "",
    allBands: [],
    fetchURL: "http://localhost:5000",
  }),
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
      this.allBands = await fetchReq.json();
    },
  },
  created: function() {
    this.fetchAllBands();
  },
};
</script>
