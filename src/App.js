
import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './Component/AddContact';
import ContactCard from './Component/ContactCard';
import ContactList from './Component/ContactList';
import Header from './Component/Header';
//importing react router
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import ContactDetails from './Component/ContactDetails';

function App() {

  /* const contacts=[
    {id:1,name:"john",emaill:"john@gmail.com"},
    {id:2,name:"mary",emaill:"mary@gmail.com"}

  ] */
  const [contacts,setContacts]=useState([])
  //method as props
  const addContactHandler= (ele)=>{
    console.log(ele)
    setContacts([...contacts,{id:contacts.length,...ele}])//displaying previous contact details on display
  }
  console.log(contacts)

  //local storage...
  const LOCAL_STORAGE_KEY="contacts";
  //local storage...Get Item
  useEffect(()=>{
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContact) setContacts(retriveContact)
  },[])
  //local storage...Set Item
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

  //Delete function for deleting contacts
  //method as props
  const removeContact= id=>{
    const newContList=contacts.filter(ele=>ele.id !== id)
    setContacts(newContList)
  }
  return (
    <div className="ui container">
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={()=><ContactList data={contacts} getContact={removeContact}/>} ></Route>
        <Route path="/add"  component={(props)=><AddContact {...props} addContactHandler={addContactHandler} />} ></Route>
        <Route path="/contact/:id" component={ContactDetails}/>
        {/* path="/contact/:id" --> :id is called as wild route and it will change on the fly */}
      </Switch>

      </Router>

    </div>
  );
}

export default App;
