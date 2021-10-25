import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "../src/containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "../src/containers/contactsPage/ContactsPage";

function App() {
  const [ contacts, setContacts ] = useState([{name: 'Sample Nanase.E', phone: '📞 333 111 2222', email:'📧 nanase@contacts.com'}]);
  const [ appointments, setAppointments ] = useState([{title: 'Sample meeting', contact: 'With: Sample Nanase.E', date: '📅 2021-12-01', time: '🕗 12:00'}]); 

  const [removeId, setRemoveId] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phone, email) => {
    phone = `📞 ${phone}` ;  
    email = `📧 ${email}` ;
    setContacts([
      ...contacts, {
        name: name,
        phone: phone,  
        email: email,
      }
    ])
  }
  const removeContact = (removeId) => {
    const newContacts = contacts.filter((contact) => contact.name !== removeId)

    setContacts(newContacts);
  }

 

  const addAppointment = (title, contact, date, time) => {

    contact = `With: ${contact}`;
    date = `📅 ${date}`;
    time = `🕗 ${time}`;  

    setAppointments([
      ...appointments, {
        title: title,
        contact: contact,
        date: date,
        time: time,
      }
    ])
  }

  const removeAppointment = (removeId) => {
    const newAppointments = appointments.filter((appointment) => appointment.title !== removeId);

    setAppointments(newAppointments);
  }


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage
            contacts={contacts} 
            addContact={addContact}
            removeContact={removeContact}
            removeId={removeId}
            setRemoveId={setRemoveId}
            duplicate={duplicate}
            setDuplicate={setDuplicate}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
            appointments={appointments}
            contacts={contacts} 
            addAppointment={addAppointment}
            removeAppointment={removeAppointment}
            removeId={removeId}
            setRemoveId={setRemoveId}
            duplicate={duplicate}
            setDuplicate={setDuplicate}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
