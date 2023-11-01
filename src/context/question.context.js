import React, { createContext, useState } from 'react';

// we provide empty fn as defaults so it doesn't break the app if forget to pass a fn
export const QuestionContext = createContext({
  form: {
    firstName: "",
    lastName: "",
    email: "",
    question: "",
    setFirstName: () => {},
    setLastName: () => {},
    setEmail: () => {},
    setQuestion: () => {},
  },
});

export function QuestionProvider({ children }) {
  const [firstName, setFirstName] = useState('e');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState("");



  return (
    <QuestionContext.Provider
      value={{
        firstName,
        lastName,
        email,
        question,
        setFirstName,
        setLastName,
        setEmail,
        setQuestion,
       
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
export default QuestionContext;
