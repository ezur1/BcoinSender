import React from 'react';
import BitcoinService from '../../BitcoinService';
import { Sparklines,SparklinesLine,SparklinesSpots } from 'react-sparklines';

export default class Chart extends React.Component{
    state = {
        marketPrice: []
    }
    async componentDidMount(){
        let marketPrice = await BitcoinService.getMarketPrice();        
        this.setState({marketPrice})
    }
    render(){
        const {marketPrice} = this.state;
        return (
            <section className="stats">
                <h1>Stats</h1>
                <Sparklines  height={100} data={marketPrice.map(value => value.y)} margin={5}>
                <SparklinesLine style={{ strokeWidth: .5, stroke: "#6ac501e3"}} />
                <SparklinesSpots size={3.5}
                    style={{ stroke: "#6ac501e3", strokeWidth: .5, fill: "white" }} />
                </Sparklines>
            </section>
        )
    }
 }
