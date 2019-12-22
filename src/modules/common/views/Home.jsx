import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {loadRate} from '../actions'
import Chart from '../components/Chart/Chart';

class Home extends React.Component{
    async componentDidMount(){
        await this.props.loadRate();
    }
    render(){
        const {user,rate}=this.props
        return(
            <section className="home-page flex">
                <div className="user-info">
                    <h1>Welcome back, {user.name}</h1>
                    <div className="flex space-between">
                        <section>
                            <span>CURRENT BALANCE</span>
                            <h3>BIT: <span>₿ {user.coins}</span></h3>
                            <h3>BTC : {rate}</h3>
                        </section>
                        <section className="btc-usd">
                            <span>CURRENT BTC USD</span>
                            <h1>{(user.coins*rate)*1000000}</h1>
                        </section>
                    </div>
                    <Chart />
                </div>
                {/* <div className="to-contact-list">
                    <Link to="contact">Go To Your Contacts</Link>
                </div> */}
            </section>
        )
    }
 }
const mapStateToProps = state =>{
    return {
        user:state.user,
        rate:state.bitcoin.btcRate
    }
}
const mapDispatchToProps = {
    loadRate
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)