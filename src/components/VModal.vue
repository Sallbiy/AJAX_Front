<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="600px">
      <v-card>
        <v-card-title> Create chart </v-card-title>
        <v-card-text>
          <v-select
            v-model="selectedChart"
            label="Выберите тип графика"
            :items="['Pie']"
          />
          <v-select
            v-model="selectedData"
            label="Выберите источник данных"
            :items="dataUrl"
            item-text="name"
            item-value="url"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="create">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
  },
  data() {
    return {
      selectedChart: null,
      selectedData: null,
      dataUrl: [
        {
          name: "data",
          url: "/v3/2699115b-8ced-40c3-8072-b7fa9faf6047",
        },
      ],
      chart: null,
    };
  },
  methods: {
    async create() {
      await this.axios
        .get(this.selectedData)
        .then((response) => (this.chart = response.data));
      this.selectedChart = null;
      this.selectedData = null;
      this.$emit("create", this.chart);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
