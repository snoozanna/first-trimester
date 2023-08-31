import React, { useState, useContext, useEffect } from 'react';


import { AnchorLink } from 'gatsby-plugin-anchor-links';
import CalendarWidget from '../components/CalendarWidget';
import spermAlone from '../assets/images/SpermAlone.png';
import DonateForm from '../components/DonateForm';

import { MenuContext } from '../context/menu.context';
import { devices } from '../styles/breakpoints.js';
// import HeaderMob from '../components/HeaderMob';
import Header from "../components/Header.js";
import { styled } from 'styled-components';

const DonatePageStyles = styled.section`
  margin-block-start: 10rem;
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  justify-content: center;
  align-items: start;
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  [data-container="booking-container"] {
    background-color: red;
  }
  p a {
    margin-inline-start: 5px;
    margin-inline-end: 5px;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
  }
  @media ${devices.tablet} {
    margin-block-start: 16rem;
  }
`;

const IntroTextStyles = styled.div`

  font-family: var(--subheadings);
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  width: 100%;
  padding: var(--padding);
  color: var(--lightgreen);
  display: flex;
  /* justify-content: center; */
  font-variation-settings: "wght" 600;
  ul.questions-list {
    /* list-style-type: "🤯"; */
    li {
      margin-block-end: 1rem;
    }
    li .bullet-wrapper {
      margin-inline-end: 10px;
    }
    li img {
      max-width: 20px;
    }
  }
  @media ${devices.mobileL} {
    padding: 0;
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
      <Header
        title="Apply to Participate"
        v="SinglePage"
    
      />
      <main>
        <DonatePageStyles className="narrow">
          <div className="info-text-wrapper">
            <div className="funTitle green">
              <h3 className="catName">Let's chat!</h3>
            </div>
            <IntroTextStyles className="questions">
              <ul className="questions-list">
                <li data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  Fill out this quick form.
                </li>
                <li data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  Select a time slot for a Zoom with one of our friendly
                  participation team members.
                </li>
                <li data-sal="fade" data-sal-delay="600" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  There will be slots available with a BSL signing participation
                  team member.
                </li>
                <li data-sal="fade" data-sal-delay="700" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                Do let us know in the form if you have other access
                  requirements.
                </li>
              </ul>
            </IntroTextStyles>

            <p>
              Have questions? We might have answered them in our
              <AnchorLink to="/#faqs" title="FAQs">
                FAQs
              </AnchorLink>
              section.
            </p>
          </div>
          <div>
            {/* <div className="page-title">
              <h2>Apply to Participate</h2>
            </div> */}
            {showForm ? (
              <DonateForm
                showForm={() => setShowForm(false)}
                showWidget={() => setShowWidget(true)}
              />
            ) : (
              ""
            )}
            {showWidget ? <CalendarWidget /> : ""}
          </div>
        </DonatePageStyles>
      </main>
    </>
  );
};

export default DonatePage;
