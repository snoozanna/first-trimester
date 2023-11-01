import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints.js';
import { QuestionContext } from '../context/question.context.js';

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

export default function QuestionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setFirstName, setLastName, setEmail, setQuestion } =
    useContext(QuestionContext);
 const [submitText, setSubmitText] = useState(null);
  const [buttonTxt, setButtonTxt] = useState("Submit");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // const onSubmit = (data) => {
  //   const { userFirstName, userLastName, userEmail, userQuestion } = data;
  //   console.log(data);
  //   setFirstName(userFirstName);
  //   setLastName(userLastName);
  //   setEmail(userEmail);
  //   setQuestion(userQuestion);

  // };
  const onSubmit = async (event, setSubmitText) => {
    event.preventDefault();
    setSubmitText("Submitting ...");
    const formElements = [...event.currentTarget.elements];
    const isValid =
      formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

    const validFormElements = isValid ? formElements : [];

    if (validFormElements.length < 1) {
      setSubmitText("It looks like you filled out too many fields!");
    } else {
      const filledOutElements = validFormElements
        .filter((elem) => !!elem.value)
        .map(
          (element) =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value),
        )
        .join("&");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setSubmitText("Successfully submitted");
          setButtonTxt("Sent!");
          setButtonDisabled(!buttonDisabled);
          //TODO form reset
        })
        .catch((error) => {
          console.log(error);
          setSubmitText(
            "Error!",
          );
        });
    }
  };

  return (
    <FormStyles name="question" id="contact" method="POST" data-netlify="true">
      <p style={{ display: "none" }}>
        <label>
          Don’t fill this out if you expect to hear from me!
          <input name="bot-field" />
        </label>
      </p>
      <input
        type="hidden"
        name="question-form"
        value="question"
        style={{ display: "none" }}
        readOnly={true}
      />

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
        <label htmlFor="userBSL">Can we add you to our mailing list?</label>

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
        <label htmlFor="question">Question</label>
        <textarea
          {...register("userQuestion", {
            required: "Question is required",
            maxLength: {
              value: 150,
              message: "150 character limit",
            },
          })}
          aria-invalid={errors.userQuestion ? "true" : "false"}
        />
        {errors.userQuestion && (
          <p role="alert">{errors.userQuestion?.message}</p>
        )}
      </InputItemStyles>

      <button type="submit" name="SendMessage" disabled={buttonDisabled}>
        {buttonTxt}
      </button>
    </FormStyles>
  );
}
