import store from '@/store'
import {getPricesAPI, getDataChartAPI} from '@/services/stocks.services'
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { ITicker } from '@/models/models';

export interface StocksState {
  stocks: Array<ITicker>;
}

@Module({ name: 'stock', store, dynamic: true, namespaced: true })

class Stock extends VuexModule implements StocksState {
  public stocks: Array<ITicker> = [];
  public dataChart: any = null;

  @Action({ rawError: true })
  public async getStocks () {
    const stocks = await getPricesAPI();
    this.context.commit('GET_STOCKS', stocks)
  }

  @Action({ rawError: true })
  public async getDatChart () {
    const dataChart = await getDataChartAPI();
    this.context.commit('GET_DATA_CHART', dataChart)
  }

  @Mutation
  public GET_STOCKS (data: Array<ITicker>) {
    this.stocks = data
  }

  @Mutation
  public GET_DATA_CHART (data: any) {
    this.dataChart = data.data.series;
  }

  get setStocks(): Array<ITicker>{
    return this.stocks;
  }

  get setDataChart(): any {
    return this.dataChart;
  }
}

export const stockModule = getModule(Stock)