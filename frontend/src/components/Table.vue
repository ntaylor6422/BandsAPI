<template>
  <v-container fluid grid-list-md>
    <v-btn
      absolute
      right
      color="blue darken-3"
      class="white--text"
      @click="addBand"
    >
      Add Band</v-btn
    >
    <v-data-table v-bind:headers="headers" :items="allBands" hide-actions>
      <template slot="items" slot-scope="props" @click="editBand">
        <td>{{ props }}</td>
        <td>{{ props }}</td>
      </template>
    </v-data-table>

    <!-- <v-simple-table>
      <table>
        <thead>
          <tr>
            <th>Band</th>
            <th>Date Formed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="band in allBands" :key="band.name">
            <td>{{ band.name }}</td>
            <td>{{ new Date(band.dateFormed).getFullYear() }}</td>
          </tr>
        </tbody>
      </table>
    </v-simple-table> -->
  </v-container>
</template>

<script>
export default {
  name: "Table",
  props: ["allBands"],
  data: () => ({
    headers: [
      { text: "Band Name", value: "name" },
      { text: "Date Formed", value: "dateFormed" },
    ],
  }),
  methods: {
    parseDate: (date) => {
      const newDate = new Date(date);
      return newDate.getFullYear();
    },
    addBand: () => {
      this.$emit("addBand");
    },
    editBand: () => {
      this.$emit("editBand");
    },
  },
};
</script>

<style scoped>
.addBtn {
  color: white;
}
</style>
