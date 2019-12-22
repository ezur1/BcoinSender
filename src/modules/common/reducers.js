const INITIAL_STATE = {
    btcRate:0,
    btcMarketPrice:0,
    confirmedTrans:0
}

export default function bitcoinReducer(state = INITIAL_STATE,action){
    switch (action.type) {
        case 'SET_BTC_RATE':
            return {
                ...state,
                btcRate: action.rate
            }
        default:
            return state
    }
}