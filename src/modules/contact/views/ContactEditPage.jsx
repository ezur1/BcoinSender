import React from 'react';
import ContactService from '../ContactService'
import ContactDetailsNav from '../components/ContactDetailsNav'
import{loadCurrContact,saveContact,removeContact} from '../actions'
import { connect } from 'react-redux';

class ContactEditPage extends React.Component{
    state={
        contact:null
    }
    updateContact = (ev,field) =>{
        const {value} = ev.target;
        this.setState(prevState=>{
            return{
                contact:{
                    ...prevState.contact,
                    [field]:value
                }
            }
        })
    }

    saveContact = async (ev)=>{
        ev.preventDefault();
        await this.props.saveContact(this.state.contact);
        this.props.history.push('/contact');
    }
    removeContact = async () =>{
        const id = this.state.contact._id;
        await this.props.removeContact(id);
        this.props.history.push('/contact');
    }

    async componentDidMount(){
        let contact;
        const { id } = this.props.match.params;
        if(id) {
            await this.props.loadCurrContact(id);
            return this.setState({contact:this.props.contact})
        }
        else contact = ContactService.getEmptyContact();
        this.setState({contact});
    }
    render(){
        const {contact} = this.state;
        return contact &&(
            <section className="contact-details flex col">
                <ContactDetailsNav id={contact._id}/>
                <div className="contact-info flex">
                <img src={`https://avatars.dicebear.com/v2/avataaars/:${contact.name}.svg`} alt="" />
                    <form action="" onSubmit={this.saveContact} className="contact-info-content flex col">
                        <label className="edit flex col"> Name
                        <input value={contact.name} onChange={(ev)=> this.updateContact(ev, 'name')} type="text"/>
                        </label>
                        <label className="edit flex col"> Phone Number
                        <input value={contact.phone} onChange={(ev)=> this.updateContact(ev, 'phone')} type="text"/>
                        </label>
                        <label className="edit flex col"> Email
                        <input className="email" value={contact.email} onChange={(ev)=> this.updateContact(ev, 'email')} type="email"/>
                        </label>
                        <button className="edit save-btn">
                            Save
                        </button>
                    </form>
                    <button onClick={this.removeContact} className="edit delete-btn ">
                        Delete
                    </button>
                </div>  
            </section>
        )
    }
}

const mapStateToProps = (state)=>{
    return {contact:state.contact.currContact}
}
const mapDispatchToProps={
    loadCurrContact,
    saveContact,
    removeContact
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(ContactEditPage)