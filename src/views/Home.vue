<template>
  <v-container fluid>
    <div class="home d-flex flex-column justify-center align-center mt-8">
      <v-btn color="primary" large @click="showModal = !showModal">
        Создать график
      </v-btn>
      <div class="mt-6">
        <ChartList :chart-list="chartList" />
      </div>
      <VModal :show="showModal" @create="createChart" />
    </div>
  </v-container>
</template>

<script>
import ChartList from "@/components/ChartList.vue";
import VModal from "@/components/VModal.vue";
export default {
  name: "Home",
  components: {
    ChartList,
    VModal,
  },
  data() {
    return {
      showModal: false,
      chartList: [],
    };
  },
  methods: {
    createChart(val) {
      this.chartList.push(val);
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.create-btn {
  background: rgb(34, 34, 245);
  width: 180px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
}
</style>
