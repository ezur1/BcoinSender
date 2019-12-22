const axios = require ('axios');

export default{
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(){
    var res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`);
    return new Promise((resolve, reject) => {
        if(res)return resolve(res.data)
        else reject('No service')
      })
}
async function getMarketPrice(){
    const marketPrice = await axios.get('https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true');
    console.log(marketPrice);
    return marketPrice.data.values;
}
async function getConfirmedTransactions(){
    return await axios.get('https://api.blockchain.info/charts/n-transactions?format=json');
}
