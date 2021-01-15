import axios from 'axios';


export const eopTrade = axios.create({
    baseURL: 'http://192.168.0.28:8080'
})

export async function getTradeData() : Promise<Array<any>  | undefined>{

    let res:any;
    try{
            res = await eopTrade.get('/test/trade.json');
            return res.data;
    }
    catch(e){
            console.error(e);
            return res = e;
    }
}