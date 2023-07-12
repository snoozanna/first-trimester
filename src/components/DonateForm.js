import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints.js';
import { FormContext } from '../context/form.context.js';

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--yellow);
  border-radius: 10px;
  padding: 2rem;
  max-width: 800px;
  p[role='alert'] {
    color: var(--pink);
    font-weight: 900;
  }
  label {
    color: black;
    font-weight: 600;
  }
  button {
    width: fit-content;
    margin: auto;
    color: black;
    --cast: 5px;
    box-shadow: var(--cast) var(--cast) 0 var(--black);
    font-weight: 600;
  }
  @media ${devices.mobileS} {
    width: 100%;
  }
`;

const InputItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 2rem;
  input {
    line-height: 1.5;
    padding: 5px 10px;
    font-weight: 900;
    font-size: 2rem;
  }
  input[type='submit'] {
    background-color: 'pink';
  }
  input:focus {
    background-color: var(--mustyblue);
    color: white;
    font-weight: 900;
    font-size: 2rem;
  }
`;

export default function DonateForm({ showForm, showWidget }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { firstName, lastName, email, setFirstName, setLastName, setEmail } =
    useContext(FormContext);

  const onSubmit = (data) => {
    const { userFirstName, userLastName, userEmail } = data;
    setFirstName(userFirstName);
    setLastName(userLastName);
    setEmail(userEmail);
    showForm();
    showWidget();
  };

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      <InputItemStyles>
        <label htmlFor="userFirstName">First Name</label>
        <input
          {...register('userFirstName', { required: true })}
          aria-invalid={errors.userFirstName ? 'true' : 'false'}
        />
        {errors.userFirstName?.type === 'required' && (
          <p role="alert">First name is required</p>
        )}
      </InputItemStyles>
      <InputItemStyles>
        <label htmlFor="userLastName">Last Name</label>
        <input
          {...register('userLastName', { required: true })}
          aria-invalid={errors.userLastName ? 'true' : 'false'}
        />
        {errors.userLastName?.type === 'required' && (
          <p role="alert">First name is required</p>
        )}
      </InputItemStyles>
      <InputItemStyles>
        <label htmlFor="userEmail">Email</label>
        <input
          {...register('userEmail', { required: 'Email Address is required' })}
          aria-invalid={errors.userEmail ? 'true' : 'false'}
        />
        {errors.userEmail && <p role="alert">{errors.userEmail?.message}</p>}
      </InputItemStyles>
      <button type="button" onClick={handleSubmit(onSubmit)}>
        Find appointment time
      </button>
    </FormStyles>
  );
}
