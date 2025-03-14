import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { InlineWidget } from 'react-calendly';
import { FormContext } from '../context/form.context';

const CalendarWidgetStyles = styled.div`
  width: 100%;
`;
const CalendarWidget = () => {
  const { firstName, lastName, email, BSL, phone, access, prefDate } = useContext(FormContext);

    const CUrl =
      // "https://calendly.com/first-trimester-show/week-1-participation-zooms?hide_landing_page_details=1&embed_type=Inline&embed_domain=1&back=1";
      "https://calendly.com/first-trimester-show/bern-participant-zooms-test";
    return (
      <>
        {/* Prefers Week One */}
        <CalendarWidgetStyles className="calendarly-wrapper">
          <InlineWidget
            url={CUrl}
            // styles={{ height: 500 }}
            prefill={{
              name: `${firstName} ${lastName}`,
              email,
              customAnswers: {
        a1:phone,
        a2:access,  
    } 
            }}
          />
        </CalendarWidgetStyles>
      </>
    );
  
  
};

export default CalendarWidget;
