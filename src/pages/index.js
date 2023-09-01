import { Link, graphql } from 'gatsby';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import sperm from "./../assets/images/sperm.gif"
import logo from "./../assets/images/FTShowTitle.png"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from '../components/SEO';
import { devices } from '../styles/breakpoints.js';
import { MenuContext } from '../context/menu.context.js';

import InfoPageWrapper from '../components/pageWrappers/InfoPageWrapper.js';
import WhoPageWrapper from '../components/pageWrappers/WhoPageWrapper.js';
import StepsPageWrapper from '../components/pageWrappers/ProcessPageWrapper.js';
import FAQPageWrapper from "../components/pageWrappers/FAQPageWrapper.js";
import Header from '../components/Header.js';


import HugeButton from '../components/HugeButton.js';
import { useMediaQuery } from '@mui/material';

const HomePageStyles = styled.section`
  /* min-height: 70vh; */
  background-image: url("https://cdn.sanity.io/images/1mkamazd/production/bd61193c7c3d01aa422ff6a83532c927fbd0952f-1920x1152.png");
  background-size: cover;
  ::-webkit-scrollbar-track {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-image {
    margin-block-end: 3rem;
  }
  .hero-logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .placeholder {
    width: 40%;
  }
  .hero-logo-wrapper,
  .placeholder {
    max-width: 40%;
  }
  .tagline {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  h3.tagline {
    margin-block-end: 2rem;
  }

  @media ${devices.mobileL} {
    min-height: 85vh;
    .placeholder {
      width: 30%;
    }
    .hero-logo-wrapper {
      max-width: 65%;
      margin-block-end: 15rem;
      display: flex;
      align-items: flex-start;
    }
    h3.tagline,
    h4.tagline {
      text-align: left;
      font-weight: 900;
      max-width: 60%;
    }
  }
`;

const SpermAnimStyles = styled.div`
max-width: 200px;
position:fixed ;
display:flex;
right: 0;
opacity: 0.3;
    /* animation: travel 20s ease 0s infinite normal forwards; */
    @keyframes travel {
      0% {
        opacity: 0.3;
        transform: rotate(0deg);
        transform-origin: top;
      }

      100% {
        opacity: 0;
        transform: rotate(10deg) translateY(-1200px);
        transform-origin: top;
      }
    }
  img{
    max-width: 100%;
  }

`;

const HomePage = ({ data, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const heroImageData = data.general.nodes[0].hero.asset;
  const heroImage = getImage(heroImageData);
 const matches = useMediaQuery("(min-width:428px)");


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
    setCurrentPage("/");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // }, [prevScrollPos]);
    }, []);

  return (
    <>
      <SEO />
      <Header v="Home" />

      <main>
        <HomePageStyles className="hero">
          <div className="hero-logo-wrapper">
            {matches ? (<StaticImage
              src="./../assets/images/FTShowTitle.png"
              alt={""}
              placeholder="blurred"
              // layout="fixed"
              // width={200}
              height={200}
              className="hero-image"
            /> ): null}

            <h3 className="tagline">
              <span>Looking to participate</span>{" "}
              <span>in First Trimester?</span>
            </h3>
            <h4 className="tagline">You're in the right place!</h4>
          </div>
          <div className="placeholder"></div>
        </HomePageStyles>
        <InfoPageWrapper data={data.info} ref={infoPageRef} />
        <WhoPageWrapper data={data.participate} ref={whoPageRef} />

        <StepsPageWrapper data={data.steps} ref={processPageRef} />

        <FAQPageWrapper data={data.faqs} ref={FAQPageRef} />
        {/* <Parallax pages={3} style={{ top: "0", left: "0" }}>
          <ParallaxLayer offset={2} speed={0.2}>
            <div class="spermZoomWrapper">
              <img src={sperm} alt="logo" />
              <img src={sperm} alt="logo" />
              <img src={sperm} alt="logo" />
            </div>
          </ParallaxLayer>
        </Parallax> */}

        <HugeButton />
        {/* </Parallax> */}
      </main>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query HomeQuery($FAQRegex: String) {
    general: allSanityGeneral {
      nodes {
        background {
          asset {
            gatsbyImageData
          }
        }
        hero {
          asset {
            gatsbyImageData
          }
          # credit
          # altText
        }
      }
    }
    info: allSanityInfo {
      nodes {
        id
        bslvid
        heading
        firstCopy: _rawFirstCopy(resolveReferences: { maxDepth: 5 })
        secondCopy: _rawSecondCopy(resolveReferences: { maxDepth: 5 })
        image {
          asset {
            gatsbyImageData
          }
          # credit
          # altText
        }

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
        heading: _rawHeading(resolveReferences: { maxDepth: 5 })
        explanation: _rawExplanation(resolveReferences: { maxDepth: 5 })
      }
    }
    faqs: allSanityFaq(
      sort: { number: ASC }
      filter: {
        faqCategories: { elemMatch: { category: { regex: $FAQRegex } } }
      }
    ) {
      nodes {
        number
        question
        id
        answer: _rawAnswer(resolveReferences: { maxDepth: 5 })
        faqCategories {
          category
        }
        bslvid
      }
    }
  }
`;
