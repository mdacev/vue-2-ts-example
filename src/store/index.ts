import { StocksState } from '@/store/modules/stocks.module';
import { TradeState } from '@/store/modules/trade.module';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface RootState {
  stocks: StocksState;
  trades: TradeState;
}

export default new Vuex.Store<RootState>({
})