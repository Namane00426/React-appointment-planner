import React, {useState, useEffect} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm'
import {TileList} from '../../components/tileList/TileList'

export const AppointmentsPage = ({
  appointments,
  contacts, 
  addAppointment,
  removeId,
  setRemoveId,
  removeAppointment,
  duplicate,
  setDuplicate
}) => {
 
   const [title, setTitle] = useState('');
   const [contact, setContact] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  useEffect(() => {
    const isDuplicate = () => {
      const found = appointments.find((appointment) => appointment.title === title)
      if(found !== undefined){
        return true;
        }
        return false;
      }

      if(isDuplicate()){
        setDuplicate(true);
        alert('The same title exists already! Enter some different title.');
        setTitle('');
      } else {
        setDuplicate(false);
      }

  }, [title, appointments, duplicate, setDuplicate])

  const rmHandleSubmit = (removeId) => {
    removeAppointment(removeId);
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
        setRemoveId={setRemoveId}
        rmHandleSubmit={rmHandleSubmit}
        removeId={removeId}
        />
      </section>
    </div>
  );
};
