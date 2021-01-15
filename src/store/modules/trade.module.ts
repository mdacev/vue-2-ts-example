import store from '@/store'
import {getTradeData} from '@/services/trade.services'
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

export interface TradeState {
  trades: Array<any>;
}

@Module({ name: 'trades', store, dynamic: true, namespaced: true })

class Trades extends VuexModule implements TradeState {
  public trades: Array<any> = []

  @Action({ rawError: true })
  public async getTrades () {
    const trades = await getTradeData();
    this.context.commit('GET_TRADES', trades)
  }

  @Mutation
  public GET_TRADES (data: Array<any>) {
    this.trades = data
  }

  get tradesData(): Array<any>{
    return this.trades;
  }
}

export const tradesModule = getModule(Trades)