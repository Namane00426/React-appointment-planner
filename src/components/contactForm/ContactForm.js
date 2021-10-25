import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      ContactForm
      <input
      type='text'
      name='name'
      value={name}
      placeholder='Enter a name'
      required
      onChange={(e) => setName(e.target.value)}
      />
      <input
      type='text'
      name='phone'
      value={phone}
      placeholder='Enter a phone numbers: 123 456 7890'
      // pattern="^\d{3}\d{3}\d{4}$"
      required
      onChange={(e) => setPhone(e.target.value)}
      />
      <input
      type='text'
      name='email'
      value={email}
      placeholder='Enter a Email adress'
      required
      onChange={(e) => setEmail(e.target.value)}
      />
      <input
      type='submit'
      value='Add Contact'
      />
    </form>
  );
};