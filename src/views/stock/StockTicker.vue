<template>
  <v-container class="container-bg">

      <stock-ticker-filter @change-filter="changeFilter" @change-order="changeOrder"></stock-ticker-filter>
      <v-row justify="center"  class="container-items" wrap>
          <v-col  cols="3" v-for="s in tickersFilteredAndSorted" :key="s.id" :v-if="tickersFilteredAndSorted.length > 0">
            <stock-ticker-item :stock="s"/>
          </v-col>
      </v-row>
  </v-container>
</template>


<script lang="ts">
  import { ITicker } from '@/models/models';
  import { stockModule } from '@/store/modules/stocks.module'
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { namespace } from 'vuex-class';
  import ccxt from 'ccxt';

  import StockTickerItem from './StockTickerItem.vue';
  import StockTickerFilter from './StockTickerFilter.vue';

  const stock = namespace('stock');

  @Component({
    components: {
      StockTickerItem,
      StockTickerFilter
    },
  })

  export default class Stocks extends Vue {

    newFilter:string='';
    newType:string='';
    selected!:string;

    mounted () {
      stockModule.getStocks();
    }

    @stock.Getter
    public setStocks!:Array<ITicker>;

    changeFilter(val:string){
        this.newFilter = val;
    }

    changeOrder (val:string){
        this.newType = val.toLowerCase();
       
    }

    //Computed
    get tickersFilteredAndSorted(){
      
      let t:string = this.newType.toLowerCase();

      this.selected = `text-${t} filter`;

      function compare(a:any , b:any){
            if(a[t] < b[t]) return 1;
            if(a[t] > b[t]) return -1;
            return 0;
      }
      if(this.newFilter !=''){
          const PATTERN = new RegExp(this.newFilter , 'i')
          return this.setStocks.filter( e => {
            return e.symb.match(PATTERN)
          }).sort(compare)
        }
        else{
          return this.setStocks.sort(compare);
      }

    }
  }
</script>

<style lang="css" scoped>
  .container-bg{
    background-color: rgb(28, 34, 43);
    border-radius: 10px;
    margin-top: 50px;
  }
  .container-items{
    height: 370px;
    overflow-y: scroll;
    margin-top: 10px;
  }
</style>