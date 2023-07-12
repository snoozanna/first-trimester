import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import CalendarWidget from '../components/CalendarWidget';
import DonateForm from '../components/DonateForm';
import { FormContext } from '../context/form.context';
import { MenuContext } from '../context/menu.context';
import { devices } from '../styles/breakpoints.js';

const DonatePageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  [data-container='booking-container'] {
    background-color: red;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const DonatePage = ({ location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;
  const [showWidget, setShowWidget] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return (
    <>
      <DonatePageStyles className="narrow">
        <div className="info-text-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quis. Quod, labore?
          </p>
        </div>
        {showForm ? (
          <DonateForm
            showForm={() => setShowForm(false)}
            showWidget={() => setShowWidget(true)}
          />
        ) : (
          ''
        )}
        {showWidget ? <CalendarWidget /> : ''}
      </DonatePageStyles>
    </>
  );
};

export default DonatePage;
