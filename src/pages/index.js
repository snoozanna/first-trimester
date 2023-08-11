import { Link, graphql } from 'gatsby';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';

import sperm from '../assets/images/sperm.gif';
import logoText from '../assets/images/FTLogo_white.png';

import { devices } from '../styles/breakpoints.js';
import { MenuContext } from '../context/menu.context.js';
import HomePageHeroButton from '../components/HomePageHeroButton.js';
import InfoPageWrapper from '../components/pageWrappers/InfoPageWrapper.js';
import WhoPageWrapper from '../components/pageWrappers/WhoPageWrapper.js';
import StepsPageWrapper from '../components/pageWrappers/ProcessPageWrapper.js';
import HeaderHome from '../components/HeaderHome.js';
import FAQPageWrapper from '../components/pageWrappers/FAQPageWrapper.js';
import HugeButton from '../components/HugeButton.js';

const HomePageStyles = styled.section`
  /* padding: clamp(5px, 5vw, 25px); */
  min-height: 70vh;

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: auto auto;
  grid-template-areas:
    'a a b b'
    'a a . d'; */
  /* gap: 2rem; */
  .hero-text-wrapper {
    grid-area: b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .site-title {
      font-size: 10rem;
      margin-bottom: 2rem;
    }
    .tagline {
      font-weight: 600;
      font-size: 2rem;
    }
  }
  .hero-img-wrapper {
    grid-area: a;
    background-color: var(--yellow);
    width: 80%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
      color: black;
    }
  }

  @media ${devices.mobileL} {
    min-height: 85vh;
    grid-template-columns: repeat(3, minmax(50px, 1fr));
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'a a .'
      'a a b'
      '. e d';
    gap: 2rem;
    .hero-text-wrapper {
      grid-row-start: 2;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 4;
      align-items: start;
      .site-title {
        font-size: 6rem;
        margin-bottom: 2rem;
        text-align: right;
        width: min-content;
        .tagline {
          backgroundcolor: var(--yellow);
        }
      }
    }
    .hero-img-wrapper {
      height: 300px;
      width: inherit;
    }
  }
`;

const HomePage = ({ data, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  // const [activeSection, setActiveSection] = useState('home');
  // const { setCurrentPage } = useContext(MenuContext);

  const { pathname } = location;

  // create the refs
  const infoPageRef = useRef(null);
  const whoPageRef = useRef(null);
  const processPageRef = useRef(null);
  const FAQPageRef = useRef(null);
  // const headerElement = headerRef.current;

  const handleScroll = () => {
    const options = {
      threshold: 0.5, // Set the threshold to 20% visibility
    };

    // const infoPageElement = infoPageRef.current;
    // const whoPageElement = whoPageRef.current;
    // const processPageElement = processPageRef.current;
    // console.log(headerElement, infoPageElement, whoPageElement);
    // // Get the boundingClientRect for the header and each section
    // const headerRect = headerElement.getBoundingClientRect();
    // const infoPageRect = infoPageElement.getBoundingClientRect();
    // const whoPageRect = whoPageElement.getBoundingClientRect();
    // const processPageRect = processPageElement.getBoundingClientRect();
    const infoPageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage('/info');
        }
      });
    }, options);

    const whoPageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage('/who');
        }
      });
    }, options);

    const processPageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage('/process');
        }
      });
    }, options);

    const FAQPageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage('/faqs');
        }
      });
    }, options);

    infoPageObserver.observe(infoPageRef.current);
    whoPageObserver.observe(whoPageRef.current);
    processPageObserver.observe(processPageRef.current);
    FAQPageObserver.observe(FAQPageRef.current);
  };

  useEffect(() => {
    setCurrentPage('/');
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <Parallax pages={7} style={{ top: "0", left: "0" }}> */}
        <HeaderHome />

        <HomePageStyles className="narrow">
          <div className="hero-text-wrapper">
            {/* <h1 className="site-title">First Trimester</h1> */}
            {/* <img src={logoText} alt="logo" /> */}
            <p>Main image</p>
            <h3 className="tagline">Could you be our ideal sperm donor?</h3>
          </div>
          {/* <img src={sperm} alt="A wiggling sperm gif" /> */}

          {/* <HomePageHeroButton /> */}
        </HomePageStyles>

        <InfoPageWrapper data={data.info} ref={infoPageRef} />
        {/* <ParallaxLayer offset={2} speed={0.2}>
          <img src={sperm} alt="logo" />  
          <img src={sperm} alt="logo" />
          <img src={sperm} alt="logo" />
        </ParallaxLayer> */}
        <WhoPageWrapper data={data.participate} ref={whoPageRef} />
   
          <StepsPageWrapper
            data={data.steps}
            ref={processPageRef}
     
          />
 
        <FAQPageWrapper data={data.faqs} ref={FAQPageRef} />
        <HugeButton />
      {/* </Parallax> */}
    </>
  );
};

export default HomePage;

export const query = graphql`
  query HomeQuery($FAQRegex: String) {
    info: allSanityInfo {
      nodes {
        id
        bslvid
        heading
        firstCopy: _rawFirstCopy(resolveReferences: { maxDepth: 5 })
        secondCopy: _rawSecondCopy(resolveReferences: { maxDepth: 5 })
      }
    }
    participate: allSanityParticipate {
      nodes {
        id
        heading
        bslvid
        copy: _rawCopy(resolveReferences: { maxDepth: 5 })
      }
    }
    steps: allSanitySteps(sort: { stepNumber: ASC }) {
      nodes {
        stepNumber
        id
        heading
        explanation: _rawExplanation(resolveReferences: { maxDepth: 5 })
      }
    }
    faqs: allSanityFaq(
      filter: {
        faqCategories: { elemMatch: { category: { regex: $FAQRegex } } }
      }
    ) {
      nodes {
        question
        id
        answer: _rawAnswer(resolveReferences: { maxDepth: 5 })
        faqCategories {
          category
        }
      }
    }
  }
`;
