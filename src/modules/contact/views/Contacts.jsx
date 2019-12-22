import React from 'react';
import {connect} from 'react-redux'
import {loadContacts} from '../actions'
import ContactList from '../components/ContactList'
import { Link } from 'react-router-dom'
import ContactService from '../ContactService'

class Contacts extends React.Component{
    state={
        filter:'',
        onSearch:false
    }
    async componentDidMount() {
        await this.props.loadContacts()
    }
    goSearch=()=>{
        var onSearchOn= !this.state.onSearch;
        this.setState({onSearch:onSearchOn})
    }
    onFilter = async (ev) => {
        let filter = {};
        filter.term = ev.target.value;
        await this.props.loadContacts(filter)
    }
    render(){
        const { contacts } = this.props
        const{onSearch}= this.state
        return(
            <section className="contacts">
                <div className="flex align-c space-between">
                    <h1>Contacts</h1>
                    <div>
                        {onSearch&&<input type="text" onChange={this.onFilter} />}
                        <i onClick={this.goSearch} className="fas fa-search"></i>
                        <Link to={'/contact/edit'}>
                            <i className="fas fa-user-plus"></i>
                        </Link>
                    </div>
                </div>
                <ContactList contacts={contacts}/>
            </section>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        contacts:state.contact.contacts
    }
}
const mapDispatchToProps={
    loadContacts
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contacts)