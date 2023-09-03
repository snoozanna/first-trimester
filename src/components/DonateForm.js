import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints.js';
import { FormContext } from '../context/form.context.js';

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--yellow);
  /* border: solid 4px white; */
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  max-width: 40rem;
  p[role="alert"] {
    color: var(--brightpurple);
    font-weight: 900;
  }
  label {
    color: black;
    font-weight: 900;
    margin-block-end: 0.5rem;
    font-family: var(--headings);
  }
  label.sublabel {

    font-weight: 400;
    font-size:inherit;
    span{
    margin-inline-end: 1rem;
    }
  }
  button {
    width: fit-content;
    margin: auto;
    color: white;
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
  span.hint {
    color: black;
    margin-block-end: 2rem;
    font-size: 1.5rem;
  }
  input, textarea {
    line-height: 1.5;
    padding: 5px 10px;
    font-weight: 900;
    font-size: 2rem;
    border: none;
    border-radius: 10px;
  }
  /* input[type="submit"] {
    background-color: "pink";
  } */
  input:focus, textarea:focus {
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
  const { setFirstName, setLastName, setEmail, setBSL, setPhone, setAccess, setPrefDate } =
    useContext(FormContext);

  const onSubmit = (data) => {
    const { userFirstName, userLastName, userEmail, userBSL, userPhone, userAccess, userPrefDate } = data;
    console.log(data);
    setFirstName(userFirstName);
    setLastName(userLastName);
    setEmail(userEmail);
    setBSL(userBSL);
    setPhone(userPhone);
    setAccess(userAccess);
      setPrefDate(userPrefDate);
    showForm();
    showWidget();
  };

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)} className>
      <InputItemStyles>
        <label htmlFor="userFirstName">First Name</label>
        <input
          {...register("userFirstName", {
            required: "First Name is required",
            maxLength: {
              value: 30,
              message: "30 character limit",
            },
          })}
          aria-invalid={errors.userFirstName ? "true" : "false"}
        />
        {errors.userFirstName && (
          <p role="alert">{errors.userFirstName?.message}</p>
        )}
      </InputItemStyles>
      <InputItemStyles>
        <label htmlFor="userLastName">Last Name</label>
        <input
          {...register("userLastName", {
            required: "Last Name is required",
            maxLength: {
              value: 30,
              message: "30 character limit",
            },
          })}
          aria-invalid={errors.userLastName ? "true" : "false"}
        />
        {errors.userLastName && (
          <p role="alert">{errors.userLastName?.message}</p>
        )}
      </InputItemStyles>
      <InputItemStyles>
        {/* Change others to this one  */}
        <label htmlFor="userEmail">Email</label>
        <input
          {...register("userEmail", {
            required: "Email Address is required",
            maxLength: {
              value: 30,
              message: "Email cannot exceed 30 characters",
            },
          })}
          aria-invalid={errors.userEmail ? "true" : "false"}
        />
        {errors.userEmail && <p role="alert">{errors.userEmail?.message}</p>}
      </InputItemStyles>
      <InputItemStyles>
        <label htmlFor="userPhone">Phone</label>
        <input
          type="tel"
          {...register("userPhone", {
            pattern: {
              // value: /^[0-9]{10}$/,  // Adjust the regex pattern as needed
              value: /^[+0-9-]{3,15}$/,
              message: "Invalid phone number",
            },
          })}
        />

        {errors.userPhone && <p role="alert">{errors.userPhone.message}</p>}
        {/* {errors.userPhone && <p role="alert">{errors.userPhone?.message}</p>} */}
      </InputItemStyles>
      <InputItemStyles>
        <label htmlFor="userPrefDate">Ideal performance dates</label>
        <span className="hint">Would you prefer a performance date in:</span>
        {/* <input
          type="checkbox"
          {...register("userPrefDate", { required: "This is required" })}
          aria-invalid={errors.userPrefDate ? "true" : "false"}
        ></input> */}
        <label htmlFor="WeekOne" className="sublabel">
          <span>Week 1: 1st-4th Nov 23</span>
          <input
            {...register("userPrefDate", { required: "This is required" })}
            type="radio"
            value="WeekOne"
            aria-invalid={errors.userPrefDate ? "true" : "false"}
          />
        </label>
        <label htmlFor="WeekTwo" className="sublabel">
          <span>Week 2: 7th-11th Nov 23</span>
          <input
            {...register("userPrefDate", { required: "This is required" })}
            type="radio"
            value="WeekTwo"
            aria-invalid={errors.userPrefDate ? "true" : "false"}
          />
        </label>
        {errors.userPrefDate && (
          <p role="alert">{errors.userPrefDate?.message}</p>
        )}
      </InputItemStyles>
      <InputItemStyles>
        <label htmlFor="userBSL">Do you require BSL interpretation?</label>
        <span className="hint">
          Please select YES if you would like a slot with a BSL user.{" "}
        </span>
        <select
          {...register("userBSL", { required: "This is required" })}
          aria-invalid={errors.userBSL ? "true" : "false"}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        {errors.userBSL && <p role="alert">{errors.userBSL?.message}</p>}
      </InputItemStyles>
      <InputItemStyles>
        <label htmlFor="userAccess">
          Do you have any other access requirements?
        </label>
        <textarea
          rows="5"
          cols="33"
          {...register("userAccess", { maxLength: 100 })}
        />
      </InputItemStyles>

      <button type="button" onClick={handleSubmit(onSubmit)}>
        Find appointment time
      </button>
    </FormStyles>
  );
}
