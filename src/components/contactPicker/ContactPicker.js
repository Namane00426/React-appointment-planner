import React from "react";

export const ContactPicker = ({
  contacts,
  onChange
}) => {
  return (
    <select  onChange={onChange}>
    <option selected="selected" key={""} value={-1}>Select contact</option>

    {contacts?.map((contact) => 
    <option key={contact} value={contact}>{contact}</option>)}
  </select>
  );
};
