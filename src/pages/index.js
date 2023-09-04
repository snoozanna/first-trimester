import { Link, graphql } from 'gatsby';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "a b "
    "a d";
  max-height: 100vh;
  ::-webkit-scrollbar-track {
    display: none;
  }
  .hero-image-krishna {
    grid-column: a / b;
    grid-row: a/ c;
  }
  .hero-image-logo {
    margin-block-end: 3rem;
    width: fit-content;
    width: 80%;
  }
  .hero-logo-wrapper {
    grid-area: a;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .tagline {
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  h3.tagline {
    margin-block-end: 2rem;
  }

 

  @media ${devices.tablet} {
    grid-template-columns: 2fr 1fr;
    .hero-logo-wrapper {
      margin-block-end: 31rem;
    }
  }

  @media ${devices.mobileL} {
    min-height: 85vh;
    grid-template-columns: 2fr 1fr;
    .hero-logo-wrapper {
      max-width: 100%;
      display: flex;
      padding-left: var(--padding);
      align-items:flex-start;

    }
    .hero-logo-wrapper {
      margin-block-end: 0;
    }
    h3.tagline,
    h4.tagline {
      text-align: left;
      font-weight: 900;
      max-width: 80%;
    }
  }
`;



const HomePage = ({ data, location }) => {
   if (typeof window === "undefined") {
     return null;
   }
  const { setCurrentPage } = useContext(MenuContext);
  // process hero image
  // const heroImageData = data.general.nodes[0].hero.asset;
  const { hotspot, asset } = data.general.nodes[0].hero
  const heroImage = getImage(asset);

    // console.log("heroImageData", heroImageData);
  const matches = useMediaQuery("(min-width:428px)");

  // create the refs
  const infoPageRef = useRef(null);
  const whoPageRef = useRef(null);
  const processPageRef = useRef(null);
  const FAQPageRef = useRef(null);

  const handleScroll = () => {
    const options = {
      threshold: 0.5, // Set the threshold to 20% visibility
    };
    const infoPageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage("/info");
        }
      });
    }, options);

    const whoPageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage("/who");
        }
      });
    }, options);

    const processPageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage("/process");
        }
      });
    }, options);

    const FAQPageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage("/faqs");
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
      <SEO title="Home" />
      <Header v="Home" />

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
        <HomePageStyles className="hero">
          {matches ? (
            <GatsbyImage
              image={heroImage}
              alt="Krishna is kneeling in front of a mottled orangey yellow background"
              className="hero-image-krishna"
              placeholder="blurred"
              width={2000}
              // quality={100}
              imgStyle={{
                objectPosition: `${hotspot.x * 100}% ${hotspot.y * 100}%`,
              }}
            />
          ) : (
            <StaticImage
              src="./../assets/images/Hero_LowMob.png"
              placeholder="blurred"
              // layout="fixed"
              alt="Krishna is kneeling in front of a mottled orangey yellow background"
              quality={100}
              // width={400}
              className="hero-image-krishna"
            />
          )}

          <div className="hero-logo-wrapper">
            {matches ? (
              <StaticImage
                src="./../assets/images/FTShowTitle.png"
                alt={""}
                placeholder="blurred"
                // layout="fixed"
                // width={200}
                // width={400}
                className="hero-image-logo"
              />
            ) : null}

            <h3 className="tagline">
              <span>Looking to participate</span>{" "}
              <span>in First Trimester?</span>
            </h3>
            <h4 className="tagline">You're in the right place!</h4>
          </div>
        </HomePageStyles>
        <InfoPageWrapper data={data.info} ref={infoPageRef} />
        <WhoPageWrapper data={data.participate} ref={whoPageRef} />
        <StepsPageWrapper data={data.steps} ref={processPageRef} />
        <FAQPageWrapper data={data.faqs} ref={FAQPageRef} /> <HugeButton />
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
          hotspot {
            x
            y
            width
            height
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
