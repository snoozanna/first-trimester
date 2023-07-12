import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { InlineWidget } from 'react-calendly';
import { FormContext } from '../context/form.context';

const CalendarWidgetStyles = styled.div`
  width: 100%;
`;
const CalendarWidget = () => {
  const { firstName, lastName, email } = useContext(FormContext);
  return (
    <>
      <CalendarWidgetStyles className="calendarly-wrapper">
        <InlineWidget
          url="https://calendly.com/hurstsuzanna/initial-consultation?hide_landing_page_details=1&embed_type=Inline&embed_domain=1&back=1"
          // styles={{ height: 500 }}
          prefill={{
            firstName,
            lastName,
            email,
          }}
        />
      </CalendarWidgetStyles>
    </>
  );
};

export default CalendarWidget;
