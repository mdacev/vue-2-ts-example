<template>
  <v-container class="container-bg">
    
      <v-row justify="center" wrap>
        
          <v-banner
            class="pt-0 banner"
            color="custom"
            elevation="3"
            width="50%"
            icon="mdi-account"
            single-line
            sticky
            
          >
            <v-row justify="center">
              <v-col cols="6" class="text-symbol">
                {{`Symbol: ${this.tradesData[0] === undefined ? '' : this.tradesData[0].symbol}`}}
              </v-col>
              <v-col cols="6" class="text-name">
                {{`Name: ${this.tradesData[0] === undefined ? '' : this.tradesData[0].name}`}}
              </v-col>
            </v-row>
          </v-banner>
        
        <v-col cols="12">
          <v-sheet
            class="pt-0 mb-1 v-sheet"
            color="custom"
            elevation="2"
            width="100%"
          >
            <v-text-field
              class="pl-3 pr-3 white--text filter-text"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search..."
              single-line
              hide-details
              color="secondary"
              dark
            ></v-text-field>
          </v-sheet>

          <v-data-table :headers="headers" :items="this.tradesData" :items-per-page="100"
                      item-key="name" class="elevation-1"
                      :search="search"
                      :hide-default-footer="true"
                      :height="380"
                      fixed-header
                      dense>
            <template v-slot:body="{ items }">
              <tbody>
                <tr :style="setColorRow(i+0.5)" v-for="(item, i) in items" :key="item.id">
                  <td>{{ formatDate(item.datetime) }}</td>
                  <td>{{ setValueFixed(item.price) }}</td>
                  <td>{{ setValueFixed(item.amount) }}</td>
                  <td>{{ setValueFixed(item.cost) }}</td>
                  <td>
                      <v-chip
                      :color="getColor(item.side)"
                      dark
                    >
                    {{ item.side }}
                  </v-chip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
  </v-container>
</template>

<script lang="ts">
 import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
 import { tradesModule } from '@/store/modules/trade.module'
 import { namespace } from 'vuex-class'
 import myMixin from '@/mixins/myMixin';

 
 import { ITrade } from '@/models/models'
 import moment from 'moment'
 import { mixins } from 'vue-class-component';
 import tableColors from '@/commons/TableColors'

 import TradeHeaders from '@/json_config/TradeHeaders.json'
 import TableColors from '@/commons/TableColors.ts'

const trades = namespace('trades');

@Component
export default class Trade extends mixins(myMixin){
  
  private search:string='';
  private item!: ITrade;
  private tc = new(TableColors);
 
  private headers:Array<any> = TradeHeaders;

    mounted () {
        tradesModule.getTrades();
    }

    @trades.Getter
    public tradesData!:Array<any>;

    
    private setColorRow(i:number):string{
        return this.tc.setColorRow(i);
    }

    private getColor (side:string) {
      if (side.toLocaleLowerCase() === 'buy') return 'green'
      else return 'red'
    }

    private formatDate(date:string){
      if(!date) return '';

        return moment(String(date)).format('YYYY-MM-DD hh:mm:ss');
    }

    private setValueFixed(val:string):string{
      return this.setFixedNumber(Number(val));
    }

}
</script>

<style lang="scss" scoped>
.container-bg{
  margin-top: 60px;
}
.banner{
  border-radius: 10px;
}
.v-sheet{
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.text-symbol{
  font-size: 14px;
  font-weight: bold;
  color: rgb(5, 70, 134);
}
.text-name{
  font-size: 12px;
  font-weight: 500;
  color: darkslategray;
}
.filter-text{
  background-color: black;
}
</style>
