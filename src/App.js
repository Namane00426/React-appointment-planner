import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "../src/containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "../src/containers/contactsPage/ContactsPage";

function App() {
  const [ contacts, setContacts ] = useState([]);
  const [ appointments, setAppointments ] = useState([]); 

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts, {
        name: name,
        phone: phone,
        email: email,
      }
    ])
  }

  const removeContact = (indexToRemove) => {
    contacts.filter((contact, index) => contact.index !== indexToRemove)
  }

 

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments, {
        title: title,
        contact: contact,
        date: date,
        time: time,
      }
    ])
  }

  const removeAppointment = (indexToRemove) => {
    appointments.filter((appointment, index) => appointment.index !== indexToRemove)
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
            removeContact={removeContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
            appointments={appointments}
            contacts={contacts} 
            addAppointment={addAppointment}
            removeAppointment={removeAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
