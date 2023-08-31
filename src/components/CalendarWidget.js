import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { InlineWidget } from 'react-calendly';
import { FormContext } from '../context/form.context';

const CalendarWidgetStyles = styled.div`
  width: 100%;
`;
const CalendarWidget = () => {
  const { firstName, lastName, email, BSL, phone, access, prefDate } = useContext(FormContext);
  if (BSL === "true") {
    const CUrl =
      "https://calendly.com/first-trimester-show/bsl-participation-zooms?hide_landing_page_details=1&embed_type=Inline&embed_domain=1&back=1";
    return (
      <>
        {/* Requires BSL */}
        <CalendarWidgetStyles className="calendarly-wrapper">
          <InlineWidget
            url={CUrl}
            // styles={{ height: 500 }}
            prefill={{
              firstName,
              lastName,
              email,
              customAnswers: {
                a1: phone,
                a2: access,
              },
            }}
          />
        </CalendarWidgetStyles>
      </>
    );
  } else if (prefDate=== "WeekOne"){
    const CUrl =
      "https://calendly.com/first-trimester-show/week-1-participation-zooms?hide_landing_page_details=1&embed_type=Inline&embed_domain=1&back=1";
    return (
      <>
        {/* Prefers Week One */}
        <CalendarWidgetStyles className="calendarly-wrapper">
          <InlineWidget
            url={CUrl}
            // styles={{ height: 500 }}
            prefill={{
              firstName,
              lastName,
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
  } else if (prefDate === "WeekTwo"){
    const CUrl =
      "https://calendly.com/first-trimester-show/week-2-participation-zooms?hide_landing_page_details=1&embed_type=Inline&embed_domain=1&back=1";
    return (
      <>
        {/* Prefers Week Two */}
        <CalendarWidgetStyles className="calendarly-wrapper">
          <InlineWidget
            url={CUrl}
            // styles={{ height: 500 }}
            prefill={{
              firstName,
              lastName,
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
  } else{
return (
  <>
    {/* default */}
    <CalendarWidgetStyles className="calendarly-wrapper">
      <InlineWidget
        url={CUrl}
        // styles={{ height: 500 }}
        prefill={{
          firstName,
          lastName,
          email,
          customAnswers: {
            a1: phone,
            a2: access,
          },
        }}
      />
    </CalendarWidgetStyles>
  </>
);
  }
  
};

export default CalendarWidget;
