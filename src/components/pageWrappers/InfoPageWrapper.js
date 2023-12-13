import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import spermAlone from '../../assets/images/SpermAlone.png';
import Video from '../Video';
import { devices } from '../../styles/breakpoints';

import Header from '../Header';


const InfoPageStyles = styled.section`
  min-height: 60vh;
  background-size:cover;

  .info-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const HeroInfoStyles = styled.div`
  display: grid;
  grid-template-columns: var(--grid-pad-set);
  gap: 4rem;
  grid-auto-rows: auto;
`;

const QuestionsStyles = styled.div`
  font-family: var(--subheadings);
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  width: 100%;
  padding: var(--padding);
  /* padding: 1rem; */
  color: var(--white);
  display: flex;
  justify-content: center;
  font-variation-settings: "wght" 600;
  text-wrap: pretty;
  /* list-style-position:outside; */
  ul.questions-list {
    /* list-style-type: "🤯"; */
    li {
      display: flex;
      margin-block-end: 1rem;
      font-size: 2.2rem;
    }
    li .bullet-wrapper {
      margin-inline-end: 10px;
      display: block;
    }
    li img {
      max-width: 20px;
    }
  }
  @media ${devices.mobileL} {
    padding: var(--padding-mob);
  }
`;

const InfoPageWrapper = forwardRef(({ data }, ref) => {
  InfoPageWrapper.displayName = 'InfoPageWrapper';
  const info = data.nodes[0];
const imageData = data.nodes[0].image.asset;
const image = getImage(imageData);
  // useEffect(() => {
  //   setCurrentPage(pathname);
  // }, []);

  return (
    <>
      <Header v="ScrollPage" title="Info" />

      <InfoPageStyles ref={ref} id="info" className="narrow">
        <HeroInfoStyles className="hero-content-wrapper section narrow">
          <div className="hero-img-wrapper">
            <GatsbyImage
              image={image}
              alt="Krishna &  partner Rent holding a doll"
            />
          </div>
          <div className="hero-text-wrapper">
            <div className="funTitle green">
              <h3 className="catName">{info.heading}</h3>
            </div>

            <PortableText value={info.firstCopy} />
          </div>
        </HeroInfoStyles>
        <HeroInfoStyles>
          {" "}
          <QuestionsStyles className="questions">
            <ul className="questions-list">
              <li data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
                <span className="bullet-wrapper">
                  <img src={spermAlone} alt="" />
                </span>
                What’s your favourite way to move your body?
              </li>
              <li data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                <span className="bullet-wrapper">
                  <img src={spermAlone} alt="" />
                </span>
                Do you like to plan or go with the flow?
              </li>
              <li data-sal="fade" data-sal-delay="600" data-sal-easing="ease">
                <span className="bullet-wrapper">
                  <img src={spermAlone} alt="" />
                </span>
                What do you think happens when we die?
              </li>
              <li data-sal="fade" data-sal-delay="700" data-sal-easing="ease">
                <span className="bullet-wrapper">
                  <img src={spermAlone} alt="" />
                </span>
                Are you kind?
              </li>
              <li data-sal="fade" data-sal-delay="600" data-sal-easing="ease">
                <span className="bullet-wrapper">
                  <img src={spermAlone} alt="" />
                </span>
                Do you want children of your own?
              </li>
              <li data-sal="fade" data-sal-delay="900" data-sal-easing="ease">
                <span className="bullet-wrapper">
                  <img src={spermAlone} alt="" />
                </span>
                And most importantly, have you watched The Princess Diaries?
              </li>
            </ul>
          </QuestionsStyles>
        </HeroInfoStyles>
        <HeroInfoStyles className="hero-content-wrapper section narrow">
          <div>
            <PortableText value={info.secondCopy} />
          </div>
          {/* <Video url={info.bslvid} /> */}
        </HeroInfoStyles>
      </InfoPageStyles>
    </>
  );
});
export default InfoPageWrapper;
