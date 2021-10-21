import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name)
  }

  return (
    <form onSubmit={handleSubmit}>
    AppointmentForm
      <input 
      name='title'
      type='text'
      value={title}
      placeholder='Enter a title'
      required
      onChange={(e) => setTitle(e.target.value)}/>
      <input 
      name='date'
      type='date'
      value={date}
      required
      min={getTodayString()}
      onChange={(e) => setDate(e.target.value)}/>
      <input 
      name='time'
      type='time'
      value={time}
      required
      onChange={(e) => setTime(e.target.value)}/>
      <ContactPicker
      value={contact}
      type="text"
      name="contact"
      required
      onChange={(e) => setContact(e.target.value)}
      contacts={getContactNames()}
      />
      <input type='submit' value='Add Appointment'/>
    </form>
  );
};
