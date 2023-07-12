import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { InlineWidget } from 'react-calendly';
import { FormContext } from '../context/form.context';

const CalendarWidget = () => {
  const { firstName, lastName, email } = useContext(FormContext);
  return (
    <>
      <div className="calendarly-wrapper">
        <InlineWidget
          url="https://calendly.com/hurstsuzanna/initial-consultation?hide_landing_page_details=1&embed_type=Inline&embed_domain=1&back=1"
          // styles={{ height: 500 }}
          prefill={{
            firstName,
            lastName,
            email,
          }}
        />
      </div>
    </>
  );
};

export default CalendarWidget;
