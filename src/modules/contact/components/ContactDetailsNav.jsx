import React from 'react';
import { Link } from 'react-router-dom'

export default function ContactDetailsNav({id}){
    return <nav className="contact-details-nav flex space-between">
        <Link to="/contact">
            <i className="fas fa-chevron-left icon"></i>
        </Link>
        {id && <Link to={`/contact/edit/${id}`}>
            <i className="fas fa-pencil-alt icon"></i>
        </Link>}
    </nav>
}