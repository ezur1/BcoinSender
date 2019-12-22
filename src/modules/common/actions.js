import BitcoinService from './BitcoinService'

const setBtcRate = (rate)=>{
    return {type:'SET_BTC_RATE',rate}
}
export const loadRate=()=>{
    return async (dispatch)=>{
        const rate = await BitcoinService.getRate()
        return dispatch(setBtcRate(rate))
    }
}