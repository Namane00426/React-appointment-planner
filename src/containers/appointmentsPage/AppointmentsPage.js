import React, {useState} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm'
import {TileList} from '../../components/tileList/TileList'

export const AppointmentsPage = ({
  appointments,
  contacts, 
  addAppointment,
  removeAppointment,
}) => {
 
   const [title, setTitle] = useState('');
   const [contact, setContact] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');
   const [rmIndex, setRmIndex] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  const rmHandleSubmit = (index) => {
    const rmIndex = index;
    removeAppointment(rmIndex);
    setRmIndex('');
  }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        title={title}
        setTitle={setTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
        tiles={appointments}
        rmIndex={rmIndex}
        rmHandleSubmit={rmHandleSubmit}
        />
      </section>
    </div>
  );
};
