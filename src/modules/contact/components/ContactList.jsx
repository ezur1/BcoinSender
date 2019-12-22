import React from 'react';
import {Link} from 'react-router-dom'

import ContactPrev from './ContactPrev'

export default function ({contacts}) {
return (<ul className="contact-list">
        {contacts.map(contact => {
            return (
                <Link to={`/contact/${contact._id}`} key={contact._id}>
                    <ContactPrev contact={contact} />
                </Link>
            )
        })}
    </ul>)
}