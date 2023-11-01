import React, { useState, useContext, useEffect } from 'react';
import { useMediaQuery } from "@mui/material";

import { AnchorLink } from 'gatsby-plugin-anchor-links';
import CalendarWidget from '../components/CalendarWidget';
import spermAlone from '../assets/images/SpermAlone.png';
import QuestionForm from "../components/QuestionForm";

import { MenuContext } from '../context/menu.context';
import { devices } from '../styles/breakpoints.js';
// import HeaderMob from '../components/HeaderMob';
import Header from "../components/Header.js";
import { styled } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

const QuestionPageStyles = styled.section`
  margin-block-start: 13rem;
  min-height: 60vh;
  /* margin: -1vw; */
  display: grid;
  grid-template-columns: var(--grid-pad-set);
  gap: 4rem;
  justify-content: center;
  align-items: center;
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
  color: var(--white);
  display: flex;

  font-variation-settings: "wght" 600;
  ul.questions-list {

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

const QuestionPage = ({ location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;

  const matches = useMediaQuery("(min-width:428px)");

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return (
    <>
      <SEO title="Ask a Question" />
      <Header title="Ask a Question" v="SinglePage" />
      {matches ? null : (
        <StaticImage
          src="./../assets/images/BackgroundLow.png"
          placeholder="blurred"
          // layout="fixed"
          alt=""
          className="background-mob"
          style={{
            position: "fixed",
          }}
        />
      )}
      <main>
        <QuestionPageStyles className="narrow">
          <div className="info-text-wrapper">
            <div className="funTitle green">
              <h3 className="catName">Want to add a question?</h3>
            </div>
            <IntroTextStyles className="questions">
              <ul className="questions-list">
                <li data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  Let us know your question here
                </li>
                <li data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  Krishna might even ask it in the show
                </li>
                {/* <li data-sal="fade" data-sal-delay="600" data-sal-easing="ease">
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
                </li> */}
              </ul>
            </IntroTextStyles>

            {/* <p>
              Have questions? We might have answered them in our
              <AnchorLink to="/#faqs" title="FAQs">
                FAQs
              </AnchorLink>
              section.
            </p> */}
          </div>
          <div>
              <QuestionForm/>
      
          </div>
        </QuestionPageStyles>
      </main>
    </>
  );
};

export default QuestionPage;
