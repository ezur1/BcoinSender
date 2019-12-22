import ContactService from './ContactService'

const setCurrContact = (contact)=>{
    return{type: 'SET_CURR_CONTACT',contact}
}

export const loadCurrContact = (id)=>{
    return async (dispatch)=>{
        const contact = await ContactService.getContactById(id)
        return dispatch(setCurrContact(contact))
    }
}

const updateContact = (contact)=>{
    return {type:'UPDATE_CONTACT',contact}
}

export const saveContact = (contact) => {
    return async (dispatch) =>{
        const currContact = await ContactService.saveContact(contact)
        return dispatch(updateContact(currContact))
    }
}

const setContacts = (contacts) =>{
    return {type: 'SET_CONTACTS',contacts}
}

export const loadContacts = (filterBy = null)=>{
    return async (dispatch)=>{
        const contacts = await ContactService.getContacts(filterBy)
        return dispatch(setContacts(contacts))
    }  
}
const setRemoveContact = (id) =>{
    return {type: 'REMOVE_CONTACT',id}
}

export const removeContact = (id)=>{
    return async (dispatch)=>{
        await ContactService.deleteContact(id);
        return dispatch(setRemoveContact(id))
    }  
}