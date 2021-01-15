<template>
    <v-container class="container-bg">
        <v-row justify="center" wrap>
          <v-col cols="10" class="mt-4">
            <chart-ticker width="100%" height="450" type="bar" :options="optionsBar" :series="setDataChart"/>
          </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { stockModule } from '@/store/modules/stocks.module'
  import { namespace } from 'vuex-class';
  import VueApexCharts from 'vue-apexcharts';
  import BarChart from '@/json_config/BarChart.json'

  const stock = namespace('stock');

  @Component({
      components: {
        chartTicker: VueApexCharts
      }
  })

  export default class ChartTicker extends Vue {

    optionsBar:any = BarChart;

    mounted () {
      this.optionsBar = BarChart;
      stockModule.getDatChart();
      
    }

    @stock.Getter
    public setDataChart!:Array<any>;
  }
</script>

<style lang="css">
  .container-bg{
    background-color: rgb(28, 34, 43);
    border-radius: 10px;
    margin-top: 50px;
  }
</style>