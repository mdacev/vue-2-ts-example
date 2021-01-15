export interface ITicker{
    id:string;
    date:string;
    high:number;
    low:number;
    open:number;
    close:number;
    volume:number;
    symb:string;

}

export interface ITrade{
    id:string,          // string trade id
    txid:string,         // transaction id in bytetrade
    order:string,     // sring order id
    timestamp: number,               // Unix timestamp in milliseconds
    datetime: Date,   // ISO8601 datetime with milliseconds
    symbol: string,                    // symbol
    name: string,                        // symbol name
    side :string,       // direction of the trade, buy or sell
    price: number,                      // price in quote currency
    amount: number,                       // amount of base currency
    cost: number                  // amount of quote currency
}