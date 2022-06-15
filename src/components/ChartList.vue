<template>
  <v-container>
    <div v-for="item in chartList" :key="item.id">
      <DxPieChart
        id="pie"
        :data-source="item"
        palette="Bright"
        title="Default"
        @point-click="pointClickHandler($event)"
        @legend-click="legendClickHandler($event)"
      >
        <DxSeries argument-field="Группа" value-field="Доля">
          <DxLabel :visible="true">
            <DxConnector :visible="true" :width="1" />
          </DxLabel>
        </DxSeries>
        <DxSize :width="600" />
        <DxExport :enabled="true" />
      </DxPieChart>
    </div>
  </v-container>
</template>

<script>
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport,
} from "devextreme-vue/pie-chart";
export default {
  props: {
    chartList: { type: Array, default: () => [] },
  },
  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
    DxExport,
  },
  methods: {
    pointClickHandler(e) {
      this.toggleVisibility(e.target);
    },
    legendClickHandler(e) {
      const arg = e.target;
      const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

      this.toggleVisibility(item);
    },
    toggleVisibility(item) {
      item.isVisible() ? item.hide() : item.show();
    },
  },
};
</script>

<style lang="scss" scoped>
#pie {
  height: 550px;
}
#pie * {
  margin: 0 auto;
}
</style>
