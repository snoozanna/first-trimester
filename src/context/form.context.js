import React, { createContext, useState } from 'react';

// we provide empty fn as defaults so it doesn't break the app if forget to pass a fn
export const FormContext = createContext({
  form: {
    firstName: 'e',
    lastName: '',
    email: '',
    setFirstName: () => {},
    setLastName: () => {},
    setEmail: () => {},
  },
});

export function FormProvider({ children }) {
  const [firstName, setFirstName] = useState('e');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <FormContext.Provider
      value={{
        firstName,
        lastName,
        email,
        setFirstName,
        setLastName,
        setEmail,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
export default FormContext;
