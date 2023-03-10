import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {

  const deleteContact=(id)=> props.getContact(id) 
  
  /* const data=[
    {id:1,name:"john",email:"john@gmail.com"},
    {id:"2",name:"mary",email:"mary@gmail.com"}

  ] */

  return (
    <div className='main'>
      <h2>Contact List</h2>
      <Link to="/add">
        <button className='ui violet button'>Add contacts</button>
      </Link>
      <div className='ui celled list'>
        {props.data.map(ele=><ContactCard key={ele.id} contact={ele}
       clickHandle={deleteContact}/>      )}
      </div>
    </div>
    
  )
}

export default ContactList