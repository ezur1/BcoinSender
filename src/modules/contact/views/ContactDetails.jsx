import React from 'react';

import ContactDetailsNav from '../components/ContactDetailsNav'
import { loadCurrContact } from '../actions'
import { connect } from 'react-redux'


class ContactDetails extends React.Component{
    
    async componentDidMount(){
        const { id } = this.props.match.params;
        const contact = await this.props.loadCurrContact(id);
        console.log(contact);
        
    }
    render(){
        const {contact} = this.props;
        return(
            contact &&
            <section className="contact-details flex col">
                <ContactDetailsNav id={contact._id}/>
                <div className="contact-info flex">
                    <img src={`https://avatars.dicebear.com/v2/avataaars/:${contact.name}.svg`} alt="" />
                    <div className="contact-info-content flex col">
                        <label>Name</label>
                        <h1>{contact.name}</h1>
                        <label>Phone Number</label>
                        <h1>{contact.phone}</h1>
                        <label>Email</label>
                        <h1 className="email">{contact.email}</h1>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) =>{
    return{contact:state.contact.currContact}
}

const mapDispatchToProps = {
    loadCurrContact
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactDetails)