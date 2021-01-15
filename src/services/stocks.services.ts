import axios from 'axios';
import { ITicker } from '@/models/models';

export const eopPrices = axios.create({
    baseURL: 'http://192.168.0.28:8080'
})

export async function getPricesAPI() : Promise<Array<ITicker>  | undefined>{
    try{

        eopPrices.defaults.headers.common['Content-Type'] = 'application/json';
        const res  = await eopPrices.get('/test/data.json');
        return res.data.data;
    }
    catch(e){
        console.error(e);
    }
}

export async function getDataChartAPI() : Promise<Array<any>  | undefined>{
    try{

        eopPrices.defaults.headers.common['Content-Type'] = 'application/json';
        const res  = await eopPrices.get('/test/dataChartOpenClosed.json');
        return res.data;
    }
    catch(e){
        console.error(e);
    }
}