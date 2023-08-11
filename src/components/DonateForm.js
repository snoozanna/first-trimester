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
  width: 100%;
  max-width: 40rem;
  p[role='alert'] {
    color: var(--pink);
    font-weight: 900;
  }
  label {
    color: black;
    font-weight: 600;
    margin-block-end: 0.5rem;
    font-family: var(--headings)
  }
  button {
    width: fit-content;
    margin: auto;
    color: black;
    --cast: 5px;
    box-shadow: var(--cast) var(--cast) 0 var(--black);
    font-weight: 600;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const InputItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 2rem;
  select {
    max-width: 10rem;
    border-radius: 10px;
    padding: 5px;
    border: none;
  }
  input {
    line-height: 1.5;
    padding: 5px 10px;
    font-weight: 900;
    font-size: 2rem;
    border: none;
    border-radius: 10px;
  }
  input[type="submit"] {
    background-color: "pink";
  }
  input:focus {
    background-color: var(--mintgreen);
    color: black;
    font-weight: 900;
    font-size: 2rem;
    border: none;
  }
`;

export default function DonateForm({ showForm, showWidget }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setFirstName, setLastName, setEmail, setBSL } =
    useContext(FormContext);

  const onSubmit = (data) => {
    const { userFirstName, userLastName, userEmail, userBSL } = data;
    setFirstName(userFirstName);
    setLastName(userLastName);
    setEmail(userEmail);
    setBSL(userBSL);
    showForm();
    showWidget();
  };

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)} className>
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
          <p role="alert">Last name is required</p>
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
      <InputItemStyles>
        <label htmlFor="userBSL">Do you require BSL interpretation?</label>

        <select
          {...register('userBSL', { required: 'This is required' })}
          aria-invalid={errors.userBSL ? 'true' : 'false'}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {errors.userEmail && <p role="alert">{errors.userEmail?.message}</p>}
      </InputItemStyles>

      <button type="button" onClick={handleSubmit(onSubmit)}>
        Find appointment time
      </button>
    </FormStyles>
  );
}
