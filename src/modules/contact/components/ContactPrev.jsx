import React from 'react';

export default function ContactPrev(props) {
    const { contact } = props
    return (
        <li className="contact-prev flex align-c">
            <img src={`https://avatars.dicebear.com/v2/avataaars/:${contact.name}.svg`} alt="" />
            <h2>{contact.name}</h2>
        </li>)
}